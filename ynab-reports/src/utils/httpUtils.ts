import axios from "axios";
import { IApiResponse } from "../models/apiModels/apiResponse";
import { getAuthToken } from "./authUtils";

const getConfig = () => {
  return {
    headers: { Authorization: `Bearer ${getAuthToken()}` },
  };
};

export const makeGetRequest = async <T>(path: string): Promise<T> => {
  const response = (await axios
    .get<T>(`${process.env.REACT_APP_YNAB_API_BASE_URI}/${path}`, getConfig())
    .then((responseBody) => responseBody)) as IApiResponse<T>;

  return response.data;
};
