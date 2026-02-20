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
 * /api/todos/{id}:
 *   patch:
 *     summary: Update a todo (partial update)
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Todo ID
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *               priority:
 *                 type: string
 *               dueDate:
 *                 type: string
 *               completed:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Todo updated
 */


/**
 * @swagger
 * /api/todos/{id}:
 *   delete:
 *     summary: Delete a todo
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Todo ID
 *     responses:
 *       200:
 *         description: Todo deleted successfully
 */

/**
 * @swagger
 * /api/todos:
 *   get:
 *     summary: Get all user todos
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of todos per page
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search text in todo
 *       - in: query
 *         name: priority
 *         schema:
 *           type: string
 *         description: Filter by priority
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *         description: Sort field (example -createdAt)
 *     responses:
 *       200:
 *         description: List of todos
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

// GET all todos
router.get("/", protect, getTodos);

// CREATE todo
router.post(
  "/",
  protect,
  todoValidator,
  validationHandler,
  createTodo
);

// UPDATE todo (full update)
router.put(
  "/:id",
  protect,
  todoValidator,
  validationHandler,
  updateTodo
);

// PARTIAL update (toggle / edit specific fields)
router.patch("/:id", protect, updateTodo);

// DELETE todo
router.delete("/:id", protect, deleteTodo);

module.exports = router;










 