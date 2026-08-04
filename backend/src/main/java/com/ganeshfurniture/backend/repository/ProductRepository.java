package com.ganeshfurniture.backend.repository;

import java.util.List;
import com.ganeshfurniture.backend.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByNameContainingIgnoreCase(String keyword);
}