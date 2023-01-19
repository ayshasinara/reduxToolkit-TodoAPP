import { createSlice } from "@reduxjs/toolkit";
export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    data: [],
  },
  reducers: {
    getTodo: (state, action) => {
      console.log(state, action);
      return { ...state, data: action.payload };
    },
  },
});

export const { getTodo } = todoSlice.actions;
export default todoSlice.reducer;
