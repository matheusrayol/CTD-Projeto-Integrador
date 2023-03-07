package br.com.notcars.mapper;

import br.com.notcars.dto.characteristics.CharacteristicsRequest;
import br.com.notcars.dto.characteristics.CharacteristicsResponse;
import br.com.notcars.model.CharacteristicsEntity;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface CharacteristicsMapper {

  CharacteristicsEntity toEntity (CharacteristicsRequest characteristicsRequest);

   CharacteristicsResponse toResponse (CharacteristicsEntity characteristics);
}
