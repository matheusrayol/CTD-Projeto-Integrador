package br.com.notcars.service.impl;

import br.com.notcars.dto.category.CategoryRequest;
import br.com.notcars.exceptions.NotFoundException;
import br.com.notcars.mapper.CategoryMapper;
import br.com.notcars.model.CategoryEntity;
import br.com.notcars.repository.CategoryRepository;
import br.com.notcars.service.CategoryService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

  private final CategoryRepository categoryRepository;

  private final CategoryMapper categoryMapper;

  @Override
  public List<CategoryEntity> findAllCategory() {
    return categoryRepository.findAll();
  }

  @Override
  public CategoryEntity findCategoryById(Long id) {
    return categoryRepository.findById(id).orElseThrow(() -> new NotFoundException("category_not_found", String.format("category %s not found", id)));
  }

  @Override
  public void deleteCategoryById(Long id) {
    findCategoryById(id);
    categoryRepository.deleteById(id);
  }

  @Override
  public CategoryEntity createCategory(CategoryRequest categoryRequest) {
    final CategoryEntity categoryEntity = categoryMapper.toCategoryEntity(categoryRequest);
    return categoryRepository.save(categoryEntity);
  }

  @Override
  public CategoryEntity updatedCategory(Long id, CategoryRequest categoryRequest) {
    CategoryEntity categoryEntity = findCategoryById(id);
    return categoryRepository.save(categoryMapper.updateCategoryEntity(categoryEntity, categoryRequest));
  }
}
