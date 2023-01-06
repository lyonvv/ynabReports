import AuthStore from "./authStore";

export class RootStore {
  public authStore: AuthStore;

  constructor() {
    this.authStore = new AuthStore(this);
  }
}
