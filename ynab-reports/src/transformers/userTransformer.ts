import { IUserAPI } from "../models/apiModels/IUserApi";
import { IUser } from "../models/user";

export const userApiToClient = (userApi: IUserAPI): IUser => {
  return { id: userApi.id };
};

export const userClientToApi = (user: IUser): IUserAPI => {
  return { id: user.id };
};
