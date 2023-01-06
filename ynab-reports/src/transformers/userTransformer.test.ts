import { IUserAPI } from "../models/apiModels/IUserApi";
import { IUser } from "../models/user";
import { userClientToApi } from "./userTransformer";

test("confirms client to api user model transformation", () => {
  const clientUser: IUser = { id: "sampleId" };
  const expectedUserApi: IUserAPI = { id: "sampleId" };

  const transformedUserApi = userClientToApi(clientUser);

  expect(transformedUserApi.id).toEqual(expectedUserApi.id);
});
