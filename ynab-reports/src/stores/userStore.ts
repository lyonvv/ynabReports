import { action, observable } from "mobx";
import { makeGetRequest } from "../utils/httpUtils";

export class UserStore {
  public constructor() {}

  @observable errorMessage?: any;
  @observable isLoading: boolean = false;
  @observable user?: any;

  @action async fetchUser() {
    this.isLoading = true;
    try {
      const response: any = await makeGetRequest<any>("user");
      this.user = response.data.data.user;
    } catch (error: any) {
      this.errorMessage = error;
    } finally {
      this.isLoading = false;
      console.log("Fetched User: " + JSON.stringify(this.user));
    }
  }
}
