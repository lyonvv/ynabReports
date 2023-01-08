import { IUserAPIModel } from "../models/ApiModels/UserApiModel";
import { IUserAPIResponse } from "../models/ApiResponseModels/UserApiResponse";
import { IUser } from "../models/ClientModels/UserModel";
import { userApiToClient } from "./UserTransformer";

test("confirms api to client user model transformation", () => {
  const userId = "sampleId";
  const userApi: IUserAPIModel = { id: userId };
  const expectedClientUser: IUser = { id: userId };

  const transformedUserClient = userApiToClient(userApi);

  expect(transformedUserClient.id).toEqual(expectedClientUser.id);
});
