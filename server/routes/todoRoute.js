const express = require("express");
const todoController = require("../controllers/todoControler.js");
const router = express.Router();

router.get("/", todoController.getAllTodos);

// Route for add todo
router.post("/", todoController.addTodo);

module.exports = router;
