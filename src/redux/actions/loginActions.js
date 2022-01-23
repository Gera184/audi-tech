import { loginActions } from "../reducers/loginReducer";

export const login = (dispatch) => {
  dispatch(loginActions.loggedIn());
};

export const logout = (dispatch) => {
  dispatch(loginActions.logout());
};
