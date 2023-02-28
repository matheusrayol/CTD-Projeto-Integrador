package br.com.dh.potatocars.service.impl;

import br.com.dh.potatocars.dto.category.CategoryRequest;
import br.com.dh.potatocars.exceptions.NotFoundException;
import br.com.dh.potatocars.mapper.CategoryMapper;
import br.com.dh.potatocars.repository.category.CategoryEntity;
import br.com.dh.potatocars.repository.category.CategoryRepository;
import br.com.dh.potatocars.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

  private final CategoryRepository categoryRepository;

  private final CategoryMapper categoryMapper;

  @Override
  public Page<CategoryEntity> findAllCategory(Pageable pageable) {

    return categoryRepository.findAll(pageable);
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
