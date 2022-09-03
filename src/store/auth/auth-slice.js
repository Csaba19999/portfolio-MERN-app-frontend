import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  refresh_token: null,
  name: "",
  email: "",
  isAuthenticated: false,
  image: "",
  exp: null,
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
      state.exp = action.payload.exp;

      localStorage.setItem("id", action.payload.id);
      localStorage.setItem("refresh_token", action.payload.refresh_token);
      localStorage.setItem("name", action.payload.name);
      localStorage.setItem("email", action.payload.email);
      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("image", action.payload.image);
      localStorage.setItem("exp", action.payload.exp);
    },
    logout: (state) => {
      state.id = null;
      state.refresh_token = null;
      state.name = "";
      state.email = "";
      state.isAuthenticated = false;
      state.image = "";
      state.exp = null;

      localStorage.removeItem("id");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("name");
      localStorage.removeItem("email");
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("image");
      localStorage.removeItem("exp");
    },
    authCheck: (state, action) => {
      //if token in local storage is expired, remove it
      if (localStorage.getItem("exp") > Date.now()) {
        localStorage.removeItem("id");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("image");
        localStorage.removeItem("exp");
      }

      if (localStorage.getItem("exp") < Date.now()) {

        console.log("token expired", action.payload);

        state.refresh_token = action.payload.refresh_token
        state.isAuthenticated = true;
        state.exp = action.payload.exp
        state.id = localStorage.getItem("id");
        state.name = localStorage.getItem("name");
        state.email = localStorage.getItem("email");
        state.image = localStorage.getItem("image");

        localStorage.setItem("refresh_token", action.payload.refresh_token);
        localStorage.setItem("email", action.payload.email);
        localStorage.setItem("exp", action.payload.exp);
      }

      
    },
  },
});

export const { login, logout, authCheck } = authSlice.actions;

export default authSlice.reducer;
