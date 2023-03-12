package br.com.notcars.service.impl;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

import br.com.notcars.model.CharacteristicsEntity;
import br.com.notcars.repository.CharacteristicsRepository;
import java.util.List;
import lombok.var;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class CharacteristicsServiceImplTest {

  @Mock
  private CharacteristicsRepository characteristicsRepository;

  @InjectMocks
  private CharacteristicsServiceImpl characteristicsService;

  @Nested
  public class FindAllCharacteristics {
    @Test
    void shouldReturnList_whenListOfCharacteristicsNotEmpty() {
      // Arrange
      when(characteristicsRepository.findAllById(anyList())).thenReturn(List.of(mock(CharacteristicsEntity.class)));

      // Act
      var result = characteristicsService.findAllById(List.of(1L));

      // Assert
      assertEquals(1, result.size());
      verify(characteristicsRepository, timeout(1)).findAllById(anyList());
    }

    @Test
    void shouldReturnListEmpty_whenListOfCityIsEmpty() {
      // Arrange
      when(characteristicsRepository.findAllById(anyList())).thenReturn(List.of());

      // Act
      var result = characteristicsService.findAllById(List.of(1L));

      // Assert
      assertEquals(0, result.size());
      verify(characteristicsRepository, timeout(1)).findAllById(anyList());
    }
  }
}