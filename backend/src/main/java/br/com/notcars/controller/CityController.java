package br.com.notcars.controller;

import br.com.notcars.dto.city.CityRequest;
import br.com.notcars.dto.city.CityResponse;
import br.com.notcars.mapper.CityMapper;
import br.com.notcars.model.CityEntity;
import br.com.notcars.service.CityService;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/city")
@RequiredArgsConstructor
@Log4j2
public class CityController {
  private final CityService cityServiceImpl;

  private final CityMapper cityMapper;

  @GetMapping("/all")
  private ResponseEntity<List<CityResponse>> findAll(){
    List<CityEntity> cityList = cityServiceImpl.findAllCities();
    List<CityResponse> cityResponseList = cityList.stream().map(cityMapper::toResponse).collect(Collectors.toList());
    return ResponseEntity.ok(cityResponseList);
  }

  @PostMapping("/create")
  private ResponseEntity<CityResponse> createCity(@RequestBody CityRequest cityRequest){
    CityEntity city = cityServiceImpl.createCity(cityRequest);
    return ResponseEntity.status(HttpStatus.CREATED).body(cityMapper.toResponse(city));
  }
}
