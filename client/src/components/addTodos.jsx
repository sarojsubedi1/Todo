import axios from "axios";
import { useState } from "react";

const AddTodoInput = () => {
  const [inputTodo, setInputTodo] = useState("");

  const handleAddTodo = () => {
    axios.post("http://localhost:8000/api/todos", { text: inputTodo });
  };
  return (
    <>
      <form className="flex items-center gap-3 mt-8 border-2 border-[#21212b] rounded-3xl px-5 py-2">
        <input
          type="text"
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
          placeholder="Add a task"
          className="text-white border-none outline-none  p-2 w-full text-md bg-[#181820]"
        />
        <button
          className="bg-[#ad68e5] py-2 px-3 font-black rounded-lg "
          onClick={handleAddTodo}
        >
          +
        </button>
      </form>
    </>
  );
};

export default AddTodoInput;
