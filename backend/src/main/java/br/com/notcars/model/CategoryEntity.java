package br.com.notcars.model;


import java.util.List;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = "categories")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CategoryEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column
  private String qualification;

  @Column
  private String descriptions;

  @Column
  private String urlImage;

  @OneToMany(mappedBy = "category")
  private List<ProductEntity> product;
}
