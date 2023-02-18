package br.com.dh.potatocars.controller;

import br.com.dh.potatocars.dto.category.CategoryRequest;
import br.com.dh.potatocars.dto.category.CategoryResponse;
import br.com.dh.potatocars.mapper.CategoryMapper;
import br.com.dh.potatocars.repository.category.CategoryEntity;
import br.com.dh.potatocars.service.CategoryService;
import java.util.List;
import java.util.stream.Collectors;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/category")
@RequiredArgsConstructor
@Log4j2
public class CategoryController {
  private final CategoryService categoryServiceImpl;

  private final CategoryMapper categoryMapper;


  @GetMapping("/{id}")
  public ResponseEntity<CategoryResponse> getCategoryById(@PathVariable Long id) {
    final CategoryEntity categoryEntity = categoryServiceImpl.findCategoryById(id);
    return ResponseEntity.ok(categoryMapper.toCategoryResponse(categoryEntity));
  }

  @GetMapping("/all")
  public ResponseEntity<Page<CategoryResponse>> getAllCategories(@PageableDefault(size = 10, direction = Sort.Direction.ASC) Pageable pageable) {

    Page<CategoryEntity> categoryEntityPage = categoryServiceImpl.findAllCategory(pageable);

    List<CategoryResponse> categoryResponseList = categoryEntityPage.getContent().stream()
      .map(categoryMapper::toCategoryResponse).collect(Collectors.toList());

    return ResponseEntity.ok(new PageImpl<>(categoryResponseList, categoryEntityPage.getPageable(), categoryEntityPage.getTotalPages()));
  }

  @PostMapping("/create")
  public ResponseEntity<CategoryResponse> createCategory(@Valid @RequestBody CategoryRequest categoryRequest) {
    final CategoryEntity categoryEntity = categoryServiceImpl.createCategory(categoryRequest);
    return ResponseEntity.status(HttpStatus.CREATED).body(categoryMapper.toCategoryResponse(categoryEntity));
  }

  @DeleteMapping("/delete/{id}")
  public ResponseEntity<Void> deleteCategoryById(@PathVariable Long id) {
    categoryServiceImpl.deleteCategoryById(id);
    return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
  }

  @PutMapping("/update/{id}")
  public ResponseEntity<CategoryResponse> updatedCategoryById(@PathVariable Long id,
                                                              @RequestBody CategoryRequest categoryRequest) {

    CategoryEntity categoryEntity = categoryServiceImpl.updatedCategory(id, categoryRequest);
    return ResponseEntity.ok(categoryMapper.toCategoryResponse(categoryEntity));
  }
}
