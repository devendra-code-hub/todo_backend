# 🧩 Task Management Backend API

A production-style RESTful Task Management API built with Node.js, Express, and MongoDB.  
This backend demonstrates JWT authentication, user-specific todos, validation, and centralized error handling.

---

## 🚀 Live API

https://todo-backend-1-o395.onrender.com

---

## 🛠 Tech Stack

- Node.js  
- Express.js  
- MongoDB Atlas  
- Mongoose  
- JWT (JSON Web Tokens)  
- bcryptjs  
- express-validator  
- Render (Deployment)

---

## ✨ Features

- User Registration & Login  
- JWT Authentication  
- Protected Routes  
- CRUD Todos  
- User-Specific Data  
- Password Hashing  
- Input Validation  
- Global Error Handling  
- Priority & Due Date Support  
- MVC Architecture  
- Deployed Backend  

---

## 📁 Project Structure
todo-backend/
│
├── config/
│ └── db.js
│
├── controllers/
│ ├── authController.js
│ └── todoController.js
│
├── middleware/
│ ├── authMiddleware.js
│ ├── errorMiddleware.js
│ └── validators.js
│
├── models/
│ ├── User.js
│ └── Todo.js
│
├── routes/
│ ├── authRoutes.js
│ └── todoRoutes.js
│
├── server.js
└── README.md

---

## 🔐 Authentication Flow

1. User registers or logs in  
2. Server returns JWT token  
3. Client sends token in Authorization header  
4. Backend verifies token  
5. User accesses only their own todos  

Authorization Header:Authorization: Bearer YOUR_TOKEN


---

## 📌 API Endpoints

### Auth

Register:
POST /api/auth/register


Body:
```json
{
  "name": "Vinay",
  "email": "vinay@test.com",
  "password": "123456"
}
```
Login:

POST /api/auth/login

Body:
{
  "email": "vinay@test.com",
  "password": "123456"
}

Todos (Protected Routes)

Get Todos:
GET /api/todos

Create Todo:

POST /api/todos
{
  "text": "Finish backend project",
  "priority": "high",
  "dueDate": "2026-03-01"
}

Update Todo:

PUT /api/todos/:id

Delete Todo:

DELETE /api/todos/:id
⚙️ Environment Variables

Create .env locally:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret
PORT=5000

(Render users: add these in Environment Variables dashboard.)

▶️ Run Locally
npm install
npm run dev


🧪 Testing

Use Postman or Thunder Client.

Register user

Login to receive token

Send token in Authorization header

Access todo routes



📚 What I Learned

REST API design

JWT authentication

MongoDB relations with ObjectId

MVC architecture

Input validation

Global error handling

Secure password hashing

Backend deployment with Render

