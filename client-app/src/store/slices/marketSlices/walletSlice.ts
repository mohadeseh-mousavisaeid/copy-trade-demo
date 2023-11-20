import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IWallet } from "api/types/IWallet";

const value: IWallet = {
  id: null,
  title: null,
  isDefault: null,
  balanceUsdt: null,
  type: null,
};

const initialState = {
  value: value,
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    addWallet: (state, action: PayloadAction<IWallet>) => {
      state.value = action.payload;
    },
  },
});

export const { addWallet } = walletSlice.actions;
export default walletSlice.reducer;
