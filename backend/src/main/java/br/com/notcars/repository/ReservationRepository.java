package br.com.notcars.repository;

import br.com.notcars.model.ReservationEntity;
import java.time.LocalDate;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservationRepository extends JpaRepository<ReservationEntity, Long> {
  List<ReservationEntity> findAllByProduct_Id(Long productId);

  @Query("SELECT re FROM ReservationEntity re " +
    "WHERE re.product.id = :productId " +
    "AND re.dateBegin < :dateEnd " +
    "AND re.dateEnd > :dateBegin")
  List<ReservationEntity> findAllByAvailability(Long productId, LocalDate dateBegin, LocalDate dateEnd);

  List<ReservationEntity> findAllByUser_Id(Long id);
}
