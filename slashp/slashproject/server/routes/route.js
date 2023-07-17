import express, {Router}  from "express";

import {
  addTodo,
  getAllTodos,
  toggleTodoDone,
  updateTodo,
  deleteTodo,
} from "../Controller/Todo-controller.js";

const route = express.Router();

route.post("/",  function(req, res) {
  console.log(req.body);
});
route.post("/todos", addTodo);
route.get("/todos", getAllTodos);
route.get("/todos/:id", toggleTodoDone);
route.put("/todos/:id", updateTodo);
route.delete("/todos/:id", deleteTodo);

export default route;
