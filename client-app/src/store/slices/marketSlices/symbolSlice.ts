import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ISymbol } from "api/types/ISymbol";

const value: ISymbol = {
  symbol: null,
  quoteAsset: null,
  baseAsset: null,
  isTrade: null,
  minPrice: null,
  maxPrice: null,
  stepPrice: null,
  minQty: null,
  stepQty: null,
  groups: [],
};

const initialState = {
  value: value,
};

const symbolSlice = createSlice({
  name: "symbol",
  initialState,
  reducers: {
    addSymbolInfo: (state, action: PayloadAction<ISymbol>) => {
      state.value = action.payload;
    },
  },
});

export const { addSymbolInfo } = symbolSlice.actions;
export default symbolSlice.reducer;
