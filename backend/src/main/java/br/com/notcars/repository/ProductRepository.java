package br.com.notcars.repository;

import br.com.notcars.model.ProductEntity;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<ProductEntity, Long> {
  @Query("SELECT p FROM ProductEntity p "
      + "INNER JOIN CategoryEntity ca ON p.category.id = ca.id "
      + "INNER JOIN CityEntity ci ON p.city.id = ci.id "
      + "WHERE(:categoryId is NULL OR ca.id = :categoryId) "
      + "AND (:cityId is NULL OR ci.id = :cityId)")
  List<ProductEntity> findAllByCategoryAndCity(Long categoryId, Long cityId);
}
