package br.com.notcars.service.impl;

import br.com.notcars.model.CharacteristicsEntity;
import br.com.notcars.repository.CharacteristicsRepository;
import br.com.notcars.service.CharacteristicsService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CharacteristicsServiceImpl implements CharacteristicsService {
  private final CharacteristicsRepository characteristicsRepository;


  @Override
  public List<CharacteristicsEntity> findAllById(List<Long> characteristicsIdList) {
    return characteristicsRepository.findAllById(characteristicsIdList);
  }
}
