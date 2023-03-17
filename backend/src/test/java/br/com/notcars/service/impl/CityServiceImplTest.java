package br.com.notcars.service.impl;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.mockito.Mockito.times;

import br.com.notcars.dto.city.CityRequest;
import br.com.notcars.mapper.CityMapper;
import br.com.notcars.model.CityEntity;
import br.com.notcars.repository.CityRepository;
import java.util.List;
import lombok.var;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class CityServiceImplTest {

  @Mock
  private CityRepository cityRepository;

  @Mock
  private CityMapper cityMapper;

  @InjectMocks
  private CityServiceImpl cityService;

  @Nested
  class CreateCity {
    @Test
    void shouldCreateCitySuccessfully() {
      // Arrange
      when(cityMapper.toEntity(any())).thenReturn(mock(CityEntity.class));
      when(cityRepository.save(any())).thenReturn(mock(CityEntity.class));

      // Act
      var result = cityService.createCity(mock(CityRequest.class));

      // Assert
      assertNotNull(result);
      verify(cityMapper, times(1)).toEntity(any());
      verify(cityRepository, times(1)).save(any());
    }
  }

  @Nested
  public class FindAllCities {
    @Test
    void shouldReturnList_whenListOfCityNotEmpty() {
      // Arrange
      when(cityRepository.findAll()).thenReturn(List.of(mock(CityEntity.class)));

      // Act
      var result = cityService.findAllCities();

      // Assert
      assertEquals(1, result.size());
      verify(cityRepository, timeout(1)).findAll();
    }

    @Test
    void shouldReturnListEmpty_whenListOfCityIsEmpty() {
      // Arrange
      when(cityRepository.findAll()).thenReturn(List.of());

      // Act
      var result = cityService.findAllCities();

      // Assert
      assertEquals(0, result.size());
      verify(cityRepository, timeout(1)).findAll();
    }
  }
}