package br.com.dh.potatocars.mapper;

import br.com.dh.potatocars.dto.category.CategoryRequest;
import br.com.dh.potatocars.dto.category.CategoryResponse;
import br.com.dh.potatocars.repository.category.CategoryEntity;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-02-24T20:11:29-0300",
    comments = "version: 1.5.3.Final, compiler: Eclipse JDT (IDE) 3.33.0.v20221215-1352, environment: Java 17.0.5 (Eclipse Adoptium)"
)
@Component
public class CategoryMapperImpl implements CategoryMapper {

    @Override
    public CategoryEntity toCategoryEntity(CategoryRequest categoryRequest) {
        if ( categoryRequest == null ) {
            return null;
        }

        CategoryEntity categoryEntity = new CategoryEntity();

        categoryEntity.setDescriptions( categoryRequest.getDescriptions() );
        categoryEntity.setQualification( categoryRequest.getQualification() );
        categoryEntity.setUrlImage( categoryRequest.getUrlImage() );

        return categoryEntity;
    }

    @Override
    public CategoryResponse toCategoryResponse(CategoryEntity categoryEntity) {
        if ( categoryEntity == null ) {
            return null;
        }

        CategoryResponse categoryResponse = new CategoryResponse();

        categoryResponse.setDescriptions( categoryEntity.getDescriptions() );
        categoryResponse.setId( categoryEntity.getId() );
        categoryResponse.setQualification( categoryEntity.getQualification() );
        categoryResponse.setUrlImage( categoryEntity.getUrlImage() );

        return categoryResponse;
    }

    @Override
    public CategoryEntity updateCategoryEntity(CategoryEntity categoryEntity, CategoryRequest categoryRequest) {
        if ( categoryEntity == null && categoryRequest == null ) {
            return null;
        }

        CategoryEntity categoryEntity1 = new CategoryEntity();

        if ( categoryEntity != null ) {
            categoryEntity1.setId( categoryEntity.getId() );
        }
        if ( categoryRequest != null ) {
            categoryEntity1.setQualification( categoryRequest.getQualification() );
            categoryEntity1.setDescriptions( categoryRequest.getDescriptions() );
            categoryEntity1.setUrlImage( categoryRequest.getUrlImage() );
        }

        return categoryEntity1;
    }
}
