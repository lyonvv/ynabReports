import { IUserAPIModel } from "../models/ApiModels/UserApiModel";
import { IUser } from "../models/ClientModels/UserModel";

export const userApiToClient = (userApi: IUserAPIModel): IUser => {
  return { id: userApi.id };
};
