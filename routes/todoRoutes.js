/**
 * @swagger
 * tags:
 *   name: Todos
 *   description: Todo management
 */

/**
 * @swagger
 * /api/todos:
 *   get:
 *     summary: Get all user todos
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of todos
 */

/**
 * @swagger
 * /api/todos:
 *   post:
 *     summary: Create new todo
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - text
 *             properties:
 *               text:
 *                 type: string
 *               priority:
 *                 type: string
 *               dueDate:
 *                 type: string
 *     responses:
 *       201:
 *         description: Todo created
 */

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