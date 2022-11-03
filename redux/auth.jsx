import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: false,
  isError: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userData: (state, action) => {
      localStorage.setItem("userProfile", JSON.stringify({ ...action.payload }));

      state.user = action.payload;
    },
    isLoading: (state) => {
      state.isLoading = true;
    },
    isError: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },

    getUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    logout: (state) => {
      localStorage.removeItem("userProfile");
      state.user = null;
    },
  },
});

export const {
  userData,
  logout,
  isLoading,
  isError,
  getUser,
} = authSlice.actions;
export default authSlice.reducer;
