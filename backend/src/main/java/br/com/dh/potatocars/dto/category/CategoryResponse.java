package br.com.dh.potatocars.dto.category;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CategoryResponse {
  private Long id;
  private String descriptions;
  private String qualification;
  private String urlImage;
}
