import { LoginPage } from "./Components/LoginPage";
import { RootStore } from "./Stores/RootStore";

interface IProps {
  rootStore: RootStore;
  children: JSX.Element;
}

export const LoggedInGuard = ({ rootStore, children }: IProps) => {
  if (!rootStore.authStore.isLoggedIn()) {
    return <LoginPage rootStore={rootStore} />;
  }

  return children;
};
