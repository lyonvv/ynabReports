import { action, observable } from "mobx";
import { IUser } from "../models/user";
import { makeGetRequest } from "../utils/httpUtils";

export class UserStore {
  public constructor() {}

  @observable errorMessage?: any;
  @observable isLoading: boolean = false;
  @observable user?: any;

  @action async fetchUser() {
    this.isLoading = true;
    try {
      const response: IUser = await makeGetRequest<IUser>("user");
      this.user = response;
    } catch (error: any) {
      this.errorMessage = error;
    } finally {
      this.isLoading = false;
    }
  }
}
