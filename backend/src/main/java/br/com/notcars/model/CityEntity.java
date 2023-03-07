package br.com.notcars.model;

import java.util.List;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = "cities")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CityEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "city_name")
  private String name;

  @Column(name = "country_city")
  private String country;

  @OneToMany(mappedBy = "city")
  private List<ProductEntity> productEntityList;

}
