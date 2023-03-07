package br.com.notcars.mapper;

import br.com.notcars.dto.city.CityRequest;
import br.com.notcars.dto.city.CityResponse;
import br.com.notcars.model.CityEntity;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface CityMapper {

  CityEntity toEntity(CityRequest cityRequest);

  CityResponse toResponse(CityEntity cityEntity);
}
