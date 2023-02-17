package br.com.dh.potatocars.mapper;

import br.com.dh.potatocars.dto.category.CategoryRequest;
import br.com.dh.potatocars.dto.category.CategoryResponse;
import br.com.dh.potatocars.repository.category.CategoryEntity;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface CategoryMapper {
  CategoryEntity toCategoryEntity(CategoryRequest categoryRequest);

  CategoryResponse toCategoryResponse(CategoryEntity categoryEntity);
}
