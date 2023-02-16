package br.com.dh.potatocars.service.impl;

import br.com.dh.potatocars.dto.category.CategoryRequest;
import br.com.dh.potatocars.repository.category.CategoryEntity;
import br.com.dh.potatocars.repository.category.CategoryRepository;
import br.com.dh.potatocars.service.CategoryService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {
  private final CategoryRepository categoryRepository;

  @Override
  public List<CategoryEntity> findAllCategory() {
    return null;
  }

  @Override
  public CategoryEntity findCategoryById(Long id) {
    return null;
  }

  @Override
  public void deleteCategoryById(Long id) {

  }

  @Override
  public CategoryEntity createCategory(CategoryRequest categoryRequest) {
    return null;
  }

  @Override
  public CategoryEntity updatedCategory(CategoryRequest categoryRequest) {
    return null;
  }
}
