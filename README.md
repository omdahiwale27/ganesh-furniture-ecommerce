# 🏠 Ganesh Furniture & Electronics

A full-stack e-commerce web application developed for a furniture and electronics business.

Built using **React, Spring Boot, and MySQL**, this project provides a modern customer-facing product catalog and an admin dashboard for managing products and inventory.

---

## 🚀 Project Overview

Ganesh Furniture & Electronics is a full-stack web application that allows customers to browse furniture and electronic products, search and filter products, view product details, and contact the store.

The application also includes an admin dashboard where authorized administrators can add, update, delete products and upload product images.

---

## ✨ Features

### 👨‍💻 Customer Features

- Modern responsive homepage
- Product categories
- Product catalog
- Product search
- Category filtering
- Product sorting
- Product details page
- Product image display
- Product availability
- WhatsApp enquiry option
- Responsive design for desktop and mobile

### 🔐 Admin Features

- Admin login
- JWT-based authentication
- Protected admin operations
- Add products
- Edit products
- Delete products
- Upload product images
- Update product images
- Admin dashboard
- Logout functionality

### ⚙️ Backend Features

- RESTful APIs using Spring Boot
- MySQL database integration
- Spring Data JPA
- Hibernate ORM
- DTO-based request handling
- Service layer
- Repository layer
- Exception handling
- Image upload and serving
- JWT authentication
- BCrypt password hashing

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- JavaScript
- React Router
- Axios
- CSS

### Backend

- Java
- Spring Boot
- Spring MVC
- Spring Data JPA
- Spring Security
- JWT
- Maven

### Database

- MySQL
- Hibernate / JPA

### Tools

- Git
- GitHub
- Postman
- VS Code

---

## 🏗️ Application Architecture

```text
                    React Frontend
                   React + Vite
                         │
                         │ REST API
                         ▼
                 Spring Boot Backend
                         │
              ┌──────────┼──────────┐
              │          │          │
         Controller   Service   Security
              │          │          │
              └──────────┼──────────┘
                         │
                    Repository
                         │
                    JPA / Hibernate
                         │
                         ▼
                    MySQL Database