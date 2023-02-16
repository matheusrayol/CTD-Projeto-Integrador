package br.com.dh.potatocars.controller;

import br.com.dh.potatocars.dto.category.CategoryRequest;
import br.com.dh.potatocars.dto.category.CategoryResponse;
import br.com.dh.potatocars.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/category")
@RequiredArgsConstructor
public class CategoryController {
  private final CategoryService categoryServiceImpl;

  @GetMapping("/{id}")
  public ResponseEntity<CategoryResponse> getCategoryById(@PathVariable Integer id) {
    return null;
  }

  @GetMapping("/all")
  public ResponseEntity<CategoryResponse> getAllCategories() {
    return null;
  }

  @PostMapping("/{id}")
  public ResponseEntity<Void> createCategory(@RequestBody CategoryRequest categoryRequest) {
    return null;
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
