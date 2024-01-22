import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
  Action,
} from "redux";
import { ThunkAction, thunk } from "redux-thunk";
import profileReducer from "./profileReducer.ts";
import dialogsReducer from "./dialogsReducer.ts";
import sidebarReducer from "./sidebarReducer.ts";
import usersReducer from "./usersReducers.ts";
import initializedApp from "./appReducer.ts";
import authReducer from "./authReducer.ts";

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesData: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  initializedApp,
});

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>;

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionsTypes<
  T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<PropertiesType<T>>;

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<
  R,
  AppStateType,
  unknown,
  A
>;

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
