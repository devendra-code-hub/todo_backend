require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

// Middlewares
const { apiLimiter, authLimiter } = require("./middleware/rateLimiter");
const { errorHandler } = require("./middleware/errorMiddleware");

// Swagger
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

// Routes (IMPORT FIRST)
const authRoutes = require("./routes/authRoutes");
const todoRoutes = require("./routes/todoRoutes");

const app = express();

// Connect DB
connectDB();

// Core middleware
app.use(cors());
app.use(express.json());

// Health route
app.get("/", (req, res) => {
  res.send("🚀 Task Management API is running");
});

// Global rate limit
app.use(apiLimiter);

// Swagger docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use("/api/auth", authLimiter, authRoutes);
app.use("/api/todos", todoRoutes);

// Error middleware MUST be last
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});








 