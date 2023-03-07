package br.com.notcars.dto.product;

import br.com.notcars.dto.characteristics.CharacteristicsRequest;
import br.com.notcars.dto.image.ImageRequest;
import java.util.List;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductRequest {
  private String name;

  private String description;

  private Long categoryId;

  private Long cityId;

  private List<CharacteristicsRequest> characteristics;

  private List<ImageRequest> images;
}
