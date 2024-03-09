import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  status: null,
  searchData: "",
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.users.push(action.payload);
      state.status = true;
      localStorage.setItem("data", JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.users = [];
      state.status = false;
      localStorage.clear();
    },
    addSearchData: (state, action) => {
      state.searchData = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { login, logout, addSearchData } = authSlice.actions;
