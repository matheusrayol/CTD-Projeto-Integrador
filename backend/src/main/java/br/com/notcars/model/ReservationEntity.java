package br.com.notcars.model;

import java.time.LocalDate;
import java.time.LocalTime;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "reservations")
@NoArgsConstructor
@AllArgsConstructor
public class ReservationEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column
  private LocalTime hourStartReservation;

  @Column
  private LocalDate dateBegin;

  @Column
  private LocalDate dateEnd;

  @ManyToOne
  @JoinColumn(name = "user_id_reservation", referencedColumnName = "id")
  private UserEntity user;

  @ManyToOne
  @JoinColumn(name = "products_id_reservation", referencedColumnName = "id")
  private ProductEntity product;
}
