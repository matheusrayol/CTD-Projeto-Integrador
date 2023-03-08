package br.com.notcars.dto.city;

import javax.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CityRequest {
  @NotBlank(message = "name is required")
  private String name;

  @NotBlank(message = "country is required")
  private String country;
}
