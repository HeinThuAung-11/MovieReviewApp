import { createAppSlice } from "@/lib/createAppSlice";
import { AuthResponse } from "@/lib/features/auth/authApi";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: AuthResponse = {
  token: "",
};

export const authSlice = createAppSlice({
  name: "auth",
  initialState,
  reducers: (create) => ({
    login: create.reducer((state, action: PayloadAction<AuthResponse>) => {
      state.token = action.payload.token;
    }),
    logout: create.reducer((state) => {
      state.token = "";
    }),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectAuth: (state) => state.token,
  },
});
export const { login, logout } = authSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectAuth } = authSlice.selectors;
