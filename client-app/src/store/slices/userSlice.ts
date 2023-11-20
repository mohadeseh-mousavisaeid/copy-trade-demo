import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "types/User";

const initialState: IUser = {
  token: "",
  isAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authenticateUser: (state, action: PayloadAction<IUser>) => {
      state.token = action.payload.token;
      if (action.payload.token !== "") {
        state.isAuth = true;
        localStorage.setItem("token", state?.token);
      }
    },
    clearUser: (state) => {
      state.token = "";
      state.isAuth = false;
      localStorage.setItem("token", "");
    },
  },
});

export const { authenticateUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
