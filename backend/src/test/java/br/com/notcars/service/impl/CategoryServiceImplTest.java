package br.com.notcars.service.impl;


import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

import br.com.notcars.dto.category.CategoryRequest;
import br.com.notcars.exceptions.NotFoundException;
import br.com.notcars.mapper.CategoryMapper;
import br.com.notcars.model.CategoryEntity;
import br.com.notcars.repository.CategoryRepository;
import java.util.List;
import java.util.Optional;
import lombok.var;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;

@ExtendWith(MockitoExtension.class)
class CategoryServiceImplTest {
  @Mock
  private CategoryRepository categoryRepository;

  @Mock
  private CategoryMapper categoryMapper;

  @InjectMocks
  private CategoryServiceImpl categoryService;

  @Nested
  class CreateCategoryById {
    @Test
    void shouldCreateCategorySuccessfully() {
      // Arrange
      when(categoryMapper.toCategoryEntity(any())).thenReturn(mock(CategoryEntity.class));
      when(categoryRepository.save(any())).thenReturn(mock(CategoryEntity.class));

      // Act
      var result = categoryService.createCategory(mock(CategoryRequest.class));

      // Assert
      assertNotNull(result);
      verify(categoryMapper, times(1)).toCategoryEntity(any());
      verify(categoryRepository, times(1)).save(any());
    }
  }

  @Nested
  public class FindAllCategory {
    @Test
    void shouldReturnPage_whenListOfCategoryNotEmpty() {
      // Arrange
      when(categoryRepository.findAll()).thenReturn(List.of(mock(CategoryEntity.class)));

      // Act
      var result = categoryService.findAllCategory();

      // Assert
      assertEquals(1, result.size());
      verify(categoryRepository, timeout(1)).findAll();
    }

    @Test
    void shouldReturnPageEmpty_whenListOfCategoryIsEmpty() {
      // Arrange
      when(categoryRepository.findAll()).thenReturn(List.of());

      // Act
      var result = categoryService.findAllCategory();

      // Assert
      assertEquals(0, result.size());
      verify(categoryRepository, timeout(1)).findAll();
    }
  }


  @Nested
  class FindCategoryById {
    @Test
    void shouldReturnCategory_whenIdIsValid() {
      // Arrange
      when(categoryRepository.findById(anyLong()))
        .thenReturn(Optional.of(mock(CategoryEntity.class)));

      // Act
      var result = categoryService.findCategoryById(1L);

      // Assert
      assertNotNull(result);
      verify(categoryRepository, times(1)).findById(anyLong());
    }

    @Test
    void shouldReturnError_whenCategoryNotFound() {
      // Arrange
      when(categoryRepository.findById(anyLong()))
        .thenReturn(Optional.empty());

      // Act
      var result = assertThrows(NotFoundException.class, () -> {
        categoryService.findCategoryById(1L);
      });

      // Assert
      assertThat(result.getTitle())
        .isEqualTo("category_not_found");
      verify(categoryRepository, times(1)).findById(anyLong());
    }
  }

  @Nested
  class DeleteCategoryById {
    @Test
    void shouldDeleteCategory_whenCategoryExists() {
      // Arrange
      when(categoryRepository.findById(anyLong()))
        .thenReturn(Optional.of(mock(CategoryEntity.class)));

      // Act
      categoryService.deleteCategoryById(1L);

      // Assert
      verify(categoryRepository, times(1)).findById(anyLong());
      verify(categoryRepository, times(1)).deleteById(anyLong());
    }

    @Test
    void shouldReturnError_whenCategoryNotExists() {
      // Arrange
      when(categoryRepository.findById(anyLong()))
        .thenReturn(Optional.empty());

      // Act
      var result = assertThrows(NotFoundException.class, () -> {
        categoryService.deleteCategoryById(1L);
      });

      // Assert
      assertThat(result.getTitle())
        .isEqualTo("category_not_found");
      verify(categoryRepository, times(1)).findById(anyLong());
      verify(categoryRepository, never()).deleteById(anyLong());
    }
  }

  @Nested
  class UpdatedCategory {
    @Test
    void shouldUpdateCategory_whenIdIsValid() {
      // Arrange
      when(categoryRepository.findById(anyLong()))
        .thenReturn(Optional.of(mock(CategoryEntity.class)));
      when(categoryRepository.save(any())).thenReturn(mock(CategoryEntity.class));
      when(categoryMapper.updateCategoryEntity(any(), any())).thenReturn(mock(CategoryEntity.class));

      // Act
      var result = categoryService.updatedCategory(1L, mock(CategoryRequest.class));

      // Assert
      assertNotNull(result);
      verify(categoryRepository, times(1)).findById(anyLong());
      verify(categoryRepository, times(1)).save(any());
    }

    @Test
    void shouldReturnError_whenIdIsNotValid() {
      // Arrange
      when(categoryRepository.findById(anyLong()))
        .thenReturn(Optional.empty());

      // Act
      var result = assertThrows(NotFoundException.class, () -> {
        categoryService.updatedCategory(1L, mock(CategoryRequest.class));
      });

      // Assert
      assertThat(result.getTitle())
        .isEqualTo("category_not_found");
      verify(categoryRepository, times(1)).findById(anyLong());
      verify(categoryRepository, never()).save(any());
    }
  }

}