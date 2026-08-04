package com.ganeshfurniture.backend.mapper;

import com.ganeshfurniture.backend.dto.ProductRequest;
import com.ganeshfurniture.backend.entity.Product;
import org.springframework.stereotype.Component;

@Component
public class ProductMapper {

    public Product toEntity(ProductRequest request) {

        return Product.builder()
                .name(request.getName())
                .description(request.getDescription())
                .price(request.getPrice())
                .category(request.getCategory())
                .stock(request.getStock())
                .imageUrl(request.getImageUrl())
                .brand(request.getBrand())
                .active(true)
                .build();
    }
}