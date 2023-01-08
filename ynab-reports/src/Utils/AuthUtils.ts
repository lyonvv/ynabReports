export const getHashParams = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce(function (initial: { [key: string]: any }, item) {
      if (item) {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});
};

export const removeHashParamsFromUrl = () => {
  window.history.pushState(
    "",
    document.title,
    window.location.pathname + window.location.search
  );
};

const AUTH_TOKEN_STORAGE_KEY = "AUTH_TOKEN_STORAGE_KEY";
const AUTH_TOKEN_URL_PARAM = "access_token";
//const EXPIRES_IN_URL_PARAM = "expires_in";

export const readUrlParamsAndSetAuthTokenToStorage = () => {
  const params = getHashParams();
  removeHashParamsFromUrl();

  if (AUTH_TOKEN_URL_PARAM in params) {
    setAuthTokenToStorage(params[AUTH_TOKEN_URL_PARAM]);
  }
};

export const setAuthTokenToStorage = (authToken: string) => {
  window.localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, authToken);
};

export const clearAuthTokenFromStorage = () => {
  window.localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
};

export const getAuthToken = () => {
  return window.localStorage.getItem(AUTH_TOKEN_STORAGE_KEY);
};
