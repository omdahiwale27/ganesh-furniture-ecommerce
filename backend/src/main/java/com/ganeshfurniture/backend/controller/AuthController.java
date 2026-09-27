package com.ganeshfurniture.backend.controller;

import com.ganeshfurniture.backend.dto.LoginRequest;
import com.ganeshfurniture.backend.entity.Admin;
import com.ganeshfurniture.backend.repository.AdminRepository;
import com.ganeshfurniture.backend.service.JwtService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final AdminRepository adminRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthController(
            AdminRepository adminRepository,
            PasswordEncoder passwordEncoder,
            JwtService jwtService) {

        this.adminRepository = adminRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {

        Admin admin = adminRepository
                .findByUsername(request.getUsername())
                .orElse(null);

        if (admin == null ||
                !passwordEncoder.matches(
                        request.getPassword(),
                        admin.getPassword())) {

            return ResponseEntity
                    .status(401)
                    .body(Map.of("message", "Invalid username or password"));
        }

        String token = jwtService.generateToken(admin.getUsername());

        return ResponseEntity.ok(
                Map.of(
                        "token", token,
                        "username", admin.getUsername()
                )
        );
    }
}