import { clearAuthTokenFromStorage, getAuthToken } from "../Utils/AuthUtils";
import { RootStore } from "./RootStore";

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
