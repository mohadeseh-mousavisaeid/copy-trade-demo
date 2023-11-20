export const BASE_URL: string = "https://localhost:7095/api";
export const LOGIN_URL: string = "/Authentication/Login";
export const REGISTER_URL: string = "/Authentication/Register";

interface IDictionary<T> {
  [key: string]: T;
}
export const USER_UPDATE_URL: IDictionary<string> = {
  nickname: "/Users/UpdateNickname",
  description: "/Users/UpdateDescription",
  gender: "/Users/UpdateGender",
};

export const EXCHANGE_URL: string = "/Exchanges/GetExchanges";
export const MARKETS_URL: string = "/Markets/GetMarkets";
export const SYMBOLS_URL: string = "/Markets/GetSymbolInfo";
export const CREATE_WALLET_URL: string = "/Wallets/Create";
export const GET_WALLET_URL: string = "/Wallets/GetWallets";

export const CREATE_ORDER_COLLECTION: string = "/OrderCollections/Create";
export const GET_ORDER_COLLECTION: string = "/OrderCollections/Get";
