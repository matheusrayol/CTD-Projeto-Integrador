package br.com.notcars.dto.image;

import javax.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ImageRequest {
  @NotBlank(message = "title is required")
  private String title;

  @NotBlank(message = "urlImage is required")
  private String urlImage;
}
