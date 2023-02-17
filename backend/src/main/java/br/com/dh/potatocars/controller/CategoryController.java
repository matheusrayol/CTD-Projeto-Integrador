package br.com.dh.potatocars.controller;

import br.com.dh.potatocars.dto.category.CategoryRequest;
import br.com.dh.potatocars.dto.category.CategoryResponse;
import br.com.dh.potatocars.mapper.CategoryMapper;
import br.com.dh.potatocars.repository.category.CategoryEntity;
import br.com.dh.potatocars.service.CategoryService;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/category")
@RequiredArgsConstructor
@Log4j2
public class CategoryController {
  private final CategoryService categoryServiceImpl;

  private final CategoryMapper categoryMapper;

  @GetMapping("/ping")
  public String ping() {
    return "pong";
  }

  @GetMapping("/{id}")
  public ResponseEntity<CategoryResponse> getCategoryById(@PathVariable Integer id) {
    return null;
  }

  @GetMapping("/all")
  public ResponseEntity<CategoryResponse> getAllCategories() {
    return null;
  }

  @PostMapping("/create")
  public ResponseEntity<CategoryResponse> createCategory(@Valid @RequestBody CategoryRequest categoryRequest) {
    log.info("inicializando");
    final CategoryEntity categoryEntity = categoryServiceImpl.createCategory(categoryRequest);
    return ResponseEntity.ok(categoryMapper.toCategoryResponse(categoryEntity));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteCategoryById(@PathVariable Integer id) {
    return null;
  }

  @PutMapping("/{id}")
  public ResponseEntity<CategoryResponse> updatedCategoryById(@RequestParam Integer id,
                                                              @RequestBody CategoryRequest categoryRequest) {
    return null;
  }
}
