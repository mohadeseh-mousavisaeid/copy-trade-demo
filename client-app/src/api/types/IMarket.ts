export interface IMarket {
  symbol: string | null;
  name: string | null;
  price: number | null;
  percentChange: number | null;
  volume: number | null;
}

export interface IMarketRequest {
  exchange: number | string;
  type: number;
}
