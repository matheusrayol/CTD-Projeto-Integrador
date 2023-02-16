package br.com.dh.potatocars.mapper;

import br.com.dh.potatocars.dto.category.CategoryRequest;
import br.com.dh.potatocars.repository.category.CategoryEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CategoryMapper {
  CategoryEntity toCategoryEntity(CategoryRequest categoryRequest);
}
