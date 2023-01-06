import { readUrlParamsAndSetAuthTokenToStorage } from "../utils/authUtils";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { observer } from "mobx-react";

export const LoginRedirectPage = observer(() => {
  const navigate = useNavigate();

  useEffect(() => {
    readUrlParamsAndSetAuthTokenToStorage();
    navigate("/");
  });

  return <div>SOMETHING WENT WRONG LOGGING YOU IN</div>;
});
