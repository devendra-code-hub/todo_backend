const Todo = require("../models/Todo");

// GET user's todos

exports.getTodos = async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const filter = { user: req.user.id };

  // 🔍 Search by text
if (req.query.search) {
  filter.text = { $regex: req.query.search, $options: "i" };
}

  if (req.query.priority) {
    filter.priority = req.query.priority;
  }

  const todos = await Todo.find(filter)
    .sort(req.query.sort || "-createdAt")
    .skip(skip)
    .limit(limit);

  const total = await Todo.countDocuments(filter);

  res.json({
    page,
    limit,
    total,
    todos
  });
};

// exports.getTodos = async (req, res) => {
//   const todos = await Todo.find({ user: req.user.id });
//   res.json(todos);
// };

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
// UPDATE todo
exports.updateTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findOne({
      _id: req.params.id,
      user: req.user.id // important security check
    });

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    // Update only provided fields
    todo.text = req.body.text ?? todo.text;
    todo.priority = req.body.priority ?? todo.priority;
    todo.dueDate = req.body.dueDate ?? todo.dueDate;
    todo.completed = req.body.completed ?? todo.completed;

    const updatedTodo = await todo.save();

    res.json(updatedTodo);

  } catch (error) {
    next(error);
  }
};



// exports.updateTodo = async (req, res) => {
//   const todo = await Todo.findOneAndUpdate(
//     { _id: req.params.id, user: req.user.id },
//     req.body,
//     { new: true }
//   );

//   res.json(todo);
// };

// DELETE todo

// DELETE todo
exports.deleteTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findOne({
      _id: req.params.id,
      user: req.user.id   // security: only owner can delete
    });

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    await todo.deleteOne();

    res.json({ message: "Todo deleted" });
  } catch (error) {
    next(error);
  }
};













// exports.deleteTodo = async (req, res) => {
//   await Todo.findOneAndDelete({
//     _id: req.params.id,
//     user: req.user.id
//   });

//   res.json({ message: "Deleted" });
// };












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