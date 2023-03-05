package br.com.notcars.model;

import java.util.List;
import javax.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class CityEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column
  private String name;

  @Column
  private String country;

  @OneToMany(mappedBy = "city")
  private List<ProductEntity> productEntityList;

}
