import { loginUser } from "./authReducer.ts";
import { InferActionsTypes } from "../redux/redux-store.ts";

const SET_INITIALIZED = "SET_INITIALIZED";

const initialState = {
  initialized: false,
};

// export type initialStateType = {
//   initialized: boolean;
// };

export type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;

const appReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

// export type setInitializedSuccessActionType = {
//   type: typeof SET_INITIALIZED;
// };

export const actions = {
  setInitializedSuccess: () => ({ type: SET_INITIALIZED }),
};

// export const setInitializedSuccess = (): setInitializedSuccessActionType => {
//   return { type: SET_INITIALIZED };
// };

export const initializedApp = () => async (dispatch: any) => {
  try {
    await dispatch(loginUser());
    dispatch(actions.setInitializedSuccess());
  } catch (error) {
    console.error("Error during app initialization:", error);
  }
};

export default appReducer;
