package br.com.notcars.service.impl;

import br.com.notcars.dto.image.ImageRequest;
import br.com.notcars.dto.product.ProductRequest;
import br.com.notcars.exceptions.NotFoundException;
import br.com.notcars.mapper.ImageMapper;
import br.com.notcars.mapper.ProductMapper;
import br.com.notcars.model.*;
import br.com.notcars.repository.ProductRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
@DisplayName("ProductServiceImpl")
class ProductServiceImplTest {
    @Mock
    private ProductRepository productRepository;

    @Mock
    private CategoryServiceImpl categoryServiceImpl;

    @Mock
    private CharacteristicsServiceImpl characteristicsServiceImpl;

    @Mock
    private CityServiceImpl cityServiceImpl;

    @Mock
    private ProductMapper productMapper;

    @Mock
    private ImageMapper imageMapper;

    @InjectMocks
    private ProductServiceImpl productService;

    @Test
    @DisplayName("Deve retornar todos os produtos cadastrados")
    void findAllReturnsAllProducts() {
        ProductEntity productEntity = new ProductEntity();
        when(productRepository.findAll()).thenReturn(List.of(productEntity));

        List<ProductEntity> result = productService.findAll();

        assertEquals(1, result.size());
        verify(productRepository, times(1)).findAll();
    }

    @Test
    @DisplayName("Deve retornar os produtos por categoria e cidade quando os dois são fornecidos")
    void findProductByCategoryAndCityWhenBothAreProvided() {
        when(productRepository.findAllByCategoryAndCity(anyLong(), anyLong()))
                .thenReturn(List.of(mock(ProductEntity.class)));
        List<ProductEntity> result;
        result = productService.findProductByCategoryOrCity(1L, 1L);
        assertEquals(1, result.size());
        verify(productRepository, times(1)).findAllByCategoryAndCity(anyLong(), anyLong());
    }

    @Test
    @DisplayName("Deve retornar uma lista vazia quando nenhum produto corresponder a categoria e cidade")
    void findProductByCategoryOrCityWhenNoProductsMatch() {
        when(productRepository.findAllByCategoryAndCity(anyLong(), anyLong()))
                .thenReturn(List.of());
        List<ProductEntity> result;
        result = productService.findProductByCategoryOrCity(1L, 1L);
        assertEquals(0, result.size());
        verify(productRepository, times(1)).findAllByCategoryAndCity(anyLong(), anyLong());
    }

    @Nested
    class FindAll {
        @Test
        @DisplayName("Deve retornar uma lista vazia quando não houver produtos cadastrados")
        void shouldReturnList_whenListOfProductNotEmpty() {
            // Arrange
            when(productRepository.findAll()).thenReturn(List.of(mock(ProductEntity.class)));

            // Act
            List<ProductEntity> result;
            result = productService.findAll();

            // Assert
            assertEquals(1, result.size());
            verify(productRepository, timeout(1)).findAll();
        }

        @Test
        @DisplayName("Deve retornar uma lista vazia quando não houver produtos cadastrados")
        void shouldReturnListEmpty_whenListOfProductIsEmpty() {
            // Arrange
            when(productRepository.findAll()).thenReturn(List.of());

            // Act
            List<ProductEntity> result;
            result = productService.findAll();

            // Assert
            assertEquals(0, result.size());
            verify(productRepository, timeout(1)).findAll();
        }
    }

    @Nested
    class FindProductById {
        @Test
        @DisplayName("Deve retornar um produto quando o id for válido")
        void shouldReturnProduct_whenIdIsValid() {
            // Arrange
            when(productRepository.findById(anyLong()))
                    .thenReturn(Optional.of(mock(ProductEntity.class)));

            // Act
            ProductEntity result;
            result = productService.findProductById(1L);

            // Assert
            assertNotNull(result);
            verify(productRepository, times(1)).findById(anyLong());
        }

        @Test
        @DisplayName("Deve retornar um erro quando o id for inválido")
        void shouldReturnError_whenProductNotFound() {
            // Arrange
            when(productRepository.findById(anyLong())).thenReturn(Optional.empty());

            // Act
            NotFoundException result;
            result =
                    assertThrows(
                            NotFoundException.class,
                            () -> productService.findProductById(1L));

            // Assert
            assertThat(result.getTitle()).isEqualTo("product_not_found");
            verify(productRepository, times(1)).findById(anyLong());
        }
    }

    @Nested
    class CreateProduct {

