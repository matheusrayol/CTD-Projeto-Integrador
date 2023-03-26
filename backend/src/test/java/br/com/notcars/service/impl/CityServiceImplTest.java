package br.com.notcars.service.impl;

import br.com.notcars.dto.city.CityRequest;
import br.com.notcars.exceptions.NotFoundException;
import br.com.notcars.mapper.CityMapper;
import br.com.notcars.model.CityEntity;
import br.com.notcars.repository.CityRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class CityServiceImplTest {

    @Mock
    private CityRepository cityRepository;

    @Mock
    private CityMapper cityMapper;

    @InjectMocks
    private CityServiceImpl cityService;

    @Test
    @DisplayName("should return all cities when findAllCities is called")
    void findAllCitiesReturnsAllCities() {
        when(cityRepository.findAll()).thenReturn(List.of(mock(CityEntity.class)));
        List<CityEntity> result;
        result = cityService.findAllCities();
        assertEquals(1, result.size());
        verify(cityRepository, timeout(1)).findAll();
    }

    @Nested
    class CreateCity {
        @Test
        void shouldCreateCitySuccessfully() {
            // Arrange
            when(cityMapper.toEntity(any())).thenReturn(mock(CityEntity.class));
            when(cityRepository.save(any())).thenReturn(mock(CityEntity.class));

            // Act
            CityEntity result;
            result = cityService.createCity(mock(CityRequest.class));

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
            List<CityEntity> result;
            result = cityService.findAllCities();

            // Assert
            assertEquals(1, result.size());
            verify(cityRepository, timeout(1)).findAll();
        }

        @Test
        void shouldReturnListEmpty_whenListOfCityIsEmpty() {
            // Arrange
            when(cityRepository.findAll()).thenReturn(List.of());

            // Act
            List<CityEntity> result;
            result = cityService.findAllCities();

            // Assert
            assertEquals(0, result.size());
            verify(cityRepository, timeout(1)).findAll();
        }
    }

    @Test
    @DisplayName("should throw NotFoundException when the id is not found")
    void findCityByIdWhenIdNotFoundThenThrowNotFoundException() {
        when(cityRepository.findById(any())).thenReturn(java.util.Optional.empty());
        assertThrows(NotFoundException.class, () -> cityService.findCityById(1L));
        verify(cityRepository, times(1)).findById(any());
    }

    @Test
    @DisplayName("should return the city when the id is valid")
    void findCityByIdWhenIdIsValid() {
        when(cityRepository.findById(any()))
                .thenReturn(java.util.Optional.of(mock(CityEntity.class)));
        CityEntity result;
        result = cityService.findCityById(1L);
        assertNotNull(result);
        verify(cityRepository, times(1)).findById(any());
    }
}