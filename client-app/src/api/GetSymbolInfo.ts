import { BASE_URL, SYMBOLS_URL as url } from "./constant/endpoints";
import axios from "axios";
import { IResponse } from "./types/IResponse";
import { ISymbol, ISymbolRequest } from "./types/ISymbol";

export const getSymbolInfo = async (
  request: ISymbolRequest
): Promise<IResponse<ISymbol>> => {
  const data: IResponse<ISymbol> = await axios
    .post(BASE_URL + url, request)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });

  return data;
};