        @Test
        @DisplayName("Deve retornar um produto quando os dados forem válidos")
        void shouldReturnError_whenCategoryNotFound() {
            // Arrange
            ProductRequest productRequest = new ProductRequest();
            productRequest.setCategoryId(1L);

            doThrow(NotFoundException.class).when(categoryServiceImpl).findCategoryById(any());

            // Act
            NotFoundException result;
            result =
                    assertThrows(
                            NotFoundException.class,
                            () -> productService.createProduct(productRequest));

            // Assert
            verify(imageMapper, never()).toEntity(any());
            verify(productMapper, never()).toEntity(any(), any(), any(), anyList(), anyList());
            verify(categoryServiceImpl, times(1)).findCategoryById(any());
            verify(cityServiceImpl, never()).findCityById(any());
            verify(productRepository, never()).save(any());

        }

        @Test
        @DisplayName("Deve retornar um erro quando a categoria não for encontrada")
        void shouldReturnError_whenCityNotFound() {
            // Arrange
            ProductRequest productRequest = new ProductRequest();
            productRequest.setCityId(1L);

            doThrow(NotFoundException.class).when(cityServiceImpl).findCityById(any());
            when(categoryServiceImpl.findCategoryById(any()))
                    .thenReturn(mock(CategoryEntity.class));

            // Act
            NotFoundException result;
            result =
                    assertThrows(
                            NotFoundException.class,
                            () -> productService.createProduct(productRequest));

            // Assert
            verify(imageMapper, never()).toEntity(any());
            verify(productMapper, never()).toEntity(any(), any(), any(), anyList(), anyList());
            verify(categoryServiceImpl, times(1)).findCategoryById(any());
            verify(cityServiceImpl, times(1)).findCityById(any());
            verify(productRepository, never()).save(any());
        }

        @Test
        @DisplayName("Deve retornar um erro quando as imagens não forem encontradas")
        void shouldCreateProductSuccessfully() {
            // Arrange
            ProductRequest productRequest = new ProductRequest();
            productRequest.setImages(List.of(mock(ImageRequest.class)));
            productRequest.setCharacteristics(List.of(1L));

            when(characteristicsServiceImpl.findAllById(any()))
                    .thenReturn(List.of(mock(CharacteristicsEntity.class)));
            when(cityServiceImpl.findCityById(any())).thenReturn(mock(CityEntity.class));
            when(categoryServiceImpl.findCategoryById(any()))
                    .thenReturn(mock(CategoryEntity.class));
            when(productRepository.save(any())).thenReturn(mock(ProductEntity.class));
            when(imageMapper.toEntity(any())).thenReturn(mock(ImageEntity.class));
            when(productMapper.toEntity(any(), any(), any(), anyList(), anyList()))
                    .thenReturn(mock(ProductEntity.class));

            // Act
            ProductEntity result;
            result = productService.createProduct(productRequest);

            // Assert
            assertNotNull(result);
            verify(imageMapper, times(1)).toEntity(any());
            verify(productMapper, times(1)).toEntity(any(), any(), any(), anyList(), anyList());
            verify(categoryServiceImpl, times(1)).findCategoryById(any());
            verify(cityServiceImpl, times(1)).findCityById(any());
            verify(productRepository, times(1)).save(any());
        }
    }

    @Test
    @DisplayName("Deve retornar uma lista vazia quando não houver produtos disponíveis para a cidade e data informada")
    void findAvailabilityByCityAndDateReturnsEmptyListWhenNoProductsAvailable() {
        when(productRepository.findAvailability(anyLong(), any(), any())).thenReturn(List.of());
        List<ProductEntity> result;
        result = productService.findAvailabilityByCityAndDate(1L, LocalDate.now(), LocalDate.now());
        assertEquals(0, result.size());
        verify(productRepository, times(1)).findAvailability(anyLong(), any(), any());
    }

    @Test
    @DisplayName("Deve retornar uma lista de produtos disponíveis para a cidade e data informada")
    void findAvailabilityByCityAndDateReturnsAvailableProducts() {
        Long cityId = 1L;
        LocalDate startDate = LocalDate.now();
        LocalDate endDate = LocalDate.now().plusDays(1);
        when(productRepository.findAvailability(cityId, startDate, endDate))
                .thenReturn(List.of(mock(ProductEntity.class)));
        List<ProductEntity> result =
                productService.findAvailabilityByCityAndDate(cityId, startDate, endDate);
        assertEquals(1, result.size());
        verify(productRepository, times(1)).findAvailability(cityId, startDate, endDate);
    }
}