import { database } from "../api/database";
import { LOGIN_USER, LOGOUT_USER } from "../types";

let refreshTokenTimeoutId = null;

export const loginUser = (loginForm) => {
  const { token } = database;
  if (
    loginForm.username === token.user.email &&
    loginForm.password === token.user.password
  ) {
    return {
      type: LOGIN_USER,
      payload: { user: token.user },
    };
  } else {
    return {
      type: LOGIN_USER,
      payload: { user: null },
    };
  }
};

export const logoutUser = () => {
  abortRefreshToken();
  return {
    type: LOGOUT_USER,
  };
};

export const abortRefreshToken = () => {
  if (refreshTokenTimeoutId) window.clearTimeout(refreshTokenTimeoutId);
};

export const setRefreshTokenTimeout = (delay) => (dispatch) => {
  refreshTokenTimeoutId = window.setTimeout(() => {
    dispatch(logoutUser());
  }, delay * 1000);
};
