import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const todoSlice = createSlice({
  name: "todosList",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addTodos.fulfilled, (state, action) => {
        console.log(action.meta.arg);
        state.push(action.meta.arg);
      })
      .addCase(deleteTodos.fulfilled, (state, action) => {
        return state.filter(item => item.id !== action.meta.arg);
      });
  },
});

// this is for configureStore
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
