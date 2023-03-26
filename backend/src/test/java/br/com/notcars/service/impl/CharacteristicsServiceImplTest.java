package br.com.notcars.service.impl;

import br.com.notcars.model.CharacteristicsEntity;
import br.com.notcars.repository.CharacteristicsRepository;
import lombok.var;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.anyList;
import static org.mockito.Mockito.*;

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
            when(characteristicsRepository.findAllById(anyList()))
                    .thenReturn(List.of(mock(CharacteristicsEntity.class)));

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

    @Test
    @DisplayName("should return an empty list when given a list of invalid IDs")
    void findAllByIdWithInvalidIds() {
        when(characteristicsRepository.findAllById(anyList())).thenReturn(List.of());
        var result = characteristicsService.findAllById(List.of(1L));
        assertEquals(0, result.size());
        verify(characteristicsRepository, timeout(1)).findAllById(anyList());
    }

    @Test
    @DisplayName("should return an empty list when given an empty list of IDs")
    void findAllByIdWithEmptyIdList() {
        when(characteristicsRepository.findAllById(anyList())).thenReturn(List.of());
        var result = characteristicsService.findAllById(List.of());
        assertEquals(0, result.size());
        verify(characteristicsRepository, timeout(1)).findAllById(anyList());
    }

    @Test
    @DisplayName("should return a list of characteristics when given a list of valid IDs")
    void findAllByIdWithValidIds() {
        List<Long> characteristicsIdList = List.of(1L, 2L, 3L);
        when(characteristicsRepository.findAllById(characteristicsIdList))
                .thenReturn(List.of(mock(CharacteristicsEntity.class)));

        List<CharacteristicsEntity> result =
                characteristicsService.findAllById(characteristicsIdList);

        assertEquals(1, result.size());
        verify(characteristicsRepository, timeout(1)).findAllById(characteristicsIdList);
    }

    @Test
    @DisplayName(
            "should return a list of characteristics with only valid IDs when given a list of mixed valid and invalid IDs")
    void findAllByIdWithMixedValidAndInvalidIds() {
        var validId = 1L;
        var invalidId = 2L;
        var validCharacteristics = new CharacteristicsEntity();
        validCharacteristics.setId(validId);
        var characteristicsIdList = List.of(validId, invalidId);

        when(characteristicsRepository.findAllById(characteristicsIdList))
                .thenReturn(List.of(validCharacteristics));
        var result = characteristicsService.findAllById(characteristicsIdList);

        assertEquals(1, result.size());
        assertEquals(validId, result.get(0).getId());
    }
}