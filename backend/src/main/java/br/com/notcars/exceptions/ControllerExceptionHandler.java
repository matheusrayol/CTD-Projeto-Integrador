package br.com.notcars.exceptions;

import java.time.LocalDateTime;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ControllerExceptionHandler {
  @ExceptionHandler(NotFoundException.class)
  public ResponseEntity<ExceptionDetails> handlerNotFoundException(NotFoundException ex) {
    return new ResponseEntity<>(
      ExceptionDetails.builder()
        .titulo(ex.getTitle())
        .mensagem(ex.getMessage())
        .timestamp(LocalDateTime.now())
        .status(HttpStatus.NOT_FOUND.value())
        .build(),
      HttpStatus.NOT_FOUND);
  }

}
