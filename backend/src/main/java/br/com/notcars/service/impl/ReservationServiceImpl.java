package br.com.notcars.service.impl;

import br.com.notcars.config.aspect.LogInfo;
import br.com.notcars.dto.reservation.ReservationRequest;
import br.com.notcars.exceptions.BadRequestException;
import br.com.notcars.mapper.ReservationMapper;
import br.com.notcars.model.ProductEntity;
import br.com.notcars.model.ReservationEntity;
import br.com.notcars.model.UserEntity;
import br.com.notcars.repository.ReservationRepository;
import br.com.notcars.service.EmailService;
import br.com.notcars.service.ProductService;
import br.com.notcars.service.ReservationService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Log4j2
public class ReservationServiceImpl implements ReservationService {
  private final ReservationRepository reservationRepository;

  private final UserServiceImpl userService;

  private final ProductService productServiceImpl;
  private final ReservationMapper reservationMapper;

  private final EmailService emailServiceImpl;

  @LogInfo
  @Override
  public ReservationEntity createReservation(ReservationRequest reservationRequest) throws Exception {
    if (!isAvailable(reservationRequest)) {
      throw new BadRequestException("já existe uma reserva para este produto na data selecionada!");
    }
    UserEntity user = userService.findByEmail(reservationRequest.getUserEmail());
    ProductEntity product = productServiceImpl.findProductById(reservationRequest.getProductId());
    ReservationEntity reservation = reservationMapper.toEntity(reservationRequest, user, product);
    reservation = reservationRepository.save(reservation);
    emailServiceImpl.sendEmail(reservationRequest.getUserEmail(), "Reserva criada com sucesso!", emailServiceImpl.reservationEmail(user.getName(), reservation));
    return reservation;
  }

  @LogInfo
  @Override
  public List<ReservationEntity> findAllByProductId(Long productId) {
    return reservationRepository.findAllByProduct_Id(productId);
  }

  @Override
  @LogInfo
  public List<ReservationEntity> findAllByUserId(Long id) {
    return reservationRepository.findAllByUser_Id(id);
  }

  @LogInfo
  private boolean isAvailable(ReservationRequest reservationRequest) {
    List<ReservationEntity> reservation =
      reservationRepository.findAllByAvailability(reservationRequest.getProductId(), reservationRequest.getDateBegin(), reservationRequest.getDateEnd());
    return reservation.isEmpty();
  }


}
