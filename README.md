# NOVO Medical

**Professional Medical Supplies Distribution Platform**<img width="1892" height="822" alt="Screenshot 2026-01-29 130138" src="https://github.com/user-attachments/assets/f4083768-7d56-4003-a073-6b1dfb1f7a9e" />
NOVO Medical is a full-stack web platform for managing and distributing medical supplies. It is built with a secure role-based system where Admins, Vendors, and Customers have different permissions, and all critical operations (adding, editing, deleting products, managing orders) are protected by authentication and authorization middleware.

The system is bilingual (Arabic & English) and targets clinics, hospitals, and healthcare suppliers.

---

## 🚀 Project Overview

NOVO Medical aims to digitalize and simplify the medical supply chain by providing:
- A modern product catalog for medical equipment and consumables
- Secure authentication for admins, vendors, and customers
- Inventory and order management<img width="1895" height="828" alt="Screenshot 2026-01-29 130201" src="https://github.com/user-attachments/assets/6842b272-4f76-46f5-be1b-a98a6abe2a8d" />

- Compliance with healthcare distribution standards
- A scalable backend architecture ready for future integrations (payments, delivery tracking, analytics)

---

## 🧱 System Architecture

## Backend (Node.js + Express + MongoDB)

- RESTful API structure with MVC pattern:

- controllers/ – business logic (products, users, orders, auth)

- routes/ – role-protected endpoints

- models/ – MongoDB schemas (User, Product, Order, Category)

- middleware/ – JWT verification, role checking, error handling

- Key features:

 - JWT authentication with refresh & expiration handling

 - Secure role validation for every sensitive endpoint

- Product stock validation

- Order lifecycle management (Pending → Approved → Shipped → Completed)


### Frontend
- HTML, Tailwind CSS, and Vanilla JavaScript
- Responsive UI for dashboards and product listings
- API integration using Fetch
<img width="1448" height="807" alt="Screenshot 2026-01-29 132209" src="https://github.com/user-attachments/assets/20ff24de-c8ed-448b-b445-a9cd23eb19ec" />
---

## 🔐 Authentication & Security

- Secure login using JSON Web Tokens (JWT)
- Password hashing with bcrypt
- Protected routes with middleware
- Token validation and expiration handling

---

## 🗂️ Core Features

### 1. Product Management
- Add, update, delete medical products
- Categories and stock tracking
- Image upload and detailed descriptions

### 2. Roles
- **Admin:** Full system control

## ⚙️ Tech Stack

| Layer | Technology |
|------|------------|
| Backend | Node.js, Express |
| Database | MongoDB |
| Auth | JWT, bcrypt |
| Frontend | HTML, Tailwind CSS, JavaScript |
| Deployment | Docker (planned), Cloud Hosting |

---

## 📁 Project Structure

```
novo-medical/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── app.js
│
├── frontend/
│   ├── index.html
│   ├── js/
│   └── assets/
│
└── README.md
```

---

## 🎯 Vision

To become a trusted digital hub connecting medical suppliers with healthcare providers, ensuring quality, speed, and compliance.

## 🧭 Mission

To empower local and international medical brands with a reliable online distribution platform that simplifies operations and enhances accessibility to essential healthcare products.

---

## 📌 Future Enhancements

- Online payments integration
- Real-time order tracking
- Admin analytics dashboard
- Mobile application
- AI-based demand forecasting

