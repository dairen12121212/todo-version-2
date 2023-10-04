import { createSlice } from "@reduxjs/toolkit";

const weakSlice = createSlice({
  name: "weak",
  initialState: {
    objWeakTodo: {},
  },
  reducers: {
    addWeakItemTodo(state, action) {
      state.objWeakTodo[action.payload.keyProp].push(action.payload.item);
    },
    removeWeakItemTodo(state, action) {
      state.objWeakTodo[action.payload.objId] = state.objWeakTodo[
        action.payload.objId
      ].filter((item) => item.id !== action.payload.id);
    },
    addWeakDay(state, action) {
      console.log(action.payload);
      state.objWeakTodo[action.payload] = [];
    },
    toggleWeakItemCompleted(state, action) {
      state.objWeakTodo[action.payload.objId] = state.objWeakTodo[
        action.payload.objId
      ].map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, completed: !item.completed };
        } else {
          return { ...item };
        }
      });
    },
  },
});

export default weakSlice.reducer;

export const {
  addWeakItemTodo,
  removeWeakItemTodo,
  addWeakDay,
  toggleWeakItemCompleted,
} = weakSlice.actions;
