package br.com.notcars.mapper;

import br.com.notcars.dto.user.UserRequest;
import br.com.notcars.dto.user.UserResponse;
import br.com.notcars.model.FunctionEntity;
import br.com.notcars.model.UserEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface UserMapper {
  @Mapping(source = "userRequest.name", target = "name")
  @Mapping(source = "function", target = "function")
  @Mapping(target = "id", ignore = true)
  UserEntity toUserEntity(UserRequest userRequest, FunctionEntity function);

  UserResponse toUserResponse(UserEntity user);
}
