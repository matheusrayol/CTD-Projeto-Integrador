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
  @JoinColumn(name = "categories_id", referencedColumnName = "id")
  private CategoryEntity category;

  @ManyToOne
  @JoinColumn(name = "cities_id", referencedColumnName = "id")
  private CityEntity city;

  @ManyToMany()
  @JoinTable(name="products_characteristics", joinColumns=
    {@JoinColumn(name="product_id")}, inverseJoinColumns=
    {@JoinColumn(name="characteristic_id")})
  private List<CharacteristicsEntity> characteristicsList;

  @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
  @JoinColumn(name = "product_image_id")
  private List<ImageEntity> imageList;
}
