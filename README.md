# Ganesh Furniture & Electronics

A full-stack e-commerce web application for managing and selling furniture and electronics products online. The application is being developed using **React.js** for the frontend, **Java Spring Boot** for the backend, and **MySQL** for data persistence.

The project focuses on building a scalable e-commerce platform with customer-facing product browsing and an admin interface for product management.

---

## 📌 Project Overview

**Ganesh Furniture & Electronics** is a full-stack e-commerce application designed for a furniture and electronics business.

The platform allows customers to browse products through a responsive web interface, while administrators can manage product information through dedicated management functionality.

The application follows a **frontend-backend architecture**, with React.js communicating with Spring Boot REST APIs and MySQL used for persistent data storage.

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router
* Axios
* HTML
* CSS
* JavaScript

### Backend

* Java
* Spring Boot
* Spring MVC
* Spring Data JPA
* REST APIs
* Spring Security
* JWT Authentication

### Database

* MySQL

### Development Tools

* Git
* GitHub
* Maven
* Postman
* IntelliJ IDEA
* Visual Studio Code

---

## 🏗️ Application Architecture

```text
                    ┌──────────────────────┐
                    │      React.js        │
                    │      Frontend        │
                    └──────────┬───────────┘
                               │
                         HTTP / REST APIs
                               │
                               ▼
                    ┌──────────────────────┐
                    │    Spring Boot       │
                    │      Backend         │
                    │                      │
                    │  Spring MVC          │
                    │  Spring Data JPA     │
                    │  Spring Security     │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │        MySQL         │
                    │       Database       │
                    └──────────────────────┘
```

---

## ✨ Features

### 👤 Customer Features

* Home page
* Navigation bar
* Product categories
* Product catalog
* Product details
* Product search
* Product filtering
* Wishlist
* Shopping cart
* User registration and login
* Checkout
* Order history
* Customer profile

### 🔐 Admin Features

* Admin dashboard
* Add products
* Edit products
* Delete products
* Product management
* Category management
* Customer management
* Order management
* Sales analytics

---

## 📊 Development Progress

The project is currently under active development.

### Phase 1 — Project Setup & Core Architecture ✅

* Project planning and application structure
* React.js frontend setup
* Spring Boot backend setup
* MySQL database configuration
* Backend REST API development
* Frontend-backend integration

### Phase 2 — Product Catalog & Admin Management ✅

* Home page
* Navigation bar
* Product catalog
* Product categories
* Product details page
* Admin add product functionality
* Admin edit product functionality
* Admin delete product functionality

### Phase 3 — E-Commerce Features & Production Preparation 🚧

* Product image upload
* Search and filtering
* User authentication and authorization
* Shopping cart
* Wishlist
* Checkout
* Order management
* Customer profile
* Admin dashboard enhancements
* Sales analytics
* Application deployment

---

## 📈 Current Progress

| Module               | Status      |
| -------------------- | ----------- |
| Backend APIs         | ✅ Completed |
| Database             | ✅ Completed |
| React Setup          | ✅ Completed |
| Home Page            | ✅ Completed |
| Navigation Bar       | ✅ Completed |
| Product Catalog      | ✅ Completed |
| Product Details      | ✅ Completed |
| Admin Add Product    | ✅ Completed |
| Admin Edit Product   | ✅ Completed |
| Admin Delete Product | ✅ Completed |
| Image Upload         | ✅ Completed |
| Search & Filters     | ✅ Completed |
| Authentication       | ⏳ Pending   |
| Shopping Cart        | ⏳ Pending   |
| Wishlist             | ⏳ Pending   |
| Checkout             | ⏳ Pending   |
| Order Management     | ⏳ Pending   |
| Deployment           | ⏳ Pending   |

**Project Status: 🚧 Active Development**

---

## 📁 Project Structure

```text
Ganesh-Furniture-Electronics/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── assets/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   └── resources/
│   │   └── test/
│   │
│   └── pom.xml
│
└── README.md
```

> The exact directory structure may evolve as development continues.

---

## 🔄 Application Flow

### Customer Flow

```text
Home Page
    ↓
Browse Categories
    ↓
Product Catalog
    ↓
Product Details
    ↓
Add to Cart
    ↓
Checkout
    ↓
Place Order
    ↓
Order History
```

### Admin Flow

```text
Admin Login
    ↓
Admin Dashboard
    ↓
Product Management
    ├── Add Product
    ├── Edit Product
    └── Delete Product
    ↓
Category Management
    ↓
Order Management
    ↓
Customer Management
```

---

## 🔌 Backend API

The backend is developed using **Spring Boot** and exposes REST APIs consumed by the React frontend.

Current backend development includes APIs for application and product data management.

API testing and verification are performed using **Postman**.

---

## 🗄️ Database

The application uses **MySQL** for persistent data storage.

The database layer is integrated with the Spring Boot backend using:

* Spring Data JPA
* Hibernate
* MySQL

The database is used for managing application data such as products, categories and other e-commerce entities as development progresses.

---

## 🔒 Security

Security functionality is planned as part of the upcoming authentication phase.

Planned security implementation includes:

* Spring Security
* JWT-based authentication
* Role-based authorization
* Protected admin functionality

---

## 🚧 Future Improvements

The following features are planned for upcoming development stages:

* Complete authentication and authorization
* Product image upload and management
* Advanced product search and filtering
* Shopping cart
* Wishlist
* Checkout process
* Order management
* Customer profile
* Admin dashboard
* Sales analytics
* Application testing
* Production deployment

---

## 🎯 Project Goals

The primary goals of this project are to:

* Build a complete full-stack e-commerce application.
* Apply Java and Spring Boot concepts in a real-world application.
* Develop and consume REST APIs.
* Implement database-driven application functionality.
* Build a responsive React.js frontend.
* Implement authentication and authorization.
* Understand frontend-backend integration.
* Follow a scalable and maintainable application architecture.

---

## 👨‍💻 Developer

**Om Dahiwale**

B.E. Electronics & Telecommunication Engineering
Smt. Kashibai Navale College of Engineering, Pune

**Technologies:** Java | Spring Boot | React.js | REST APIs | MySQL | JavaScript | Git

---

## 📌 Project Status

🚧 **Active Development**

This project is being developed incrementally. Core application architecture, backend APIs, database integration, product catalog, product details and basic admin product management have been implemented. Additional e-commerce, authentication and deployment features are currently being developed.
