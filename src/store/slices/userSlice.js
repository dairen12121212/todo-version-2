import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: null,
    userSurname: null,
    userPassword: null,
    login: false,
    firstAppearance: null,
    today: null,
  },
  reducers: {
    addFirstAppearance(state, action) {
      state.firstAppearance = action.payload;
    },
    addToday(state, action) {
      state.today = action.payload;
    },
    userRegistration(state, action) {
      state.userName = action.payload.name;
      state.userSurname = action.payload.surname;
      state.userPassword = action.payload.password;
      state.login = true;
    },
    userLogin(state) {
      state.login = true;
    },
    userLogout(state) {
      state.login = false;
    },
  },
});

export default userSlice.reducer;

export const {
  addFirstAppearance,
  addToday,
  userRegistration,
  userLogin,
  userLogout,
} = userSlice.actions;
