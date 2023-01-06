import axios from "axios";
import { getAuthToken } from "./authUtils";

const getConfig = () => {
  return {
    headers: { Authorization: `Bearer ${getAuthToken()}` },
  };
};

export const makeGetRequest = async <T>(path: string): Promise<T> => {
  return axios.get(
    `${process.env.REACT_APP_YNAB_API_BASE_URI}/${path}`,
    getConfig()
  );
};
