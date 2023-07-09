import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    setTodos: (state, action) => {
      return action.payload;
    },

    addTodo: (state, action) => {
      state.push(action.payload);
    },

    toggleTodo: (state, action) => {
      const id = action.payload;

      axios.put(`http://localhost:8000/api/todos/${id}/toggle`);

      const todo = state.find((todo) => todo._id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    deleteTodo: (state, action) => {
      const id = action.payload;

      axios.delete(`http://localhost:8000/api/todos/${id}`);

      return state.filter((todo) => id !== todo._id);
    },
  },
});

export const { setTodos, addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
