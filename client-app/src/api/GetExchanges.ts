import { BASE_URL, EXCHANGE_URL as url } from "./constant/endpoints";
import axios from "axios";
import { IResponse } from "./types/IResponse";
import { IExchange } from "./types/IExchange";

export const getExchange = async (): // <-- accessToken: String
Promise<IResponse<IExchange[]>> => {
  const options = {
    headers: {
      // Authorization: `Bearer ${accessToken}`,
    },
  };
  const data: IResponse<IExchange[]> = await axios
    .get(BASE_URL + url, options)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });

  return data;
};
