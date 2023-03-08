package br.com.notcars.service.impl;

import br.com.notcars.dto.product.ProductRequest;
import br.com.notcars.model.ProductEntity;
import br.com.notcars.repository.ProductRepository;
import br.com.notcars.service.ProductService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {
  private final ProductRepository productRepository;

  @Override
  public List<ProductEntity> findAll() {
    return null;
  }

  @Override
  public ProductEntity createProduct(ProductRequest productRequest) {
    return null;
  }

  @Override
  public ProductEntity findProductById(Long id) {
    return null;
  }

  @Override
  public List<ProductEntity> findProductByCategoryOrCity(String category, String city) {
    return null;
  }
}
