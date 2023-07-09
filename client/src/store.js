import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./features/todos/todoSlice.js";

export const store = configureStore({
  reducer: {
    todos: TodoReducer,
  },
});
