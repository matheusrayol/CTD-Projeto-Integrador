package br.com.notcars.repository;

import br.com.notcars.model.ImageEntity;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository  extends JpaRepository<ImageEntity, Long> {
  List<ImageEntity> findAllByProduct_Id(Long productId);
}
