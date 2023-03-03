package br.com.notcars.exceptions;

import java.time.LocalDateTime;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ExceptionDetails {
  private String titulo;
  private String mensagem;
  private int status;
  private LocalDateTime timestamp;
}