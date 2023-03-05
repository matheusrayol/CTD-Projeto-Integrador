package br.com.notcars.dto.category;

import javax.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CategoryRequest {
  @NotBlank(message = "qualification is required")
  private String qualification;

  @NotBlank(message = "descriptions is required")
  private String descriptions;

  @NotBlank(message = "urlImage is required")
  private String urlImage;
}
