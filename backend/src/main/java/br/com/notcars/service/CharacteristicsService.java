package br.com.notcars.service;

import br.com.notcars.model.CharacteristicsEntity;
import java.util.List;

public interface CharacteristicsService {
  List<CharacteristicsEntity> findAllById(List<Long> characteristicsIdList);
}
