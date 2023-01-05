import { clearAuthTokenFromStorage, getAuthToken } from "../utils/authUtils";
import { RootStore } from "./rootStore";

export class AuthStore {
  public constructor(private rootStore: RootStore) {}

  public isLoggedIn = () => {
    return !!getAuthToken();
  };

  public logOut = () => {
    clearAuthTokenFromStorage();
    window.location.assign("/login");
  };
}

export default AuthStore;
