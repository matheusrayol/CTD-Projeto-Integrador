package br.com.notcars.service.impl;


import br.com.notcars.dto.category.CategoryRequest;
import br.com.notcars.exceptions.NotFoundException;
import br.com.notcars.mapper.CategoryMapper;
import br.com.notcars.model.CategoryEntity;
import br.com.notcars.repository.CategoryRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
@DisplayName("CategoryServiceImpl")
class CategoryServiceImplTest {
    @Mock
    private CategoryRepository categoryRepository;

    @Mock
    private CategoryMapper categoryMapper;

    @InjectMocks
    private CategoryServiceImpl categoryService;

    @Nested
    public class CreateCategory {
        @Test
        @DisplayName("Uma categoria deve ser criada com sucesso")
        void shouldCreateCategorySuccessfully() {
            // Arrange
            when(categoryMapper.toCategoryEntity(any())).thenReturn(mock(CategoryEntity.class));
            when(categoryRepository.save(any())).thenReturn(mock(CategoryEntity.class));

            // Act
            CategoryEntity result;
            result = categoryService.createCategory(mock(CategoryRequest.class));

            // Assert
            assertNotNull(result);
            verify(categoryMapper, times(1)).toCategoryEntity(any());
            verify(categoryRepository, times(1)).save(any());
        }
    }

    @Nested
    public class FindAllCategory {
        @Test
        @DisplayName("Deve retornar uma lista quando a lista de Categorias não for vazia")
        void shouldReturnList_whenListOfCategoryNotEmpty() {
            // Arrange
            when(categoryRepository.findAll()).thenReturn(List.of(mock(CategoryEntity.class)));

            // Act
            List<CategoryEntity> result;
            result = categoryService.findAllCategory();

            // Assert
            assertEquals(1, result.size());
            verify(categoryRepository, timeout(1)).findAll();
        }

        @Test
        @DisplayName("Deve retornar uma lista vazia quando a lista de Categorias for vazia")
        void shouldReturnListEmpty_whenListOfCategoryIsEmpty() {
            // Arrange
            when(categoryRepository.findAll()).thenReturn(List.of());

            // Act
            List<CategoryEntity> result;
            result = categoryService.findAllCategory();

            // Assert
            assertEquals(0, result.size());
            verify(categoryRepository, timeout(1)).findAll();
        }
    }

    @Nested
    public class FindCategoryById {
        @Test
        @DisplayName("Deve localizar uma categoria por ID quando o ID for válido")
        void shouldReturnCategory_whenIdIsValid() {
            // Arrange
            when(categoryRepository.findById(anyLong()))
                    .thenReturn(Optional.of(mock(CategoryEntity.class)));

            // Act
            CategoryEntity result;
            result = categoryService.findCategoryById(1L);

            // Assert
            assertNotNull(result);
            verify(categoryRepository, times(1)).findById(anyLong());
        }

        @Test
        @DisplayName("Deve retornar um erro quando a categoria não for encontrada")
        void shouldReturnError_whenCategoryNotFound() {
            // Arrange
            when(categoryRepository.findById(anyLong())).thenReturn(Optional.empty());

            // Act
            NotFoundException result;
            result = assertThrows(
                    NotFoundException.class,
                    () -> categoryService.findCategoryById(1L));

            // Assert
            assertThat(result.getTitle()).isEqualTo("category_not_found");
            verify(categoryRepository, times(1)).findById(anyLong());
        }
    }

    @Nested
    public class DeleteCategoryById {
        @Test
        @DisplayName("A categoria deve ser excluída com sucesso caso exista")
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
        @DisplayName("Um erro deve ser exibido ao tentar excluir uma categoria inexistente")
        void shouldReturnError_whenCategoryNotExists() {
            // Arrange
            when(categoryRepository.findById(anyLong())).thenReturn(Optional.empty());

            // Act
            NotFoundException result;
            result = assertThrows(
                    NotFoundException.class,
                    () -> categoryService.deleteCategoryById(1L));

            // Assert
            assertThat(result.getTitle()).isEqualTo("category_not_found");
            verify(categoryRepository, times(1)).findById(anyLong());
            verify(categoryRepository, never()).deleteById(anyLong());
        }
    }

    @Nested
    public class UpdatedCategory {
        @Test
        @DisplayName("Uma categoria deve ser atualizada se a ID for válida")
        void shouldUpdateCategory_whenIdIsValid() {
            // Arrange
            when(categoryRepository.findById(anyLong()))
                    .thenReturn(Optional.of(mock(CategoryEntity.class)));
            when(categoryRepository.save(any())).thenReturn(mock(CategoryEntity.class));
            when(categoryMapper.updateCategoryEntity(any(), any()))
                    .thenReturn(mock(CategoryEntity.class));

            // Act
            CategoryEntity result;
            result = categoryService.updatedCategory(1L, mock(CategoryRequest.class));

            // Assert
            assertNotNull(result);
            verify(categoryRepository, times(1)).findById(anyLong());
            verify(categoryRepository, times(1)).save(any());
        }

        @Test
        @DisplayName("Deve retornar um erro caso a ID da categoria não seja válida")
        void shouldReturnError_whenIdIsNotValid() {
            // Arrange
            when(categoryRepository.findById(anyLong())).thenReturn(Optional.empty());

            // Act
            NotFoundException result;
            result = assertThrows(
                    NotFoundException.class,
                    () -> categoryService.updatedCategory(1L, mock(CategoryRequest.class)));

            // Assert
            assertThat(result.getTitle()).isEqualTo("category_not_found");
            verify(categoryRepository, times(1)).findById(anyLong());
            verify(categoryRepository, never()).save(any());
        }
    }

    @Test
    @DisplayName("Deve retornar todas as categorias")
    void findAllCategoryReturnsAllCategories() {
        CategoryEntity categoryEntity;
        categoryEntity = mock(CategoryEntity.class);
        List<CategoryEntity> categoryEntityList;
        categoryEntityList = List.of(categoryEntity);
        when(categoryRepository.findAll()).thenReturn(categoryEntityList);

        List<CategoryEntity> result;
        result = categoryService.findAllCategory();

        assertEquals(categoryEntityList, result);
        verify(categoryRepository, times(1)).findAll();
    }
}