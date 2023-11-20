import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum OrderType {
  buy,
  sell,
}

export enum ClearFlag {
  all,
  buy,
  sell,
}

export interface IOrder {
  id: string | null;
  price: number | null;
  amount: number | null;
  stop: number | null;
  priceTolerance: number | null;
  isBuyNow: boolean | null;
  type: OrderType;
}

const initialState: IOrder[] = [];

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<IOrder>) => {
      state.push(action.payload);
    },

    removeOrder: (state, action: PayloadAction<string>) => {
      const newState = state.filter((x) => x.id !== action.payload);
      return newState;
    },
    clearOrders: (state, action: PayloadAction<ClearFlag>) => {
      if (action?.payload === ClearFlag.all) {
        state = [];
        return state;
      }
    },
  },
});

export const { addOrder, removeOrder, clearOrders } = orderSlice.actions;
export default orderSlice.reducer;
