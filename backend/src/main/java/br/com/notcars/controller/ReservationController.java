package br.com.notcars.controller;

import br.com.notcars.dto.reservation.ReservationRequest;
import br.com.notcars.dto.reservation.ReservationResponse;
import br.com.notcars.mapper.ReservationMapper;
import br.com.notcars.model.ReservationEntity;
import br.com.notcars.service.ReservationService;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/reservation")
@RequiredArgsConstructor
@Log4j2
public class ReservationController {
  private static final String START_REQUEST = "[START REQUEST]";

  private static final String BASE_URL = "/reservation";
  private final ReservationService reservationServiceImpl;

  private final ReservationMapper reservationMapper;

  @PostMapping("/create")
  public ResponseEntity<ReservationResponse> createReservation(@RequestBody ReservationRequest reservation) {
    log.info(START_REQUEST + "[POST] " + BASE_URL + "/create");
    ReservationEntity reservationEntity = reservationServiceImpl.createReservation(reservation);
    return ResponseEntity.status(HttpStatus.CREATED).body(reservationMapper.toReservationResponse(reservationEntity));
  }

  @GetMapping("/product/{productId}")
  public ResponseEntity<List<ReservationResponse>> findReservationByProductId(@PathVariable Long productId) {
    log.info(START_REQUEST + "[GET] " + BASE_URL + "/product/" + productId);
    List<ReservationEntity> reservation = reservationServiceImpl.findAllByProductId(productId);
    return ResponseEntity.ok(reservation.stream().map(reservationMapper::toReservationResponse).collect(Collectors.toList()));
  }
}
