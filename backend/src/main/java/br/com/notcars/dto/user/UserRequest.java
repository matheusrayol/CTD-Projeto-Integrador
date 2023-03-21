package br.com.notcars.dto.user;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRequest {
  private String name;

  private String surname;

  private String email;

  private String password;

  private Long functionId;
}
