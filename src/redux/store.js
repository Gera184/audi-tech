import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/loginReducer";
import userReducer from "./reducers/userReducer";
import marketReducer from "./reducers/marketReducer";

const store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
    market: marketReducer,
  },
});

export default store;
