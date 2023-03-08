package br.com.notcars.dto.image;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ImageResponse {
  private Long id;

  private String title;

  private String urlImage;
}
