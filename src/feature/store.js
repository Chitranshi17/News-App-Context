import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth/authSlice"
import newsReducer from "./News/newsSlice"
const store = configureStore({
  reducer : {
    auth : authReducer,
    news : newsReducer,
  },
});

export default store;