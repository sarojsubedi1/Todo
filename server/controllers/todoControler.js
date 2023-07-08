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

// @desc   Toggle todo
// route   PUT /api/todos/:id
exports.toggleTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    todo.completed = !todo.completed; // Toggle the completed status
    await todo.save(); // Save the updated todo
    return res.json(todo);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
};
