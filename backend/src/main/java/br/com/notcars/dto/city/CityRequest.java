package br.com.notcars.dto.city;

import javax.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CityRequest {
  @NotBlank
  private String name;

  @NotBlank
  private String country;
}
