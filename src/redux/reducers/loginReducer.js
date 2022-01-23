import { createSlice } from "@reduxjs/toolkit";

const loginlSlice = createSlice({
  name: "login",
  initialState: {
    loggedIn: false,
  },
  reducers: {
    loggedIn(state) {
      state.loggedIn = true;
    },
    logout(state) {
      state.loggedIn = false;
    },
  },
});

export const loginActions = loginlSlice.actions;

export default loginlSlice.reducer;
