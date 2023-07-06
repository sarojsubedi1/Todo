const Todo = require("../models/todoModel.js");

// @desc   Get all todos
// route   GET /api/todos
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();

    res.json(todos);
  } catch (error) {
    res.json({ error: "Api error" });
  }
};

// @desc   Add todo
// route   POST /api/todos
exports.addTodo = async (req, res) => {
  const { text, completed } = req.body;

  try {
    const newTodo = new Todo({ text, completed });
    const savedTodos = await newTodo.save();

    res.status(201).json({ savedTodos });
  } catch (error) {
    console.error("Error saving todo:", error);
    res.status(500).json({ error: "Failed to create todo" });
  }
};
