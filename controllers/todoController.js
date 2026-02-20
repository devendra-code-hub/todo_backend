const Todo = require("../models/Todo");

// GET user's todos
exports.getTodos = async (req, res) => {
  const todos = await Todo.find({ user: req.user.id });
  res.json(todos);
};

// CREATE todo
exports.createTodo = async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    priority: req.body.priority,
    dueDate: req.body.dueDate,
    user: req.user.id
  });

  res.status(201).json(todo);
};


// exports.createTodo = async (req, res) => {
//   const todo = await Todo.create({
//     text: req.body.text,
//     user: req.user.id
//   });

//   res.status(201).json(todo);
// };

// UPDATE todo
exports.updateTodo = async (req, res) => {
  const todo = await Todo.findOneAndUpdate(
    { _id: req.params.id, user: req.user.id },
    req.body,
    { new: true }
  );

  res.json(todo);
};

// DELETE todo
exports.deleteTodo = async (req, res) => {
  await Todo.findOneAndDelete({
    _id: req.params.id,
    user: req.user.id
  });

  res.json({ message: "Deleted" });
};

// // GET all todos
// const Todo = require("../models/Todo");
// exports.getTodos = async (req, res) => {
//   const todos = await Todo.find();
//   res.json(todos);
// };
// // CREATE todo
// exports.createTodo = async (req, res) => {
//   const todo = await Todo.create(req.body);
//   res.status(201).json(todo);
// };
// // UPDATE todo
// exports.updateTodo = async (req, res) => {
//   const updated = await Todo.findByIdAndUpdate(
//     req.params.id,
//     req.body,
//     { new: true }
//   );
//   res.json(updated);
// };
// // DELETE todo
// exports.deleteTodo = async (req, res) => {
//   await Todo.findByIdAndDelete(req.params.id);
//   res.json({ message: "Deleted" });
// };