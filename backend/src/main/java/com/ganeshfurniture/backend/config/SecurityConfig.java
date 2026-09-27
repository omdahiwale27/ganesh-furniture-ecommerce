package com.ganeshfurniture.backend.config;

import com.ganeshfurniture.backend.repository.AdminRepository;
import com.ganeshfurniture.backend.security.JwtAuthenticationFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
public class SecurityConfig {

    private final AdminRepository adminRepository;
    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    public SecurityConfig(
            AdminRepository adminRepository,
            JwtAuthenticationFilter jwtAuthenticationFilter) {

        this.adminRepository = adminRepository;
        this.jwtAuthenticationFilter = jwtAuthenticationFilter;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public UserDetailsService userDetailsService() {

        return username -> adminRepository
                .findByUsername(username)
                .map(admin -> User
                        .withUsername(admin.getUsername())
                        .password(admin.getPassword())
                        .roles("ADMIN")
                        .build())
                .orElseThrow(() ->
                        new RuntimeException("Admin user not found"));
    }

    @Bean
    public SecurityFilterChain securityFilterChain(
            HttpSecurity http) throws Exception {

        http
                .csrf(csrf -> csrf.disable())

                .cors(cors -> {})

                .sessionManagement(session ->
                        session.sessionCreationPolicy(
                                SessionCreationPolicy.STATELESS
                        )
                )

                .authorizeHttpRequests(auth -> auth

                        // Login is public
                        .requestMatchers("/auth/**").permitAll()

                        // Customer browsing is public
                        .requestMatchers(HttpMethod.GET, "/products/**")
                        .permitAll()

                        // Customer can view uploaded images
                        .requestMatchers(HttpMethod.GET, "/files/**")
                        .permitAll()

                        // Admin-only product operations
                        .requestMatchers(
                                HttpMethod.POST,
                                "/products"
                        ).authenticated()

                        .requestMatchers(
                                HttpMethod.PUT,
                                "/products/**"
                        ).authenticated()

                        .requestMatchers(
                                HttpMethod.DELETE,
                                "/products/**"
                        ).authenticated()

                        // Admin-only image upload
                        .requestMatchers(
                                HttpMethod.POST,
                                "/files/upload"
                        ).authenticated()

                        // Everything else requires authentication
                        .anyRequest().authenticated()
                )

                .addFilterBefore(
                        jwtAuthenticationFilter,
                        UsernamePasswordAuthenticationFilter.class
                );

        return http.build();
    }
}