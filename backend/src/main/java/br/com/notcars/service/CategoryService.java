package br.com.notcars.service;

import br.com.notcars.dto.category.CategoryRequest;
import br.com.notcars.model.CategoryEntity;
import java.util.List;


public interface CategoryService {
  List<CategoryEntity> findAllCategory();

  CategoryEntity findCategoryById(Long id);

  void deleteCategoryById(Long id);

  CategoryEntity createCategory(CategoryRequest categoryRequest);

  CategoryEntity updatedCategory(Long id, CategoryRequest categoryRequest);
}
