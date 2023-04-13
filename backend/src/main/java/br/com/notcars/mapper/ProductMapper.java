package br.com.notcars.mapper;

import br.com.notcars.dto.category.CategoryResponse;
import br.com.notcars.dto.characteristics.CharacteristicsResponse;
import br.com.notcars.dto.city.CityResponse;
import br.com.notcars.dto.image.ImageResponse;
import br.com.notcars.dto.product.ProductRequest;
import br.com.notcars.dto.product.ProductResponse;
import br.com.notcars.model.*;
import java.util.List;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ProductMapper {

  @Mapping(source = "productRequest.name", target = "name")
  @Mapping(source = "productRequest.description", target = "description")
  @Mapping(target = "id", ignore = true)
  ProductEntity toEntity(ProductRequest productRequest,
                         CategoryEntity category,
                         CityEntity city,
                         List<CharacteristicsEntity> characteristicsList,
                         List<ImageEntity> imageList);

  @Mapping(source = "product.imageList", target = "images")
  @Mapping(source = "product.characteristicsList", target = "characteristics")
  ProductResponse toResponse(ProductEntity product);

  @Mapping(source = "product.id", target = "id")
  @Mapping(source = "product.name", target = "name")
  @Mapping(source = "product.description", target = "description")
  ProductResponse toResponse(ProductEntity product,
                             CategoryResponse categoryResponse,
                             CityResponse cityResponse,
                             List<CharacteristicsResponse> characteristics,
                             List<ImageResponse> images);

  @Mapping(source = "productEntity.id", target = "id")
  @Mapping(source = "productRequest.name", target = "name")
  @Mapping(source = "productRequest.description", target = "description")
  @Mapping(source = "productRequest.sustainability", target = "sustainability")
  @Mapping(source = "category", target = "category")
  @Mapping(source = "city", target = "city")
  @Mapping(source = "characteristicsList", target = "characteristicsList")
  @Mapping(source = "imageList", target = "imageList")
  ProductEntity updateProductEntity (ProductEntity productEntity, ProductRequest productRequest,
                                     CategoryEntity category,
                                     CityEntity city,
                                     List<CharacteristicsEntity> characteristicsList,
                                     List<ImageEntity> imageList);
}
