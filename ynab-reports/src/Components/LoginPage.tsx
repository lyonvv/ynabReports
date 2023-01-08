import { Button } from "@blueprintjs/core";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RootStore } from "../Stores/RootStore";

interface IProps {
  rootStore: RootStore;
}

export const LoginPage = observer(({ rootStore }: IProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (rootStore.authStore.isLoggedIn()) {
      navigate("/");
    }
  });

  const handleLogin = () => {
    const authEndpoint = process.env.REACT_APP_YNAB_AUTH_BASE_URI;
    const clientId = process.env.REACT_APP_YNAB_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_REDIRECT_URI;

    window.location.href = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token`;
  };

  return (
    <div>
      <Button text={"Login to YNAB"} onClick={handleLogin} />
    </div>
  );
});
