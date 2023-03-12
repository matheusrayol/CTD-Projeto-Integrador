package br.com.notcars.dto.characteristics;

import javax.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CharacteristicsRequest {
  @NotEmpty(message = "name is required")
  private String name;

  @NotEmpty(message = "icon is required")
  private String icon;
}
