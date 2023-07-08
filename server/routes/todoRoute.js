const express = require("express");
const todoController = require("../controllers/todoControler.js");
const router = express.Router();

//Route for get all todos
router.get("/", todoController.getAllTodos);

// Route for add todo
router.post("/", todoController.addTodo);

//Route for toggle completed
router.put("/:id", todoController.toggleTodo);

module.exports = router;
