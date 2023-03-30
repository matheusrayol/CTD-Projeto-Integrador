package br.com.notcars.service;

import br.com.notcars.dto.product.ProductRequest;
import br.com.notcars.model.ProductEntity;
import java.time.LocalDate;
import java.util.List;

public interface ProductService {
  List<ProductEntity> findAll();

  ProductEntity createProduct(ProductRequest productRequest);

  ProductEntity findProductById(Long id);

  List<ProductEntity> findProductByCategoryOrCity(Long category, Long city);

  List<ProductEntity> findAvailabilityByCityAndDate(Long cityId, LocalDate startDate, LocalDate endDate);
}
