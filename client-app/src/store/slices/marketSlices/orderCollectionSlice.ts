import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IOrderCollectionCreateRequest } from "api/types/IOrderCollection";

export type TOrderCollection = IOrderCollectionCreateRequest & {
  orderCollectionId: string;
};
const initialState: TOrderCollection[] = [];

const orderCollectionSlice = createSlice({
  name: "orderCollection",
  initialState,
  reducers: {
    addOrderCollection: (state, action: PayloadAction<TOrderCollection>) => {
      const existedItem = state.find(
        (stateItem) =>
          stateItem.orderCollectionId === action.payload.orderCollectionId
      );
      typeof existedItem === "undefined" && state.push(action.payload);
    },
  },
});

export const { addOrderCollection } = orderCollectionSlice.actions;
export default orderCollectionSlice.reducer;
