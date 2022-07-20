import { User } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

export const UserInitialState: User = {
  rol: "",
  name: "",
  email: "",
  status: "",
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: UserInitialState,
  reducers: {
    logIn: (state, action) => {
      state = action.payload;
    },
    logOut: () => UserInitialState,
  },
});

export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;
