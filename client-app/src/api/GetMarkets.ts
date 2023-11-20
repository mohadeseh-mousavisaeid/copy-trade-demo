import { BASE_URL, MARKETS_URL as url } from "./constant/endpoints";
import axios from "axios";
import { IMarket, IMarketRequest } from "./types/IMarket";
import { IResponse } from "./types/IResponse";

export const getMarkets = async (
  request: IMarketRequest
): Promise<IResponse<IMarket[]>> => {
  const data: IResponse<IMarket[]> = await axios
    .post(BASE_URL + url, request)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });

  return data;
};
