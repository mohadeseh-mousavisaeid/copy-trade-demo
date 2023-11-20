import axios from "axios";
import { BASE_URL, GET_WALLET_URL as url } from "./constant/endpoints";
import { IResponse } from "./types/IResponse";
import { IWallet, IWalletRequest } from "./types/IWallet";
import { options } from "./option";

export const getWallets = async (
  walletRequest: IWalletRequest
): Promise<IResponse<IWallet[]>> => {
  const data: IResponse<IWallet[]> = await axios
    .post(BASE_URL + url, walletRequest, options)
    .then((res) => {
      return res.data;
    });

  return data;
};
