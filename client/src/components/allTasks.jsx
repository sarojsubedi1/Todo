import { useDispatch, useSelector } from "react-redux";
import { toggleTodo, deleteTodo } from "../features/todos/todoSlice";
import { FaTrash } from "react-icons/fa";

const AllTasks = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  //Completed Todos
  const completedTodos = todos.filter((todo) => todo.completed);

  const handleTodoClick = (todoId) => {
    dispatch(toggleTodo(todoId));
  };

  const handleDelete = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  return (
    <>
      <div className="my-6">
        <h2 className="text-white  text-base font-extrabold py-2">
          All Tasks [{`${todos.length}/${completedTodos.length}`}]
        </h2>

        {todos &&
          todos.map((todo) => (
            <div
              className="mt-5 p-4 flex justify-between items-center gap-3 text-sm bg-[#21212b] rounded-2xl"
              key={todo._id}
            >
              <div
                onClick={() => handleTodoClick(todo._id)}
                className={`${
                  todo.completed
                    ? "text-red-600/50 w-full font-bold line-through italic bg-[#21212b]"
                    : "text-white/50 w-full font-bold bg-[#21212b]"
                }`}
              >
                {todo.text}
              </div>
              <div className="flex gap-4 bg-[#21212b]">
                <FaTrash
                  onClick={() => handleDelete(todo._id)}
                  className="text-white bg-[#21212b]"
                />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default AllTasks;
