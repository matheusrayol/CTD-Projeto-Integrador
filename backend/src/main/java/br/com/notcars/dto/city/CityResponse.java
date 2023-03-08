package br.com.notcars.dto.city;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CityResponse {
  private Long id;

  private String name;

  private String country;
}
