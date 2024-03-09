import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Features/authSlice";
import cartSlice from "../Features/cartSlice";

export const store = configureStore({
  reducer: {
    user: authSlice,
    usercart: cartSlice,
  },
});
