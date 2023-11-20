export enum WalletType {
  Virtual = 1,
  Real = 2,
}

export interface IWallet {
  id: number | null;
  title: string | null;
  isDefault: boolean | null;
  balanceUsdt: number | null;
  type: WalletType | null;
}

export interface IWalletRequest {
  exchangeType: number | string;
}

export interface ICreateWalletRequest {
  title: string;
  exchangeType: number | string;
  isDefault: boolean;
}
