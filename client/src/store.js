import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./Reducers/todoReducer";

export const store = configureStore({
  reducer: {
    todos: TodoReducer,
  },
});
