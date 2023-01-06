import { action, observable, makeAutoObservable, flow } from "mobx";
import { IUserAPI } from "../models/apiModels/IUserApi";
import { IUser } from "../models/user";
import { userApiToClient } from "../transformers/userTransformer";
import { makeGetRequest } from "../utils/httpUtils";

export class UserStore {
  public constructor() {
    makeAutoObservable(this, {
      errorMessage: observable,
      isLoading: observable,
      user: observable,
      fetchUser: action,
    });
  }

  errorMessage?: any;
  isLoading: boolean = false;
  user?: IUser;

  fetchUser = flow(function* (this: UserStore) {
    this.isLoading = true;
    try {
      const response: IUserAPI = yield makeGetRequest<IUserAPI>("user");
      this.user = userApiToClient(response);
    } catch (error: any) {
      this.errorMessage = error;
    } finally {
      this.isLoading = false;
    }
  });
}
