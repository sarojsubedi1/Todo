const express = require("express");
const todoController = require("../controllers/todoControler.js");
const router = express.Router();

//Route for get all todos
router.get("/", todoController.getAllTodos);

// Route for add todo
router.post("/", todoController.addTodo);

//Route for delete todo
router.delete("/:id", todoController.deleteTodo);

//Route for toggle completed state
router.put("/:id/toggle", todoController.toggleTodo);

module.exports = router;
