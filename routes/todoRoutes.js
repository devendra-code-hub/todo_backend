const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const { todoValidator } = require("../middleware/validators");
const { validationHandler } = require("../middleware/errorMiddleware");


const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo
} = require("../controllers/todoController");

router.get("/", protect, getTodos);
router.post("/", protect, todoValidator, validationHandler, createTodo);
router.put("/:id", protect, todoValidator, validationHandler, updateTodo);

// router.post("/", protect, todoValidator, createTodo);
// router.put("/:id", protect, todoValidator, updateTodo);

// router.post("/", protect, createTodo);
// router.put("/:id", protect, updateTodo);
router.delete("/:id", protect, deleteTodo);
// router.get("/", getTodos);
// router.post("/", createTodo);
// router.put("/:id", updateTodo);
// router.delete("/:id", deleteTodo);

module.exports = router;