package br.com.notcars.model;

import java.util.List;
import javax.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class ProductEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column
  private String name;

  @Column
  private String description;

  @ManyToOne
  @JoinColumn(name = "category_id")
  private CategoryEntity category;

  @ManyToOne
  @JoinColumn(name = "city_id")
  private CityEntity city;

  @ManyToMany
  private List<CharacteristicsEntity> characteristicsList;

  @OneToMany(mappedBy = "product")
  private List<ImageEntity> imageList;
}
