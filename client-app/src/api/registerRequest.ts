import { IRegister } from "./types/IRegister";
import { IResponse } from "./types/IResponse";
import { BASE_URL, REGISTER_URL as url } from "./constant/endpoints";
import axios from "axios";

export const registerRequest = async (
  registerData: IRegister
): Promise<IResponse<string>> => {
  const options = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const data = await axios
    .post(BASE_URL + url, registerData, options)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });

  return data;
};
