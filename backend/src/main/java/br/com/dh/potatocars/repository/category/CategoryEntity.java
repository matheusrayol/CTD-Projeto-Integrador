package br.com.dh.potatocars.repository.category;


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
  private Integer id;

  @Column
  private String qualification;

  @Column
  private String description;

  @Column
  private String urlImage;
}