package com.ganeshfurniture.backend.controller;

import com.ganeshfurniture.backend.dto.ProductRequest;
import com.ganeshfurniture.backend.entity.Product;
import com.ganeshfurniture.backend.service.ProductService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    // Get all products
    @GetMapping("/products")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    // Get product by ID
    @GetMapping("/products/{id}")
    public Product getProductById(@PathVariable Long id) {
        return productService.getProductById(id);
    }

    // Add new product
    @PostMapping("/products")
    public Product saveProduct(@Valid @RequestBody ProductRequest request) {
        return productService.saveProduct(request);
    }

    // Update product
    @PutMapping("/products/{id}")
    public Product updateProduct(@PathVariable Long id,
                                 @Valid @RequestBody ProductRequest request) {
        return productService.updateProduct(id, request);
    }

    // Delete product
    @DeleteMapping("/products/{id}")
    public String deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
        return "Product deleted successfully";
    }

    // Search products
    @GetMapping("/products/search")
    public List<Product> searchProducts(@RequestParam String keyword) {
        return productService.searchProducts(keyword);
    }
}