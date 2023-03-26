package br.com.notcars.controller;

import br.com.notcars.dto.city.CityRequest;
import br.com.notcars.dto.city.CityResponse;
import br.com.notcars.mapper.CityMapper;
import br.com.notcars.model.CityEntity;
import br.com.notcars.service.CityService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
@DisplayName("CityController")
class CityControllerTest {
    @Mock
    private CityService cityServiceImpl;

    @InjectMocks
    private CityController cityController;

    @Mock
    private CityMapper cityMapper;

    @Test
    @DisplayName("should return a bad request status when the city request is invalid")
    void createCityWhenCityRequestIsInvalidThenReturnBadRequest() {
        CityRequest cityRequest = new CityRequest();
        cityRequest.setName(null);
        cityRequest.setCountry(null);

        ResponseEntity<CityResponse> response = cityController.createCity(cityRequest);

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
    }

    @Test
    @DisplayName("should create a city and return the created city response")
    void createCityAndReturnCreatedCityResponse() {
        CityRequest cityRequest = new CityRequest();
        cityRequest.setName("São Paulo");
        cityRequest.setCountry("Brasil");

        CityEntity cityEntity = new CityEntity();
        cityEntity.setId(1L);
        cityEntity.setName("São Paulo");
        cityEntity.setCountry("Brasil");

        CityResponse cityResponse = new CityResponse();
        cityResponse.setId(1L);
        cityResponse.setName("São Paulo");
        cityResponse.setCountry("Brasil");


        when(cityServiceImpl.createCity(any())).thenReturn(cityEntity);
        when(cityMapper.toResponse(any())).thenReturn(cityResponse);

        ResponseEntity<CityResponse> response = cityController.createCity(cityRequest);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(cityResponse, response.getBody());
    }

    @Test
    @DisplayName("should return all cities when findAll is called")
    void findAllReturnsAllCities() {
        List<CityEntity> cityList = new ArrayList<>();
        CityEntity city = new CityEntity();
        city.setId(1L);
        city.setName("São Paulo");
        city.setCountry("Brasil");
        cityList.add(city);
        when(cityServiceImpl.findAllCities()).thenReturn(cityList);
        when(cityMapper.toResponse(city)).thenReturn(new CityResponse());
        ResponseEntity<List<CityResponse>> response = cityController.findAll();
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(1, Objects.requireNonNull(response.getBody()).size());
    }
}