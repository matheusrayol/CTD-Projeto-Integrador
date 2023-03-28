package br.com.notcars.repository;

import br.com.notcars.model.ProductEntity;
import java.time.LocalDate;
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

  @Query(nativeQuery = true, value = "SELECT  * FROM products p " +
    "INNER JOIN cities c on p.cities_id = c.id " +
    "WHERE c.id = :cityId " +
    "AND NOT EXISTS (SELECT * FROM reservations r " +
    "                    WHERE r.products_id_reservation  = p.id " +
    "                   AND r.date_end > :startDate " +
    "                   AND  r.date_begin  < :endDate )" )
  List<ProductEntity> findAvailability(Long cityId, LocalDate startDate, LocalDate endDate);
}
