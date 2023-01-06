import { Button } from "@blueprintjs/core";
import { observer } from "mobx-react";
import { RootStore } from "../stores/rootStore";
import { getAuthToken } from "../utils/authUtils";
import { UserInfo } from "./userInfo";

interface IProps {
  rootStore: RootStore;
}

export const HomePage = observer(({ rootStore }: IProps) => {
  const authToken = getAuthToken();

  return (
    <div>
      HOME PAGE
      <Button text={"LOGOUT"} onClick={() => rootStore.authStore.logOut()} />
      <div>{"Auth Token: " + authToken}</div>
      <Button
        text={"Fetch User Info"}
        onClick={() => rootStore.userStore.fetchUser()}
      />
      <UserInfo userId={rootStore.userStore.user?.id} />
      <Button
        text={"Print Stored User"}
        onClick={() =>
          console.log(
            "Stored User: " + JSON.stringify(rootStore.userStore.user?.id)
          )
        }
      />
    </div>
  );
});
