import axios from "axios";
import { options } from "./option";
import { BASE_URL, CREATE_ORDER_COLLECTION as url } from "./constant/endpoints";
import { IResponse } from "./types/IResponse";
import {
  IOrderCollectionCreate,
  IOrderCollectionCreateRequest,
} from "./types/IOrderCollection";

export const createOrderCollection = async (
  createOrderCollectionRequest: IOrderCollectionCreateRequest
): Promise<IResponse<IOrderCollectionCreate>> => {
  const data: IResponse<IOrderCollectionCreate> = await axios
    .post(BASE_URL + url, createOrderCollectionRequest, options)
    .then((res) => res.data);

  return data;
};
