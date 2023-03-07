package br.com.notcars.dto.product;

import br.com.notcars.dto.category.CategoryResponse;
import br.com.notcars.dto.characteristics.CharacteristicsResponse;
import br.com.notcars.dto.city.CityResponse;
import br.com.notcars.dto.image.ImageResponse;
import java.util.List;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductResponse {
  private String name;

  private String description;

  private CategoryResponse categoryId;

  private CityResponse cityId;

  private List<CharacteristicsResponse> characteristics;

  private List<ImageResponse> images;
}
