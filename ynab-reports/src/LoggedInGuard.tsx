import { LoginPage } from "./components/LoginPage";
import { RootStore } from "./stores/rootStore";

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
