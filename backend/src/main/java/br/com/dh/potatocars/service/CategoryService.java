package br.com.dh.potatocars.service;

import br.com.dh.potatocars.dto.category.CategoryRequest;
import br.com.dh.potatocars.repository.category.CategoryEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface CategoryService {
  Page<CategoryEntity> findAllCategory(Pageable pageable);

  CategoryEntity findCategoryById(Long id);

  void deleteCategoryById(Long id);

  CategoryEntity createCategory(CategoryRequest categoryRequest);

  CategoryEntity updatedCategory(Long id, CategoryRequest categoryRequest);
}
