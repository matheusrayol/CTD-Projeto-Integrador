package br.com.notcars.service;

import br.com.notcars.config.aspect.LogInfo;
import br.com.notcars.dto.reservation.ReservationRequest;
import br.com.notcars.model.ReservationEntity;
import java.util.List;

public interface ReservationService {
  ReservationEntity createReservation(ReservationRequest reservation) throws Exception;

  List<ReservationEntity> findAllByProductId(Long productId);

  @LogInfo
  List<ReservationEntity> findAllByUserId(Long id);
}
