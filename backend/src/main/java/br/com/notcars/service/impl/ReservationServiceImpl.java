package br.com.notcars.service.impl;

import br.com.notcars.dto.reservation.ReservationRequest;
import br.com.notcars.exceptions.BadRequestException;
import br.com.notcars.mapper.ReservationMapper;
import br.com.notcars.model.ProductEntity;
import br.com.notcars.model.ReservationEntity;
import br.com.notcars.model.UserEntity;
import br.com.notcars.repository.ReservationRepository;
import br.com.notcars.service.ProductService;
import br.com.notcars.service.ReservationService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReservationServiceImpl implements ReservationService {
  private final ReservationRepository reservationRepository;

  private final UserServiceImpl userService;

  private final ProductService productServiceImpl;
  private final ReservationMapper reservationMapper;

  @Override
  public ReservationEntity createReservation(ReservationRequest reservationRequest) {
    if(!isAvailable(reservationRequest)){
      throw new BadRequestException("já existe uma reserva para este produto na data selecionada!");
    }
    UserEntity user = userService.findByEmail(reservationRequest.getUserEmail());
    ProductEntity product = productServiceImpl.findProductById(reservationRequest.getProductId());
    ReservationEntity reservation = reservationMapper.toEntity(reservationRequest, user, product);
    return reservationRepository.save(reservation);
  }

  @Override
  public List<ReservationEntity> findAllByProductId(Long productId) {
    return reservationRepository.findAllByProduct_Id(productId);
  }

  private boolean isAvailable(ReservationRequest reservationRequest) {
    List<ReservationEntity> reservation =
      reservationRepository.findAllByAvailability(reservationRequest.getProductId(), reservationRequest.getDateBegin(), reservationRequest.getDateEnd());
    return reservation.isEmpty();
  }


}
