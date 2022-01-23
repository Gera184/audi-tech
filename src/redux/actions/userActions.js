import { userActions } from "../reducers/userReducer";

export const userDeatils = (userDeatils) => {
  return (dispatch) => {
    dispatch(userActions.user(userDeatils));
  };
};

export const initialUser = (dispatch) => {
  dispatch(userActions.initialUser());
};
