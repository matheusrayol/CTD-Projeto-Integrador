package br.com.notcars.dto.user;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRequest {
  @NotBlank(message = "name is required")
  private String name;

  @NotBlank(message = "surname is required")
  private String surname;

  @NotBlank(message = "email is required")
  private String email;

  @NotBlank(message = "password is required")
  private String password;

  @NotNull(message = "function is required")
  private Long functionId;
}
