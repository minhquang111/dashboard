import { database } from "../api/database";
import { LOGIN_USER, LOGOUT_USER } from "../types";

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
  return {
    type: LOGOUT_USER,
  };
};
