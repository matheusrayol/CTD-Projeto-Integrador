package br.com.notcars.model;

import java.util.List;
import javax.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class CharacteristicsEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column
  private String name;

  @Column
  private String icon;

  @ManyToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "product_id")
  private List<ProductEntity> productList;
}
