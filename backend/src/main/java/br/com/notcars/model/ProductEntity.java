package br.com.notcars.model;

import java.util.List;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = "products")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "product_name")
  private String name;

  @Column(name = "product_description")
  private String description;

  @ManyToOne
  @JoinColumn(name = "categories_id")
  private CategoryEntity category;

  @ManyToOne
  @JoinColumn(name = "cities_id")
  private CityEntity city;

  @ManyToMany(cascade = CascadeType.ALL)
  @JoinTable(name="products_characteristics", joinColumns=
    {@JoinColumn(name="product_id")}, inverseJoinColumns=
    {@JoinColumn(name="characteristic_id")})
  private List<CharacteristicsEntity> characteristicsList;

  @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
  private List<ImageEntity> imageList;
}
