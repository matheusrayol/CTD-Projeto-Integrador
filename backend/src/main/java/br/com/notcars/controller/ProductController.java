package br.com.notcars.controller;

import br.com.notcars.dto.city.CityResponse;
import br.com.notcars.dto.product.ProductRequest;
import br.com.notcars.dto.product.ProductResponse;
import br.com.notcars.mapper.ProductMapper;
import br.com.notcars.service.ProductService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/product")
@RequiredArgsConstructor
@Log4j2
public class ProductController {

  private final ProductService productServiceImpl;

  private final ProductMapper productMapper;

  @GetMapping("/{id}")
  private ResponseEntity<ProductResponse> findProductById(@PathVariable Long id){

    return null;
  }

  @GetMapping("/all")
  private ResponseEntity<List<ProductResponse>> findAll(){

    return null;
  }

  @GetMapping()
  private ResponseEntity<List<ProductResponse>> findProductByCategoryOrCity(@RequestParam String category,
                                                                            @RequestParam String city){
    return null;
  }

  @PostMapping("/create")
  private ResponseEntity<List<CityResponse>> createProduct(@RequestBody ProductRequest productRequest){
    return null;
  }

}
