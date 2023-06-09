package br.com.notcars.service.impl;

import br.com.notcars.model.CharacteristicsEntity;
import br.com.notcars.repository.CharacteristicsRepository;
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
@DisplayName("CharacteristicsServiceImpl")
class CharacteristicsServiceImplTest {

    @Mock
    private CharacteristicsRepository characteristicsRepository;

    @InjectMocks
    private CharacteristicsServiceImpl characteristicsService;

    @Test
    @DisplayName("Deve retornar uma lista vazia quando a lista de IDs for nula")
    void findAllByIdWithInvalidIds() {
        // Arrange
        when(characteristicsRepository.findAllById(anyList())).thenReturn(List.of());

        // Act
        List<CharacteristicsEntity> result;
        result = characteristicsService.findAllById(List.of(1L));

        // Assert
        assertEquals(0, result.size());
        verify(characteristicsRepository, timeout(1)).findAllById(anyList());
    }

    @Test
    @DisplayName("Deve retornar uma lista vazia quando a lista de IDs for nula")
    void findAllByIdWithEmptyIdList() {
        // Arrange
        when(characteristicsRepository.findAllById(anyList())).thenReturn(List.of());

        // Act
        List<CharacteristicsEntity> result;
        result = characteristicsService.findAllById(List.of());

        // Assert
        assertEquals(0, result.size());
        verify(characteristicsRepository, timeout(1)).findAllById(anyList());
    }

    @Test
    @DisplayName("Deve retornar uma lista de Características com IDs válidos quando for dada uma lista de IDs válidos")
    void findAllByIdWithValidIds() {
        // Arrange
        List<Long> characteristicsIdList = List.of(1L, 2L, 3L);
        when(characteristicsRepository.findAllById(characteristicsIdList))
                .thenReturn(List.of(mock(CharacteristicsEntity.class)));

        // Act
        List<CharacteristicsEntity> result =
                characteristicsService.findAllById(characteristicsIdList);

        // Assert
        assertEquals(1, result.size());
        verify(characteristicsRepository, timeout(1)).findAllById(characteristicsIdList);
    }

    @Test
    @DisplayName("Deve retornar uma lista de Características com IDs válidos quando for dada uma lista" +
            " de IDs válidos e inválidos")
    void findAllByIdWithMixedValidAndInvalidIds() {
        // Arrange
        long validId;
        validId = 1L;

        long invalidId;
        invalidId = 2L;

        CharacteristicsEntity validCharacteristics;
        validCharacteristics = new CharacteristicsEntity();
        validCharacteristics.setId(validId);

        List<Long> characteristicsIdList;
        characteristicsIdList = List.of(validId, invalidId);

        when(characteristicsRepository.findAllById(characteristicsIdList))
                .thenReturn(List.of(validCharacteristics));

        // Act
        List<CharacteristicsEntity> result;
        result = characteristicsService.findAllById(characteristicsIdList);

        // Assert
        assertEquals(1, result.size());
        assertEquals(validId, result.get(0).getId());
    }

    @Test
    @DisplayName("Deve retornar uma lista de Características com IDs válidos quando for dada uma lista" +
            " de IDs válidos e inválidos")
    void findAllByIdWhenGivenEmptyIdList() {
        when(characteristicsRepository.findAllById(anyList())).thenReturn(List.of());
        List<CharacteristicsEntity> result;
        result = characteristicsService.findAllById(List.of());
        assertEquals(0, result.size());
        verify(characteristicsRepository, timeout(1)).findAllById(anyList());
    }

    @Test
    @DisplayName(
            "Deve retornar uma lista de Características com IDs válidos quando for dada uma lista de IDs válidos")
    void findAllByIdWhenGivenOrderedIdList() {
        List<Long> inputIdList = List.of(1L, 2L, 3L);
        List<CharacteristicsEntity> expectedCharacteristicsList =
                List.of(
                        new CharacteristicsEntity(1L, "name1", "icon1", null),
                        new CharacteristicsEntity(2L, "name2", "icon2", null),
                        new CharacteristicsEntity(3L, "name3", "icon3", null));

        when(characteristicsRepository.findAllById(inputIdList))
                .thenReturn(expectedCharacteristicsList);

        List<CharacteristicsEntity> result = characteristicsService.findAllById(inputIdList);

        assertEquals(expectedCharacteristicsList, result);
        verify(characteristicsRepository, times(1)).findAllById(inputIdList);
    }

    @Test
    @DisplayName("Deve ertornar uma lista de Características com IDs válidos quando for dada uma lista de IDs válidos")
    void findAllByIdWhenGivenValidIds() { // Prepare test data
        List<Long> ids = List.of(1L, 2L, 3L);
        List<CharacteristicsEntity> expectedCharacteristics =
                List.of(
                        new CharacteristicsEntity(1L, "name1", "icon1", null),
                        new CharacteristicsEntity(2L, "name2", "icon2", null),
                        new CharacteristicsEntity(3L, "name3", "icon3", null));

        // Mock repository behavior
        when(characteristicsRepository.findAllById(ids)).thenReturn(expectedCharacteristics);

        // Call the method under test
        List<CharacteristicsEntity> result = characteristicsService.findAllById(ids);

        // Assert the result
        assertEquals(expectedCharacteristics, result);
        verify(characteristicsRepository, times(1)).findAllById(ids);
    }

    @Nested
    public class FindAllCharacteristics {
        @Test
        @DisplayName(
                "Deve retornar a lista de características quando a lista de Características não estiver vazia")
        void shouldReturnList_whenListOfCharacteristicsNotEmpty() {
            // Arrange
            when(characteristicsRepository.findAllById(anyList()))
                    .thenReturn(List.of(mock(CharacteristicsEntity.class)));

            // Act
            List<CharacteristicsEntity> result;
            result = characteristicsService.findAllById(List.of(1L));

            // Assert
            assertEquals(1, result.size());
            verify(characteristicsRepository, timeout(1)).findAllById(anyList());
        }

        @Test
        @DisplayName("Deve retornar uma lista vazia quando a lista de Cidades estiver vazia")
        void shouldReturnListEmpty_whenListOfCityIsEmpty() {
            // Arrange
            when(characteristicsRepository.findAllById(anyList())).thenReturn(List.of());

            // Act
            List<CharacteristicsEntity> result;
            result = characteristicsService.findAllById(List.of(1L));

            // Assert
            assertEquals(0, result.size());
            verify(characteristicsRepository, timeout(1)).findAllById(anyList());
        }
    }

    @Test
    @DisplayName("Deve retornar uma lista de Características com IDs válidos quando o findAll é chamado")
    void findAllReturnsAllCharacteristics() {
        List<CharacteristicsEntity> expectedCharacteristics =
                List.of(
                        new CharacteristicsEntity(1L, "Name1", "Icon1", null),
                        new CharacteristicsEntity(2L, "Name2", "Icon2", null),
                        new CharacteristicsEntity(3L, "Name3", "Icon3", null));
        when(characteristicsRepository.findAll()).thenReturn(expectedCharacteristics);

        List<CharacteristicsEntity> actualCharacteristics = characteristicsService.findAll();

        assertEquals(expectedCharacteristics, actualCharacteristics);
        verify(characteristicsRepository, times(1)).findAll();
    }
}