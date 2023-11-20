import axios from "axios";
import { BASE_URL, CREATE_WALLET_URL as url } from "./constant/endpoints";
import { IResponse } from "./types/IResponse";
import { ICreateWalletRequest, IWallet } from "./types/IWallet";
import { options } from "./option";

export const createWallet = async (
  createWalletRequest: ICreateWalletRequest
): Promise<IResponse<IWallet>> => {
  const data: IResponse<IWallet> = await axios
    .post(BASE_URL + url, createWalletRequest, options)
    .then((res) => res.data);

  return data;
};
