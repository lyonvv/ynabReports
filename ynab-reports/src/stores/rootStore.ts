import AuthStore from "./authStore";
import { UserStore } from "./userStore";

export class RootStore {
  public authStore: AuthStore;
  public userStore: UserStore;

  constructor() {
    this.authStore = new AuthStore(this);
    this.userStore = new UserStore();
  }
}
