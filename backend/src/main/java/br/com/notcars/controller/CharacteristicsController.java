package br.com.notcars.controller;

import br.com.notcars.dto.characteristics.CharacteristicsResponse;
import br.com.notcars.mapper.CharacteristicsMapper;
import br.com.notcars.model.CharacteristicsEntity;
import br.com.notcars.service.CharacteristicsService;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/characteristics")
@RequiredArgsConstructor
@Log4j2
public class CharacteristicsController {

  private static final String START_REQUEST = "[START REQUEST]";

  private static final String BASE_URL = "/characteristics";

  private final CharacteristicsService characteristicsServiceImpl;

  private final CharacteristicsMapper characteristicsMapper;


  @GetMapping("/all")
  public ResponseEntity<List<CharacteristicsResponse>> getAllCategories() {
    log.info(START_REQUEST + "[GET] " + BASE_URL + "/all");
    List<CharacteristicsEntity> characteristicsList = characteristicsServiceImpl.findAll();

    List<CharacteristicsResponse> characteristicsResponses = characteristicsList.stream()
        .map(characteristicsMapper::toResponse).collect(Collectors.toList());

    return ResponseEntity.ok(characteristicsResponses);
  }
}
