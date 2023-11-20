import axios from "axios";
import { UserData } from "./types/UserData";
import { IResponse } from "./types/IResponse";
import { BASE_URL, USER_UPDATE_URL } from "./constant/endpoints";
import { InputType } from "../components/compositions/Dashboard/Account/AccountSecurity/InputType";

export const userUpdateRequests = async (
  type: InputType,
  userData: UserData,
  accessToken: String
): Promise<IResponse<string>> => {
  const options = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const data = await axios
    .post(BASE_URL + USER_UPDATE_URL[type as string], userData, options)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });

  return data;
};
