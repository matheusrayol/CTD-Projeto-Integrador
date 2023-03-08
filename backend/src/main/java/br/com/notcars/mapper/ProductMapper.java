package br.com.notcars.mapper;

import br.com.notcars.dto.product.ProductRequest;
import br.com.notcars.dto.product.ProductResponse;
import br.com.notcars.model.*;
import java.util.List;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ProductMapper {

  @Mapping(source = "productRequest.name" , target = "name")
  @Mapping(source = "productRequest.description" , target = "description")
  @Mapping(target = "id", ignore = true)
  ProductEntity toEntity(ProductRequest productRequest,
                         CategoryEntity category,
                         CityEntity city,
                         List<CharacteristicsEntity> characteristicsList,
                         List<ImageEntity> imageList);

  ProductResponse toResponse(ProductEntity product);
}
