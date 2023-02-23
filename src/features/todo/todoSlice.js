import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const todoSlice = createSlice({
  name: "todosList",
  initialState: { status: 'false', todos: [] },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = 'true';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.status = 'false'
      })
      .addCase(addTodos.fulfilled, (state, action) => {
        state.todos.push(action.meta.arg);
      })
      .addCase(deleteTodos.fulfilled, (state, action) => {
        return state.todos.filter(item => item.id !== action.meta.arg);
      });
  },
});

export default todoSlice.reducer;

export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const res = await axios.get(`http://localhost:3000/todos/`);
  return res.data;
});

export const addTodos = createAsyncThunk("addTodos", async (temp) => {
  const res = await axios.post(`http://localhost:3000/todos/`, temp);
  console.log(res);
  return res.data;
});

export const deleteTodos = createAsyncThunk("deleteTodos", async (id) => {
  const res = await axios.delete(`http://localhost:3000/todos/${id}`);
  console.log(res);
  return res.data;
});
