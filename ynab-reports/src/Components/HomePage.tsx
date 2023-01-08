import { Button } from "@blueprintjs/core";
import { observer } from "mobx-react";
import { useNavigate } from "react-router";
import { useMountEffect } from "../Hooks/UseMountEffectHook";
import { RootStore } from "../Stores/RootStore";
import { getAuthToken } from "../Utils/AuthUtils";
import { UserInfo } from "./UserInfo";

interface IProps {
  rootStore: RootStore;
}

export const HomePage = observer(({ rootStore }: IProps) => {
  const navigate = useNavigate();

  useMountEffect(() => {
    rootStore.userStore.fetchUser();
    rootStore.budgetStore.fetchAllBudgets();
  });

  const authToken = getAuthToken();

  return (
    <div>
      HOME PAGE
      <Button text={"LOGOUT"} onClick={() => rootStore.authStore.logOut()} />
      <div>{"Auth Token: " + authToken}</div>
      <UserInfo userId={rootStore.userStore.user?.id} />
      <div>{`${rootStore.budgetStore.budgets?.length} Budgets Loaded`}</div>
      <div>
        <Button
          text={"View Transactions"}
          onClick={() => navigate("transactions")}
        />
      </div>
    </div>
  );
});
