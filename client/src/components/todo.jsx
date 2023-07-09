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
        // Handle error if needed
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

const ActiveTasks = () => {
  const todos = useSelector((state) => state.todos);

  const todosArray = Array.isArray(todos) ? todos : [];
  //Active Todos
  const activeTodos = todosArray.filter((todo) => !todo.completed);

  return (
    <>
      <div className="my-6">
        <h2 className="text-[#ad68e5] text-base font-bold py-2">
          Active Tasks [{activeTodos.length}]
        </h2>
        {todos &&
          activeTodos.map((todo) => (
            <div
              className="mt-5 p-4 flex  items-center gap-3 text-sm  bg-[#21212b] rounded-2xl"
              key={todo._id}
            >
              <h3 className="text-[#6fc3be]/70 font-bold bg-[#21212b]">
                {todo.text}
              </h3>
            </div>
          ))}
      </div>
    </>
  );
};

const CompletedTasks = () => {
  const todos = useSelector((state) => state.todos);

  const todosArray = Array.isArray(todos) ? todos : [];
  //Completed Todos
  const completedTodos = todosArray.filter((todo) => todo.completed);

  return (
    <>
      <div className="my-6">
        <h2 className="text-[#ad68e5] text-base font-bold py-2">
          Completed Tasks [{completedTodos.length}]
        </h2>
        {todos &&
          completedTodos.map((todo) => (
            <div
              className="mt-5 p-4 flex  items-center gap-3 text-sm  bg-[#21212b] rounded-2xl"
              key={todo._id}
            >
              <h3 className="text-[#ff4e00]/70 font-bold line-through italic bg-[#21212b]">
                {todo.text}
              </h3>
            </div>
          ))}
      </div>
    </>
  );
};
