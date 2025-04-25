# 🛒 E-Commerce MERN Application

This repository contains a full-stack e-commerce application built using the **MERN stack** (MongoDB, Express, React, Node.js). It includes a customer-facing frontend, an admin dashboard, and a backend server with secure APIs and MongoDB database integration.

---

## 📦 Project Structure

```
ecommerce-mern/
├── admin/             # Admin dashboard (React)
├── backend/           # Backend server (Node.js, Express, MongoDB)
├── frontend/          # Customer-facing frontend (React)
```

---

## ✨ Features

### 🧑‍💻 Frontend
- User authentication (login/signup)
- Browse products by category
- View product details
- Add products to cart
- Checkout functionality

### 🛠️ Admin Panel
- Add new products
- View/manage product listings
- Delete products

### 🔗 Backend
- RESTful APIs for product and user management
- JWT-based authentication
- Image upload with Multer
- MongoDB database integration

---

## 🚀 Installation & Setup

### ✅ Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)

### 📁 Clone the repository
```bash
git clone https://github.com/Tkavindi/Ecommerce-app.git
cd ecommerce-mern
```

### 📦 Install dependencies
```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install

# Admin Panel
cd ../admin
npm install
```

### ⚙️ Configure Environment Variables
In `backend/index.js`, set your MongoDB connection string:
```js
mongoose.connect("YOUR_MONGODB_URI_HERE", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```

### ▶️ Start Development Servers
```bash
# Start backend
cd backend
node index.js

# Start frontend
cd ../frontend
npm run dev

# Start admin panel
cd ../admin
npm run dev
```

---

## 🌐 Usage

- **Frontend**: http://localhost:5173  
- **Admin Panel**: http://localhost:5173/admin  
- **Backend API**: http://localhost:4000

---

## 📡 API Endpoints

### 🔐 Authentication
- `POST /signup` – Register new user
- `POST /login` – Authenticate user

### 🛍️ Products
- `GET /allproducts` – Fetch all products
- `POST /addproduct` – Add new product
- `POST /removeproduct` – Delete a product

### 🛒 Cart
- `POST /addtocart` – Add product to cart
- `POST /removefromcart` – Remove product from cart
- `POST /getcart` – Fetch user’s cart

---

## 🛠️ Technologies Used

- **Frontend**: React, Vite, Tailwind CSS, React Router
- **Admin Panel**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB, JWT, Multer

---

## 📂 Folder Overview

```
ecommerce-mern/
├── admin/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── AddProduct.jsx
│   │   │   ├── ListProduct.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── pages/
│   │   │   └── Admin.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── vite.config.js
│   └── package.json
├── backend/
│   ├── upload/images/
│   ├── index.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── Context/ShopContext.jsx
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── CartItems.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Item.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── NewCollections.jsx
│   │   │   ├── NewsLetter.jsx
│   │   │   ├── Offer.jsx
│   │   │   ├── Popular.jsx
│   │   │   ├── ProductDescription.jsx
│   │   │   ├── ProductDisplay.jsx
│   │   │   ├── ProductHd.jsx
│   │   │   └── RelatedProducts.jsx
│   │   ├── pages/
│   │   │   ├── Cart.jsx
│   │   │   ├── Category.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Product.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── vite.config.js
│   └── package.json
```

---

## 📝 License

This project is licensed under the **MIT License**.  
See the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Contributions are welcome!  
Fork the repository and submit a pull request.

---
