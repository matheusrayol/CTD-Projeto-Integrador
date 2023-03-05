package br.com.notcars.service.impl;

import br.com.notcars.dto.city.CityRequest;
import br.com.notcars.model.CityEntity;
import br.com.notcars.repository.CityRepository;
import br.com.notcars.service.CityService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CityServiceImpl implements CityService {
  private final CityRepository cityRepository;

  @Override
  public List<CityEntity> findAll() {
    return null;
  }

  @Override
  public CityEntity createCity(CityRequest cityRequest) {
    return null;
  }
}
