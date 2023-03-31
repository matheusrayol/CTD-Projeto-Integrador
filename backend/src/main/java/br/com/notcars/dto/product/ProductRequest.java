package br.com.notcars.dto.product;

import br.com.notcars.dto.characteristics.CharacteristicsRequest;
import br.com.notcars.dto.image.ImageRequest;
import java.util.List;
import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ProductRequest {
  @NotBlank(message = "name is required")
  private String name;

  @NotBlank(message = "description is required")
  private String description;


  @NotNull(message = "sustainability is required")
  private Integer sustainability ;

  @NotNull(message = "categoryId is required")
  private Long categoryId;

  @NotNull(message = "cityId is required")
  private Long cityId;

  @Valid
  @NotEmpty(message = "characteristics list is required")
  private List<Long> characteristics;

  @Valid
  @NotEmpty(message = "images list is required")
  private List<ImageRequest> images;
}
