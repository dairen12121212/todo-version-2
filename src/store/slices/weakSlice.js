import { createSlice } from "@reduxjs/toolkit";

const weakSlice = createSlice({
  name: "weak",
  initialState: {
    arrWeakTodo: [
      // { value: "", id: "", completed: false, description: "", pin: false },
      [],
      [],
      [],
      [],
    ],
  },
  reducers: {},
});

export default weakSlice.reducer;
