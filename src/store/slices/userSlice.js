import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: null,
    surname: null,
    firstAppearance: null,
    login: false,
    today: null,
  },
  reducers: {
    addFirstAppearance(state, action) {
      state.firstAppearance = action.payload;
    },
    addToday(state, action) {
      state.today = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { addFirstAppearance, addToday } = userSlice.actions;
