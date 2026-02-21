🧩 Task Management Backend API

A production-style RESTful Task Management API built with Node.js, Express, and MongoDB.

This project demonstrates real-world backend engineering concepts including JWT authentication, user-specific resources, API documentation, validation, pagination, rate limiting, and centralized error handling.

🚀 Live API

Base URL:

https://todo-backend-1-o395.onrender.com

Swagger Documentation:

https://todo-backend-1-o395.onrender.com/api-docs
🛠 Tech Stack

Node.js

Express.js

MongoDB Atlas

Mongoose

JWT Authentication

bcryptjs

express-validator

Swagger (OpenAPI)

express-rate-limit

Render (Deployment)

✨ Features
Authentication & Security

User Registration & Login

JWT Authentication

Protected Routes

Password Hashing (bcrypt)

API Rate Limiting

Centralized Error Middleware

Todo Management

Create / Read / Update / Delete Todos

User-specific data isolation

Partial Updates (PATCH)

Priority Levels (low / medium / high)

Due Dates

Advanced Backend Features

Pagination

Search by text

Filter by priority

Sorting

Input Validation

MVC Architecture

Swagger API Documentation

Production Deployment

📁 Project Structure
todo-backend/
│
├── config/
│   ├── db.js
│   └── swagger.js
│
├── controllers/
│   ├── authController.js
│   └── todoController.js
│
├── middleware/
│   ├── authMiddleware.js
│   ├── errorMiddleware.js
│   ├── rateLimiter.js
│   └── validators.js
│
├── models/
│   ├── User.js
│   └── Todo.js
│
├── routes/
│   ├── authRoutes.js
│   └── todoRoutes.js
│
├── server.js
└── README.md
🔐 Authentication Flow

User registers or logs in

Server returns JWT token

Client sends token in Authorization header

Backend validates token

User can access only their own todos

Authorization Header Format
Authorization: Bearer YOUR_JWT_TOKEN
📌 API Endpoints
Auth

Register User
POST /api/auth/register

{
  "name": "Vinay",
  "email": "vinay@test.com",
  "password": "123456"
}

Login User
POST /api/auth/login

{
  "email": "vinay@test.com",
  "password": "123456"
}
Todos (Protected)

Get Todos (with pagination & search)

GET /api/todos?page=1&limit=10&search=task&priority=high

Create Todo

POST /api/todos
{
  "text": "Finish backend project",
  "priority": "high",
  "dueDate": "2026-03-01"
}

Update Todo

PATCH /api/todos/:id

Delete Todo

DELETE /api/todos/:id
⚙️ Environment Variables

Create .env locally:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

(Render users: add these in Environment Variables dashboard.)

▶️ Run Locally
npm install
npm run dev
🧪 Testing

Use:

Swagger UI

Postman

Thunder Client

Steps:

Register user

Login to receive JWT

Authorize using Bearer token

Test protected routes

📚 What I Learned

REST API design principles

JWT-based authentication

MongoDB relationships using ObjectId

MVC architecture

Input validation & error handling

API documentation using Swagger

Pagination, filtering & searching

Rate limiting for security

Production deployment with Render

Building scalable backend systems

⭐ Future Improvements

Refresh tokens

Role-based access

Frontend integration

Testing with Jest

Dockerization

👨‍💻 Author

Devendra Kumar Mahto

Backend Developer | Node.js | MongoDB
