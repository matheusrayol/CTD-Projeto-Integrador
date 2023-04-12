package br.com.notcars.service.impl;

import br.com.notcars.model.ImageEntity;
import br.com.notcars.repository.ImageRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Collections;
import java.util.List;

import static org.mockito.ArgumentMatchers.anyList;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ImageServiceImplTest {
    @Mock
    private ImageRepository imageRepository;

    @InjectMocks
    private ImageServiceImpl imageService;

    @Test
    @DisplayName("Deve excluir todas as imagens associadas à ID de um produto")
    void deleteImagesByProductId() {
        Long productId = 1L;
        ImageEntity imageEntity = new ImageEntity(1L, "Test Image", "https://loremflickr.com/320/240/cat", null);
        List<ImageEntity> imageEntities = Collections.singletonList(imageEntity);

        when(imageRepository.findAllByProduct_Id(productId)).thenReturn(imageEntities);

        imageService.deleteImagesByProductId(productId);

        verify(imageRepository, times(1)).findAllByProduct_Id(productId);
        verify(imageRepository, times(1)).deleteAll(imageEntities);
    }
}