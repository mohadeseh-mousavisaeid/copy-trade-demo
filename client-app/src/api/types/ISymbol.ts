export interface ISymbol {
  symbol: string | null;
  quoteAsset: string | null;
  baseAsset: string | null;
  isTrade: boolean | null;
  minPrice: string | null;
  maxPrice: string | null;
  stepPrice: string | null;
  minQty: string | null;
  stepQty: string | null;
  groups: [];
}

export interface ISymbolRequest {
  symbol: string;
  exchange: number | string;
  type: number;
}
