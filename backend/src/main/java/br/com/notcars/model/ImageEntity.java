package br.com.notcars.model;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Table(name = "images")
@Entity
@Data
@ToString
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

  @ManyToOne
  @JoinColumn(name = "product_image_id", referencedColumnName = "id")
  private ProductEntity product;

}
