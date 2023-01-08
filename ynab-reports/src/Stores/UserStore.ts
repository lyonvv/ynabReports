import { action, observable, makeAutoObservable, flow } from "mobx";
import { IUserAPIResponse } from "../models/ApiResponseModels/UserApiResponse";
import { IUser } from "../models/ClientModels/UserModel";
import { userApiToClient } from "../Transformers/UserTransformer";
import { makeGetRequest } from "../Utils/HttpUtils";

export class UserStore {
  public constructor() {
    makeAutoObservable(this, {
      errorMessage: observable,
      isLoading: observable,
      user: observable,
      fetchUser: action,
    });
  }

  public errorMessage?: any;
  public isLoading: boolean = false;
  public user?: IUser;

  public fetchUser = flow(function* (this: UserStore) {
    this.isLoading = true;
    try {
      const response: IUserAPIResponse = yield makeGetRequest<IUserAPIResponse>(
        "user"
      );
      this.user = userApiToClient(response.user);
    } catch (error: any) {
      this.errorMessage = error;
    } finally {
      this.isLoading = false;
    }
  });
}
