package br.com.notcars.controller;

import br.com.notcars.dto.category.CategoryRequest;
import br.com.notcars.dto.category.CategoryResponse;
import br.com.notcars.exceptions.NotFoundException;
import br.com.notcars.mapper.CategoryMapper;
import br.com.notcars.model.CategoryEntity;
import br.com.notcars.service.CategoryService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Objects;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
@DisplayName("CategoryController")
class CategoryControllerTest {
    @Mock
    private CategoryService categoryServiceImpl;

    @Mock
    private CategoryMapper categoryMapper;

    @InjectMocks
    private CategoryController categoryController;

    @Test
    @DisplayName("should throw an exception when the category id is not found")
    void updatedCategoryByIdThrowsExceptionWhenIdNotFound() {
        when(categoryServiceImpl.updatedCategory(anyLong(), any(CategoryRequest.class)))
                .thenThrow(NotFoundException.class);

        assertThrows(
                NotFoundException.class,
                () -> categoryController.updatedCategoryById(1L, new CategoryRequest()));
    }

    @Test
    @DisplayName("should update the category by id and return the updated category")
    void updatedCategoryByIdReturnsUpdatedCategory() {
        CategoryRequest categoryRequest = new CategoryRequest();
        categoryRequest.setQualification("Updated qualification");
        categoryRequest.setDescriptions("Updated descriptions");
        categoryRequest.setUrlImage("Updated urlImage");

        CategoryEntity categoryEntity = new CategoryEntity();
        categoryEntity.setId(1L);
        categoryEntity.setQualification("qualification");
        categoryEntity.setDescriptions("descriptions");
        categoryEntity.setUrlImage("urlImage");

        CategoryResponse categoryResponse = new CategoryResponse();
        categoryResponse.setId(1L);
        categoryResponse.setQualification("qualification");
        categoryResponse.setDescriptions("descriptions");
        categoryResponse.setUrlImage("urlImage");

        when(categoryServiceImpl.updatedCategory(anyLong(), any(CategoryRequest.class)))
                .thenReturn(categoryEntity);
        when(categoryMapper.toCategoryResponse(any(CategoryEntity.class)))
                .thenReturn(categoryResponse);

        CategoryResponse result = categoryController.updatedCategoryById(1L, categoryRequest).getBody();

        assertEquals(categoryResponse, result);
    }

    @Test
    @DisplayName("should throw an exception when the category id is not found")
    void deleteCategoryByIdWhenIdNotFoundThenThrowException() {
        when(categoryServiceImpl.findCategoryById(anyLong())).thenThrow(NotFoundException.class);
        assertThrows(NotFoundException.class, () -> categoryController.getCategoryById(anyLong()));
    }

    @Test
    @DisplayName("should delete the category by id successfully")
    void deleteCategoryByIdSuccessfully() {
        CategoryEntity categoryEntity = new CategoryEntity();
        categoryEntity.setId(1L);
        categoryEntity.setQualification("qualification");
        categoryEntity.setDescriptions("descriptions");
        categoryEntity.setUrlImage("urlImage");

        CategoryResponse categoryResponse;
        categoryResponse = new CategoryResponse();
        categoryResponse.setId(1L);
        categoryResponse.setQualification("qualification");
        categoryResponse.setDescriptions("descriptions");
        categoryResponse.setUrlImage("urlImage");

        categoryController.deleteCategoryById(1L);

        verify(categoryServiceImpl, times(1)).deleteCategoryById(anyLong());
    }

    @Test
    @DisplayName("should create a new category and return the created category response")
    void createCategoryReturnsCreatedCategoryResponse() {
        CategoryEntity categoryEntity = new CategoryEntity();
        CategoryResponse categoryResponse = new CategoryResponse();
        when(categoryServiceImpl.createCategory(any())).thenReturn(categoryEntity);
        when(categoryMapper.toCategoryResponse(any())).thenReturn(categoryResponse);

        CategoryRequest categoryRequest = new CategoryRequest();
        categoryRequest.setQualification("test qualification");
        categoryRequest.setDescriptions("test description");
        categoryRequest.setUrlImage("https://urltest.com");

        CategoryResponse createdCategoryResponse =
                categoryController.createCategory(categoryRequest).getBody();
        assertEquals(categoryResponse, createdCategoryResponse);
    }

    @Test
    @DisplayName("should return all categories")
    void getAllCategories() {
        CategoryEntity categoryEntity = new CategoryEntity();
        CategoryResponse categoryResponse = new CategoryResponse();
        when(categoryServiceImpl.findAllCategory()).thenReturn(List.of(categoryEntity));
        when(categoryMapper.toCategoryResponse(categoryEntity)).thenReturn(categoryResponse);

        List<CategoryResponse> categoryResponseList =
                categoryController.getAllCategories().getBody();

        assertEquals(1, Objects.requireNonNull(categoryResponseList).size());
        assertEquals(categoryResponse, categoryResponseList.get(0));
    }

    @Test
    @DisplayName("should return not found when the id is not found")
    void getCategoryByIdWhenIdNotFound() {
        when(categoryServiceImpl.findCategoryById(anyLong())).thenThrow(NotFoundException.class);
        assertThrows(NotFoundException.class, () -> categoryController.getCategoryById(1L));
    }

    @Test
    @DisplayName("should return the category when the id is valid")
    void getCategoryByIdWhenIdIsValid() {
        CategoryEntity categoryEntity = new CategoryEntity();
        categoryEntity.setId(1L);
        categoryEntity.setQualification("qualification");
        categoryEntity.setDescriptions("descriptions");
        categoryEntity.setUrlImage("urlImage");

        CategoryResponse categoryResponse = new CategoryResponse();
        categoryResponse.setId(1L);
        categoryResponse.setQualification("qualification");
        categoryResponse.setDescriptions("descriptions");
        categoryResponse.setUrlImage("urlImage");

        when(categoryServiceImpl.findCategoryById(anyLong())).thenReturn(categoryEntity);
        when(categoryMapper.toCategoryResponse(categoryEntity)).thenReturn(categoryResponse);

        CategoryResponse categoryResponseResult = categoryController.getCategoryById(1L).getBody();

        assertEquals(categoryResponse, categoryResponseResult);
    }
}