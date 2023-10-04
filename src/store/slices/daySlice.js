import { createSlice } from "@reduxjs/toolkit";

const daySlice = createSlice({
  name: "day",
  initialState: {
    arrDayTodo: [
      // { value: "", id: "", completed: false, description: "", pin: false },
    ],
  },
  reducers: {
    addDayTodoItem(state, action) {
      state.arrDayTodo.push(action.payload);
    },
    removeDayTodoItem(state, action) {
      state.arrDayTodo = state.arrDayTodo.filter(
        (item) => item.id !== action.payload
      );
    },
    pinDayTodoItem(state, action) {
      const pinIndex = state.arrDayTodo.findIndex(
        (item) => item.id === action.payload
      );
      if (pinIndex !== -1) {
        const item = state.arrDayTodo.splice(pinIndex, 1)[0];
        item.pin = !item.pin;
        state.arrDayTodo.unshift(item);
        if (item.pin === false) {
          state.arrDayTodo.shift(item);
          state.arrDayTodo.push(item);
        }
      }
    },
    // toggleCompletedDayTodoItem(state, action) {
    //   state.arrDayTodo = state.arrDayTodo.map((item) => {
    //     if (item.id == action.payload) {
    //       return { ...item, completed: !item.completed };
    //     } else {
    //       return { ...item };
    //     }
    //   });
    //   console.log(state.arrDayTodo);
    // },
  },
});

export default daySlice.reducer;
export const {
  addDayTodoItem,
  removeDayTodoItem,
  pinDayTodoItem,
  toggleCompletedDayTodoItem,
} = daySlice.actions;
