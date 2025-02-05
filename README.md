# Expense Tracker - Full Stack Web Application

## 📌 Overview
This **Expense Tracker** is a full-stack web application built using **React (Frontend)** and **Spring Boot (Backend)**. It allows users to **securely track their expenses**, categorize them, and visualize spending trends using charts. The entire application is **Dockerized** for easy deployment.

## 🔥 Key Features
- ✅ **User Authentication & JWT Security** – Secure login & session management.
- ✅ **Expense Management** – Add, Edit, Delete expenses.
- ✅ **Category-based Filtering** – Organize expenses by category.
- ✅ **Dynamic Charts** – Visualize expenses dynamically.
- ✅ **Mobile-Responsive UI** – Works across all screen sizes.
- ✅ **Dockerized Deployment** – Easily deploy using Docker Compose.

## 🛠️ Tech Stack
- **Frontend:** React.js (with Axios, Redux, TailwindCSS)
- **Backend:** Java Spring Boot (Spring Security, JWT, REST APIs)
- **Database:** MySQL (Dockerized)
- **Deployment:** Docker, Docker Compose

## 🚀 Installation & Setup
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/DineshK06/expense-tracker.git
cd expense-tracker
```

### 2️⃣ Run the Application using Docker
```bash
docker-compose up --build
```

### 3️⃣ Access the Application
- **Frontend:** `http://localhost:3000`
- **Backend API:** `http://localhost:8080/api`

## 🔄 API Endpoints
### **Authentication APIs**
- `POST /api/auth/register` – Register a new user.
- `POST /api/auth/login` – Login & receive a JWT token.

### **Expense APIs**
- `GET /api/expenses` – Retrieve all expenses.
- `POST /api/expenses` – Add a new expense.
- `DELETE /api/expenses/{id}` – Delete an expense.

### **Category APIs**
- `GET /api/categories` – Fetch all categories.
- `POST /api/categories` – Add a new category.

## 📸 Screenshots
✅ **Login Page**  
✅ **Dashboard with Expenses List**  
✅ **Add Expense Form**  
✅ **Expense Chart Visualization**  
✅ **API Testing Screenshots (Postman)**

## 🤝 Contribution
Want to improve this project? Fork it & create a PR! 🚀

## 📜 License
MIT License

## 📩 Contact
For queries, reach out to: **DineshK06**

🚀 **Happy Tracking!** 😎

