import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IExchange } from "api/types/IExchange";

const value: IExchange = {
  id: null,
  name: null,
  logoUrl: null,
  isDefault: null,
  totalValue: null,
};

const initialState = {
  value: value,
};

const exchangeSlice = createSlice({
  name: "exchange",
  initialState,
  reducers: {
    addExchange: (state, action: PayloadAction<IExchange>) => {
      state.value = action.payload;
    },
  },
});

export const { addExchange } = exchangeSlice.actions;
export default exchangeSlice.reducer;
