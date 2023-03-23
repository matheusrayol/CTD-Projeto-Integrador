package br.com.notcars.mapper;

import br.com.notcars.dto.reservation.ReservationRequest;
import br.com.notcars.dto.reservation.ReservationResponse;
import br.com.notcars.model.ProductEntity;
import br.com.notcars.model.ReservationEntity;
import br.com.notcars.model.UserEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ReservationMapper {

  @Mapping(target = "id", ignore = true)
  ReservationEntity toEntity(ReservationRequest reservationRequest, UserEntity user, ProductEntity product);

  @Mapping(source = "product.id", target = "productId")
  @Mapping(source = "user.email", target = "email")
  ReservationResponse toReservationResponse(ReservationEntity reservationEntity);
}
