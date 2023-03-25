package br.com.notcars.dto.user;

import javax.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuthenticateRequest {
  @NotBlank(message = "email is required")
  private String email;

  @NotBlank(message = "password is required")
  private String password;
}
