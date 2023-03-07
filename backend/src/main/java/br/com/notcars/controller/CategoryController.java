package br.com.notcars.controller;

import br.com.notcars.dto.category.CategoryRequest;
import br.com.notcars.dto.category.CategoryResponse;
import br.com.notcars.mapper.CategoryMapper;
import br.com.notcars.model.CategoryEntity;
import br.com.notcars.service.CategoryService;
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
  private static final String START_REQUEST = "[START REQUEST]";

  private static final String BASE_URL = "/category";

  private final CategoryService categoryServiceImpl;

  private final CategoryMapper categoryMapper;


  @GetMapping("/{id}")
  public ResponseEntity<CategoryResponse> getCategoryById(@PathVariable Long id) {
    log.info(START_REQUEST + "[GET] " + BASE_URL + "/" + id);
    final CategoryEntity categoryEntity = categoryServiceImpl.findCategoryById(id);
    return ResponseEntity.ok(categoryMapper.toCategoryResponse(categoryEntity));
  }

  @GetMapping("/all")
  public ResponseEntity<List<CategoryResponse>> getAllCategories() {
    log.info(START_REQUEST + "[GET] " + BASE_URL + "/all");
    List<CategoryEntity> categoryEntityList = categoryServiceImpl.findAllCategory();

    List<CategoryResponse> categoryResponseList = categoryEntityList.stream()
      .map(categoryMapper::toCategoryResponse).collect(Collectors.toList());

    return ResponseEntity.ok(categoryResponseList);
  }

  @PostMapping("/create")
  public ResponseEntity<CategoryResponse> createCategory(@Valid @RequestBody CategoryRequest categoryRequest) {
    log.info(START_REQUEST + "[POST] " + BASE_URL + "/create" +  " [BODY]" +  categoryRequest.toString());
    final CategoryEntity categoryEntity = categoryServiceImpl.createCategory(categoryRequest);
    return ResponseEntity.status(HttpStatus.CREATED).body(categoryMapper.toCategoryResponse(categoryEntity));
  }

  @DeleteMapping("/delete/{id}")
  public ResponseEntity<Void> deleteCategoryById(@PathVariable Long id) {
    log.info(START_REQUEST + "[DELETE] " + BASE_URL + "/delete/" + id);
    categoryServiceImpl.deleteCategoryById(id);
    return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
  }

  @PutMapping("/update/{id}")
  public ResponseEntity<CategoryResponse> updatedCategoryById(@PathVariable Long id,
                                                              @RequestBody CategoryRequest categoryRequest) {
    log.info(START_REQUEST + "[PUT] " + BASE_URL + "/update/" + id + " [BODY]" +  categoryRequest.toString());
    CategoryEntity categoryEntity = categoryServiceImpl.updatedCategory(id, categoryRequest);
    return ResponseEntity.ok(categoryMapper.toCategoryResponse(categoryEntity));
  }
}
