import { useEffect, useState } from "react";
import plus from "../assets/plus-icon.svg";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addTodo, toggleTodo } from "../Reducers/todoReducer";

const Todo = () => {
  const dispatch = useDispatch();
  const [inputTodo, setTodo] = useState("");
  const [todos, setTodos] = useState("");

  const handleAddTodo = () => {};

  //Fetch data from database
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(" http://localhost:8000/api/todos");
      setTodos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="bg-[#181820] h-screen">
        <div className="pt-10 w-[900px] mx-auto text-white">
          <h1 className=" text-left text-xl  font-extrabold ">Todo List</h1>
          <form className="flex items-center gap-3 mt-8 border-2 border-[#21212b] rounded-3xl px-5 py-2">
            <input
              type="text"
              value={inputTodo}
              onChange={(e) => setTodo(e.target.value)}
              placeholder="Add a task"
              className="border-none outline-none  p-2 w-full text-md bg-[#181820]"
            />
            <button
              className="bg-[#fb75a0] p-2 rounded-lg"
              onClick={handleAddTodo}
            >
              <img className="w-3 h-3" src={plus} alt="plus icon"></img>
            </button>
          </form>

          <div className="mt-8">
            <h2 className="text-base font-bold py-2">Tasks-[total tasks]</h2>
            {todos &&
              todos.map((todo) => (
                <div
                  className="mt-5 p-4 flex  items-center gap-3 text-sm bg-[#21212b] rounded-2xl"
                  key={todo._id}
                >
                  <label
                    htmlFor="todo"
                    className={`${
                      todo.completed
                        ? "text-[#fb75a0] line-through italic"
                        : " "
                    }`}
                  >
                    {todo.text}
                  </label>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
