package br.com.dh.potatocars.mapper;

import br.com.dh.potatocars.dto.category.CategoryRequest;
import br.com.dh.potatocars.dto.category.CategoryResponse;
import br.com.dh.potatocars.repository.category.CategoryEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface CategoryMapper {
  CategoryEntity toCategoryEntity(CategoryRequest categoryRequest);

  CategoryResponse toCategoryResponse(CategoryEntity categoryEntity);

  @Mapping(source = "categoryEntity.id", target = "id")
  @Mapping(source = "categoryRequest.qualification", target = "qualification")
  @Mapping(source = "categoryRequest.descriptions", target = "descriptions")
  @Mapping(source = "categoryRequest.urlImage", target = "urlImage")
  CategoryEntity updateCategoryEntity (CategoryEntity categoryEntity, CategoryRequest categoryRequest);
}
