import { createSlice } from "@reduxjs/toolkit";

const userlSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    user(state, action) {
      state.user = action.payload;
    },
    initialUser(state) {
      state.user = {};
    },
  },
});

export const userActions = userlSlice.actions;

export default userlSlice.reducer;
