package br.com.notcars.service.impl;

import br.com.notcars.config.aspect.LogInfo;
import br.com.notcars.dto.city.CityRequest;
import br.com.notcars.exceptions.NotFoundException;
import br.com.notcars.mapper.CityMapper;
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

  private final CityMapper cityMapper;

  @LogInfo
  @Override
  public List<CityEntity> findAllCities() {
    return cityRepository.findAll();
  }

  @LogInfo
  @Override
  public CityEntity createCity(CityRequest cityRequest) {
    CityEntity city = cityMapper.toEntity(cityRequest);
    return cityRepository.save(city);
  }

  @LogInfo
  @Override
  public CityEntity findCityById(Long id) {
    return cityRepository.findById(id)
      .orElseThrow(() -> new NotFoundException("city_not_found", String.format("city %s not found", id)));
  }
}
