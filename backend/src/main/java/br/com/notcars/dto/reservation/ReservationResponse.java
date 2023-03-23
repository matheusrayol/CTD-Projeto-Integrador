package br.com.notcars.dto.reservation;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.time.LocalDate;
import java.time.LocalTime;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReservationResponse {
  private Long id;

  @JsonFormat(pattern="HH:mm:ss")
  private LocalTime hourStartReservation;

  @JsonFormat(pattern="yyyy-MM-dd")
  private LocalDate dateBegin;

  @JsonFormat(pattern="yyyy-MM-dd")
  private LocalDate dateEnd;

  private String email;

  private Long productId;
}
