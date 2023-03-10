package br.com.notcars.service.impl;

import br.com.notcars.dto.product.ProductRequest;
import br.com.notcars.exceptions.NotFoundException;
import br.com.notcars.mapper.CharacteristicsMapper;
import br.com.notcars.mapper.ImageMapper;
import br.com.notcars.mapper.ProductMapper;
import br.com.notcars.model.*;
import br.com.notcars.repository.ProductRepository;
import br.com.notcars.service.CategoryService;
import br.com.notcars.service.CharacteristicsService;
import br.com.notcars.service.CityService;
import br.com.notcars.service.ProductService;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {
  private final ProductRepository productRepository;

  private final CategoryService categoryServiceImpl;

  private final CharacteristicsService characteristicsServiceImpl;

  private final CityService cityServiceImpl;
  private final ProductMapper productMapper;

  private final ImageMapper imageMapper;

  private final CharacteristicsMapper characteristicsMapper;

  @Override
  public List<ProductEntity> findAll() {
    return productRepository.findAll();
  }

  @Override
  public ProductEntity createProduct(ProductRequest productRequest) {
    CategoryEntity category = categoryServiceImpl.findCategoryById(productRequest.getCategoryId());
    CityEntity city = cityServiceImpl.findCityById(productRequest.getCityId());
    List<ImageEntity> images = productRequest.getImages().stream().map(imageMapper::toEntity).collect(Collectors.toList());
    List<CharacteristicsEntity> characteristics = characteristicsServiceImpl.findAllById(productRequest.getCharacteristics());
    ProductEntity product = productMapper.toEntity(productRequest, category, city, characteristics, images);
    return productRepository.save(product);
  }

  @Override
  public ProductEntity findProductById(Long id) {
    return productRepository.findById(id)
      .orElseThrow(() -> new NotFoundException("product_not_found", String.format("product %s not found", id)));
  }

  @Override
  public List<ProductEntity> findProductByCategoryOrCity(String category, String city) {
    return null;
  }
}