require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const todoRoutes = require("./routes/todoRoutes");

const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/todos", todoRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

app.use(errorHandler);