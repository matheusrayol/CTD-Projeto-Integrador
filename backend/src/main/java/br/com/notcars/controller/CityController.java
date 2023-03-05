package br.com.notcars.controller;

import br.com.notcars.dto.city.CityRequest;
import br.com.notcars.dto.city.CityResponse;
import br.com.notcars.service.CityService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/city")
@RequiredArgsConstructor
@Log4j2
public class CityController {
  private final CityService cityServiceImpl;

  @GetMapping("/all")
  private ResponseEntity<List<CityResponse>> findAll(){

    return null;
  }

  @PostMapping("/create")
  private ResponseEntity<List<CityResponse>> createCity(@RequestBody CityRequest cityRequest){
    return null;
  }
}
