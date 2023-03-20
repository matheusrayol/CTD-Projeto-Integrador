package br.com.notcars.exceptions;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BadRequestException extends RuntimeException{
  private String title = "bad_request";

  public BadRequestException(String message) {
    super(message);
  }

  public BadRequestException(String title, String message) {
    super(message);
    this.title = title;
  }
}
