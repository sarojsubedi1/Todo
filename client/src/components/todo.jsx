import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTodoInput from "./addTodos";
import AllTasks from "./allTasks";
import { setTodos } from "../features/todos/todoSlice";

const Todo = () => {
  const dispatch = useDispatch();

  //fetch todos from api
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/todos")
      .then((response) => response.data)
      .then((data) => dispatch(setTodos(data)))
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  }, []);

  return (
    <>
      <div className="pt-10 w-1/2 mx-auto">
        <h1 className="text-[#ad68e5] text-center text-xl  font-extrabold ">
          Todo List
        </h1>
        <AddTodoInput />
        <AllTasks />
      </div>
    </>
  );
};

export default Todo;
