package br.com.notcars.controller;

import br.com.notcars.dto.product.ProductRequest;
import br.com.notcars.dto.product.ProductResponse;
import br.com.notcars.exceptions.NotFoundException;
import br.com.notcars.mapper.ProductMapper;
import br.com.notcars.model.ProductEntity;
import br.com.notcars.service.ProductService;
import lombok.var;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
@DisplayName("ProductController test")
class ProductControllerTest {
    @Mock
    private ProductService productServiceImpl;

    @Mock
    private ProductRequest productRequest;

    @Mock
    private ProductMapper productMapper;

    @InjectMocks
    private ProductController productController;

    @Test
    @DisplayName("should return a bad request when the request data is invalid")
    void createProductWithInvalidRequestDataReturnsBadRequest() {
        when(productRequest.getName()).thenReturn("");
        when(productRequest.getDescription()).thenReturn("");
        when(productRequest.getCategoryId()).thenReturn(null);
        when(productRequest.getCityId()).thenReturn(null);
        when(productRequest.getCharacteristics()).thenReturn(new ArrayList<>());
        when(productRequest.getImages()).thenReturn(new ArrayList<>());

        ResponseEntity<ProductResponse> response = productController.createProduct(productRequest);

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
    }

    @Test
    @DisplayName("should create a product with valid request data")
    void createProductWithValidRequestData() {
        ProductEntity productEntity = new ProductEntity();
        ProductResponse productResponse = new ProductResponse();
        when(productServiceImpl.createProduct(any(ProductRequest.class))).thenReturn(productEntity);
        when(productMapper.toResponse(any(ProductEntity.class))).thenReturn(productResponse);
        ResponseEntity<ProductResponse> response = productController.createProduct(productRequest);
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(productResponse, response.getBody());
    }

    @Test
    @DisplayName("should create a new product and return the created product response")
    void createProductSuccessfully() {
        var productEntity = mock(ProductEntity.class);
        var productResponse = mock(ProductResponse.class);
        when(productServiceImpl.createProduct(any(ProductRequest.class))).thenReturn(productEntity);
        when(productMapper.toResponse(any(ProductEntity.class))).thenReturn(productResponse);

        ResponseEntity<ProductResponse> response = productController.createProduct(productRequest);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(productResponse, response.getBody());
    }

    @Test
    @DisplayName(
            "should return an empty list when no products are available for the given city and date range")
    void findAvailabilityByCityAndDateReturnsEmptyListWhenNoProductsAvailable() {
        when(productServiceImpl.findAvailabilityByCityAndDate(anyLong(), any(), any()))
                .thenReturn(List.of());

        var response =
                productController.findAvailabilityByCityAndDate(
                        1L, LocalDate.now(), LocalDate.now());

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertTrue(response.getBody().isEmpty());
    }

    @Test
    @DisplayName("should return a list of available products for the given city and date range")
    void findAvailabilityByCityAndDateReturnsAvailableProducts() {
        List<ProductEntity> productList = List.of(new ProductEntity());
        List<ProductResponse> productResponses = List.of(new ProductResponse());
        when(productServiceImpl.findAvailabilityByCityAndDate(anyLong(), any(), any()))
                .thenReturn(productList);
        when(productMapper.toResponse(any(ProductEntity.class))).thenReturn(productResponses.get(0));

        var response = productController.findAvailabilityByCityAndDate(1L, null, null);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(productResponses, response.getBody());
    }

    @Test
    @DisplayName(
            "should return products filtered by both category and city when both categoryId and cityId are provided")
    void findAllWhenCategoryIdAndCityIdAreProvided() {
        ProductEntity productEntity = new ProductEntity();
        ProductResponse productResponse = new ProductResponse();
        when(productServiceImpl.findProductByCategoryOrCity(anyLong(), anyLong()))
                .thenReturn(List.of(productEntity));
        when(productMapper.toResponse(productEntity)).thenReturn(productResponse);

        var result = productController.findAll(1L, 1L);

        assertEquals(HttpStatus.OK, result.getStatusCode());
        assertEquals(List.of(productResponse), result.getBody());
    }

    @Test
    @DisplayName("should return all products when no filters are provided")
    void findAllWhenNoFiltersAreProvided() {
        ProductEntity productEntity = new ProductEntity();
        ProductResponse productResponse = new ProductResponse();
        when(productServiceImpl.findProductByCategoryOrCity(anyLong(), anyLong()))
                .thenReturn(List.of(productEntity));
        when(productMapper.toResponse(productEntity)).thenReturn(productResponse);

        var result = productController.findAll(1L, 1L);

        assertEquals(HttpStatus.OK, result.getStatusCode());
        assertEquals(1, result.getBody().size());
        assertEquals(productResponse, result.getBody().get(0));
    }

    @Test
    @DisplayName("should return products filtered by category when categoryId is provided")
    void findAllWhenCategoryIdIsProvided() {
        ProductEntity productEntity = new ProductEntity();
        ProductResponse productResponse = new ProductResponse();
        when(productServiceImpl.findProductByCategoryOrCity(anyLong(), anyLong()))
                .thenReturn(List.of(productEntity));
        when(productMapper.toResponse(productEntity)).thenReturn(productResponse);

        ResponseEntity<List<ProductResponse>> result;
        result = productController.findAll(1L, 1L);

        assertEquals(HttpStatus.OK, result.getStatusCode());
        assertEquals(1, result.getBody().size());
        assertEquals(productResponse, result.getBody().get(0));
    }

    @Test
    @DisplayName("should return products filtered by city when cityId is provided")
    void findAllWhenCityIdIsProvided() {
        ProductEntity productEntity = new ProductEntity();
        ProductResponse productResponse = new ProductResponse();
        when(productServiceImpl.findProductByCategoryOrCity(anyLong(), anyLong()))
                .thenReturn(List.of(productEntity));
        when(productMapper.toResponse(productEntity)).thenReturn(productResponse);

        var result = productController.findAll(1L, 1L);

        assertEquals(HttpStatus.OK, result.getStatusCode());
        assertEquals(1, result.getBody().size());
        assertEquals(productResponse, result.getBody().get(0));
    }

    @Test
    @DisplayName("should return not found when the id is invalid")
    void findProductByIdWhenIdIsInvalidThenReturnNotFound() {
        when(productServiceImpl.findProductById(anyLong())).thenThrow(NotFoundException.class);
        assertThrows(NotFoundException.class, () -> productController.findProductById(1L));
    }

    @Test
    @DisplayName("should return the product when the id is valid")
    void findProductByIdWhenIdIsValid() {
        ProductEntity product = new ProductEntity();
        product.setId(1L);
        product.setName("Product 1");
        product.setDescription("Description 1");

        ProductResponse productResponse = new ProductResponse();
        productResponse.setId(1L);
        productResponse.setName("Product 1");
        productResponse.setDescription("Description 1");

        when(productServiceImpl.findProductById(anyLong())).thenReturn(product);
        when(productMapper.toResponse(any(ProductEntity.class))).thenReturn(productResponse);

        ProductResponse response = productController.findProductById(1L).getBody();

        assertEquals(productResponse, response);
    }
}