package br.com.notcars.service;

import br.com.notcars.dto.category.CategoryRequest;
import br.com.notcars.repository.category.CategoryEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface CategoryService {
  Page<CategoryEntity> findAllCategory(Pageable pageable);

  CategoryEntity findCategoryById(Long id);

  void deleteCategoryById(Long id);

  CategoryEntity createCategory(CategoryRequest categoryRequest);

  CategoryEntity updatedCategory(Long id, CategoryRequest categoryRequest);
}
