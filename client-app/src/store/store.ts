import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./slices/userSlice";
import exchangeSliceReducer from "./marketSlices/exchangeSlice";
import symbolSliceReducer from "./marketSlices/symbolSlice";
import walletSliceReducer from "./marketSlices/walletSlice";
import orderSliceReducer from "./marketSlices/orderSlice";
import orderCollectionSliceReducer from "./marketSlices/orderCollectionSlice";
import marketSliceReducer from "./marketSlices/marketSlice";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "user",
  storage,
};

const userPersistReducer = persistReducer(persistConfig, userSliceReducer);

const reducer = combineReducers({
  user: userPersistReducer,
  exchange: exchangeSliceReducer,
  symbol: symbolSliceReducer,
  order: orderSliceReducer,
  market: marketSliceReducer,
  wallet: walletSliceReducer,
  orderCollection: orderCollectionSliceReducer,
});

export const store = configureStore({
  reducer: reducer,
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
export const persistor = persistStore(store);
