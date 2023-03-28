package br.com.notcars.dto.reservation;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.time.LocalDate;
import java.time.LocalTime;
import javax.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReservationRequest {

  @NotNull(message = "hour start is required")
  @JsonFormat(pattern="HH:mm:ss")
  private LocalTime hourStartReservation;

  @NotNull(message = "date begin is required")
  @JsonFormat(pattern="yyyy-MM-dd")
  private LocalDate dateBegin;

  @NotNull(message = "date end is required")
  @JsonFormat(pattern="yyyy-MM-dd")
  private LocalDate dateEnd;

  @NotNull(message = "user email start is required")
  private String userEmail;

  @NotNull(message = "product id is required")
  private Long productId;
}
