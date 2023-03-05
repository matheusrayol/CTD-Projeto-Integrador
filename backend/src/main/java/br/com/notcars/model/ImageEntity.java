package br.com.notcars.model;

import javax.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class ImageEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column
  private String title;

  @Column
  private String urlImage;

  @ManyToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "product_id")
  private ProductEntity product;

}
