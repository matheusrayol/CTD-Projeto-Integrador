package br.com.notcars.controller;

import br.com.notcars.dto.category.CategoryResponse;
import br.com.notcars.dto.characteristics.CharacteristicsResponse;
import br.com.notcars.dto.city.CityResponse;
import br.com.notcars.dto.image.ImageResponse;
import br.com.notcars.dto.product.ProductRequest;
import br.com.notcars.dto.product.ProductResponse;
import br.com.notcars.mapper.*;
import br.com.notcars.model.CategoryEntity;
import br.com.notcars.model.CityEntity;
import br.com.notcars.model.ProductEntity;
import br.com.notcars.service.CategoryService;
import br.com.notcars.service.CityService;
import br.com.notcars.service.ProductService;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/product")
@RequiredArgsConstructor
@Log4j2
public class ProductController {
  private static final String START_REQUEST = "[START REQUEST]";

  private static final String BASE_URL = "/product";
  private final ProductService productServiceImpl;

  private final CategoryService categoryServiceImpl;

  private final CityService cityServiceImpl;

  private final ProductMapper productMapper;

  private final ImageMapper imageMapper;

  private final CharacteristicsMapper characteristicsMapper;

  private final CityMapper cityMapper;

  private final CategoryMapper categoryMapper;

  @GetMapping("/{id}")
  private ResponseEntity<ProductResponse> findProductById(@PathVariable Long id){
    log.info(START_REQUEST + "[GET] " + BASE_URL + "/" + id);
    ProductEntity product = productServiceImpl.findProductById(id);
    return ResponseEntity.ok(productMapper.toResponse(product));
  }

  @GetMapping("/all")
  private ResponseEntity<List<ProductResponse>> findAll(){
    log.info(START_REQUEST + "[GET] " + BASE_URL + "/all");
    List<ProductEntity> productList = productServiceImpl.findAll();
    List<ProductResponse> productResponses = productList.stream()
      .map(productMapper::toResponse)
      .collect(Collectors.toList());
    return ResponseEntity.ok(productResponses);
  }

  @GetMapping()
  private ResponseEntity<List<ProductResponse>> findProductByCategoryOrCity(@RequestParam String category,
                                                                            @RequestParam String city){
    return null;
  }

  @PostMapping("/create")
  private ResponseEntity<ProductResponse> createProduct(@RequestBody ProductRequest productRequest){
    CategoryEntity category = categoryServiceImpl.findCategoryById(productRequest.getCategoryId());
    CityEntity city = cityServiceImpl.findCityById(productRequest.getCityId());
    ProductEntity product = productServiceImpl.createProduct(productRequest, category, city);

    List<ImageResponse> imageListResponse = imageMapper.map(product.getImageList());
    List<CharacteristicsResponse> characteristicsResponse = characteristicsMapper.map(product.getCharacteristicsList());
    CityResponse cityResponse = cityMapper.toResponse(product.getCity());
    CategoryResponse categoryResponse = categoryMapper.toCategoryResponse(product.getCategory());

    return ResponseEntity.status(HttpStatus.CREATED).body(productMapper.toResponse(product, categoryResponse, cityResponse, characteristicsResponse, imageListResponse));
  }

}
