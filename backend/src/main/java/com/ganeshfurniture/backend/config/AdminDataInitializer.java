package com.ganeshfurniture.backend.config;

import com.ganeshfurniture.backend.entity.Admin;
import com.ganeshfurniture.backend.repository.AdminRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class AdminDataInitializer {

    @Bean
    CommandLineRunner createAdmin(
            AdminRepository adminRepository,
            PasswordEncoder passwordEncoder) {

        return args -> {

            if (adminRepository.findByUsername("admin").isEmpty()) {

                Admin admin = Admin.builder()
                        .username("admin")
                        .password(passwordEncoder.encode("admin@123"))
                        .build();

                adminRepository.save(admin);

                System.out.println("=================================");
                System.out.println("Default admin account created");
                System.out.println("Username: admin");
                System.out.println("=================================");
            }
        };
    }
}