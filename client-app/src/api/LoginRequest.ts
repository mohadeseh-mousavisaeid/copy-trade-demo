import { ILogin } from "./types/ILogin";
import { IResponse } from "./types/IResponse";
import { BASE_URL, LOGIN_URL as url } from "./constant/endpoints";
import axios from "axios";

export const loginRequest = async (
  loginData: ILogin
): Promise<IResponse<string>> => {
  const options = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const data = await axios
    .post(BASE_URL + url, loginData, options)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });

  return data;
};
