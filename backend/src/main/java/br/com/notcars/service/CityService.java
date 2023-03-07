package br.com.notcars.service;

import br.com.notcars.dto.city.CityRequest;
import br.com.notcars.model.CityEntity;
import java.util.List;

public interface CityService {
  List<CityEntity> findAllCities();

  CityEntity createCity(CityRequest cityRequest);
}
