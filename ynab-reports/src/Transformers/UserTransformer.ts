import { IUserAPIModel } from "../Models/ApiModels/UserApiModel";
import { IUser } from "../Models/ClientModels/UserModel";

export const userApiToClient = (userApi: IUserAPIModel): IUser => {
  return { id: userApi.id };
};
