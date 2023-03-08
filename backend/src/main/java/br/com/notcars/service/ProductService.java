package br.com.notcars.service;

import br.com.notcars.dto.product.ProductRequest;
import br.com.notcars.model.CategoryEntity;
import br.com.notcars.model.CityEntity;
import br.com.notcars.model.ProductEntity;
import java.util.List;

public interface ProductService {
  List<ProductEntity> findAll();

  ProductEntity createProduct(ProductRequest productRequest, CategoryEntity category, CityEntity city);

  ProductEntity findProductById(Long id);

  List<ProductEntity> findProductByCategoryOrCity(String category, String city);
}
