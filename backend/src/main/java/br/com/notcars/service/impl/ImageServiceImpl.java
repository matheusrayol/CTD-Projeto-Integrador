package br.com.notcars.service.impl;

import br.com.notcars.repository.ImageRepository;
import br.com.notcars.service.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ImageServiceImpl implements ImageService {
  private final ImageRepository imageRepository;

  @Override
  public void deleteImagesByProductId(Long productId) {
    imageRepository.deleteAll(imageRepository.findAllByProduct_Id(productId));
  }
}
