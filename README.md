# NOVO Medical

**Professional Medical Supplies Distribution Platform**

NOVO Medical is a web-based platform designed for the distribution and management of medical supplies. It serves clinics, hospitals, and healthcare providers by offering a reliable, secure, and efficient system for browsing products, managing orders, and handling vendor–customer interactions.

---

## 🚀 Project Overview

NOVO Medical aims to digitalize and simplify the medical supply chain by providing:
- A modern product catalog for medical equipment and consumables
- Secure authentication for admins, vendors, and customers
- Inventory and order management
- Compliance with healthcare distribution standards
- A scalable backend architecture ready for future integrations (payments, delivery tracking, analytics)

---

## 🧱 System Architecture

The project follows a clean separation between frontend and backend:

### Backend
- **Node.js + Express**
- RESTful API architecture
- JWT-based authentication & authorization
- Role-based access control (Admin, Vendor, Customer)
- MongoDB for data persistence

### Frontend
- HTML, Tailwind CSS, and Vanilla JavaScript
- Responsive UI for dashboards and product listings
- API integration using Fetch

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

### 2. User Roles
- **Admin:** Full system control
- **Vendor:** Manage own products and orders
- **Customer:** Browse products and place orders

### 3. Order System
- Create and track orders
- Order status (Pending, Approved, Shipped, Completed)
- Vendor–Customer communication

### 4. Wallet & Payments (Planned)
- Internal wallet system
- Secure payment gateway integration
- Transaction history

---

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
│   ├── dashboard.html
│   ├── js/
│   └── assets/
│
└── README.md
```

---

## 🛠️ Setup Instructions

1. Clone the repository
```bash
git clone https://github.com/your-username/novo-medical.git
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Configure environment variables
```env
PORT=3000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

4. Run the server
```bash
npm start
```

5. Open frontend
Open `index.html` in your browser or serve it using a local server.

---

## 🎯 Vision

To become a trusted digital hub connecting medical suppliers with healthcare providers, ensuring quality, speed, and compliance.

## 🧭 Mission

To empower local and international medical brands with a reliable online distribution platform that simplifies operations and enhances accessibility to essential healthcare products.

---

## 👨‍💻 Author

Developed by **NOVO Medical Team**

---

## 📌 Future Enhancements

- Online payments integration
- Real-time order tracking
- Admin analytics dashboard
- Mobile application
- AI-based demand forecasting

