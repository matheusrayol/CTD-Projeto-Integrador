package br.com.notcars.mapper;

import br.com.notcars.dto.image.ImageRequest;
import br.com.notcars.dto.image.ImageResponse;
import br.com.notcars.model.ImageEntity;
import java.util.List;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ImageMapper {

  ImageEntity toEntity(ImageRequest imageRequest);

  ImageResponse toResponse(ImageEntity image);


  List<ImageResponse> map(List<ImageEntity> imageEntityList);
}
