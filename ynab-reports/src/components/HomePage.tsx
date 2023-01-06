import { Button } from "@blueprintjs/core";
import { RootStore } from "../stores/rootStore";
import { getAuthToken } from "../utils/authUtils";

interface IProps {
  rootStore: RootStore;
}

export const HomePage = ({ rootStore }: IProps) => {
  const authToken = getAuthToken();

  return (
    <div>
      HOME PAGE
      <Button text={"LOGOUT"} onClick={() => rootStore.authStore.logOut()} />
      <div>{"Auth Token: " + authToken}</div>
    </div>
  );
};
