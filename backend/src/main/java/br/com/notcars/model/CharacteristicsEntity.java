package br.com.notcars.model;

import java.util.List;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = "characteristics")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CharacteristicsEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column
  private String name;

  @Column
  private String icon;

  @ManyToMany(mappedBy="characteristicsList")
  private List<ProductEntity> productList;
}
