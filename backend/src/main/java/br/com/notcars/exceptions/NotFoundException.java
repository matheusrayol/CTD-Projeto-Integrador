package br.com.notcars.exceptions;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NotFoundException extends RuntimeException{
  private String title;

  public NotFoundException(String message) {
    super(message);
  }

  public NotFoundException(String title, String message) {
    super(message);
    this.title = title;
  }
}
