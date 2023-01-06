import { readUrlParamsAndSetAuthTokenToStorage } from "../utils/authUtils";
import { redirect, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const LoginRedirectPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    readUrlParamsAndSetAuthTokenToStorage();
    navigate("/");
  });

  return <div>SOMETHING WENT WRONG LOGGING YOU IN</div>;
};
