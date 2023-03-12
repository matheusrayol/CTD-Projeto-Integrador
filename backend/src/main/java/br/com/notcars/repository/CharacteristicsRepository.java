package br.com.notcars.repository;

import br.com.notcars.model.CharacteristicsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CharacteristicsRepository extends JpaRepository<CharacteristicsEntity, Long> {
}
