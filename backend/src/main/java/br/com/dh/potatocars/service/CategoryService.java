package br.com.dh.potatocars.service;

import br.com.dh.potatocars.dto.category.CategoryRequest;
import br.com.dh.potatocars.repository.category.CategoryEntity;
import java.util.List;


public interface CategoryService {
  List<CategoryEntity> findAllCategory();

  CategoryEntity findCategoryById(Long id);

  void deleteCategoryById(Long id);

  CategoryEntity createCategory(CategoryRequest categoryRequest);

  CategoryEntity updatedCategory(CategoryRequest categoryRequest);
}
