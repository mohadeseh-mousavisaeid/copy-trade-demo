import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IMarket } from "api/types/IMarket";

const value: IMarket = {
  symbol: null,
  name: null,
  price: null,
  percentChange: null,
  volume: null,
};

const initialState = {
  value: value,
};

const marketSlice = createSlice({
  name: "market",
  initialState,
  reducers: {
    addMarket: (state, action: PayloadAction<IMarket>) => {
      state.value = action.payload;
    },
  },
});

export const { addMarket } = marketSlice.actions;
export default marketSlice.reducer;
