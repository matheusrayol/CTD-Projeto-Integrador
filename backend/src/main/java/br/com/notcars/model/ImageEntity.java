package br.com.notcars.model;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = "images")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ImageEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column
  private String title;

  @Column(name = "url_images")
  private String urlImage;

  @ManyToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "product_image_id")
  private ProductEntity product;

}
