export type OrderCollectionModel = {
  orderId?: number;
  orderSide: number;
  orderType?: number;
  amount: number;
  price: number;
  priceTolerance: number;
  isConfirmed?: boolean;
  confirmedDateTimeUtc?: string;
};

export interface IOrderCollectionCreateRequest {
  walletId: number;
  symbol: string;
  exchangeType: number;
  orderCollectionType?: number;
  futuresType?: number;
  leverage: number;
  isBuyNow: boolean;
  orderModels: OrderCollectionModel[];
}

export interface IOrderCollectionCreate {
  orderCollectionId: number;
}

export interface IOrderCollectionRequest {
  page: number;
  pageSize: number;
  sorting: string;
}
