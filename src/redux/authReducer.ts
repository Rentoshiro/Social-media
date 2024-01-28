import { securityAPI } from "../api/security-api";
import { authAPI } from "../api/auth-api";
import { BaseThunkType } from "./redux-store.ts";
import { InferActionsTypes } from "../redux/redux-store.ts";

const SET_USER_DATA = "SET_USER_DATA";
const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";
const GET_CAPTHA_URL = "GET_CAPTHA_URL";

export type initialStateType = typeof initialState;

type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsTypes>;

const initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
  errorMessage: null,
  capthaUrl: null,
};

const authReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    case SET_LOGIN_ERROR:
      return {
        ...state,
        errorMessage: action.message,
      };
    case GET_CAPTHA_URL:
      return {
        ...state,
        capthaUrl: action.url,
      };

    default:
      return state;
  }
};

export const actions = {
  setAuthUserData: (
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
  ) =>
    ({
      type: SET_USER_DATA,
      data: { userId, email, login, isAuth },
    } as const),
  getCapthaUrlSucces: (url: string | null) =>
    ({
      type: GET_CAPTHA_URL,
      url,
    } as const),
  showLoginError: (message: any) =>
    ({
      type: SET_LOGIN_ERROR,
      message,
    } as const),
};

export const loginUser = (): ThunkType => async (dispatch) => {
  const response = await authAPI.me();
  if (response.data.resultCode === 0) {
    dispatch(
      actions.setAuthUserData(
        response.data.data.id,
        response.data.data.email,
        response.data.data.login,
        true
      )
    );
  }
};

export const login =
  (
    email: string,
    password: string,
    rememberMe: boolean,
    captha: string
  ): ThunkType =>
  async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captha);
    if (response.data.resultCode === 0) {
      dispatch(actions.setAuthUserData());
      dispatch(actions.showLoginError(null));
      dispatch(actions.getCapthaUrlSucces(null));
    } else {
      if (response.data.resultCode === 10) {
        dispatch(getCapthaUrl());
      }
      const message =
        response.data.messages.length > 0
          ? response.data.messages
          : "Some error";
      dispatch(actions.showLoginError(message));
    }
  };

export const logout = (): ThunkType => async (dispatch) => {
  const response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(actions.setAuthUserData(null, null, null, false));
  }
};

export const getCapthaUrl = (): ThunkType => async (dispatch) => {
  const response = await securityAPI.security();
  dispatch(actions.getCapthaUrlSucces(response.data.url));
};

export default authReducer;
