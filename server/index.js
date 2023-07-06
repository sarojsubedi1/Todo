const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 8000;
const dbconnect = require("./db.js");
const todoRoutes = require("./routes/todoRoute.js");

const app = express();
app.use(cors());
app.use(express.json());

dbconnect();

app.use("/api/todos", todoRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
