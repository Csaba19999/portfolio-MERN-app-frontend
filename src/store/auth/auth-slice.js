import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  refresh_token: null,
  name: "",
  email: "",
  isAuthenticated: false,
  image: "",
};

export const authSlice = createSlice({
  name: "AUTH",
  initialState,
  reducers: {
    login: (state, action) => {
      state.id = action.payload.id;
      state.refresh_token = action.payload.refresh_token;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isAuthenticated = true;
      state.image = action.payload.image;
    },
    logout: (state) => {
      state.id = null;
      state.refresh_token = null;
      state.name = "";
      state.email = "";
      state.isAuthenticated = false;
      state.image = "";
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
