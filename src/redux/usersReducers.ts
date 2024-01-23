import { Dispatch } from "redux";
import { usersAPI } from "../api/user-api.ts";
import { userType } from "../types/types.ts";
import { AppStateType, BaseThunkType } from "./redux-store.ts";
import { ThunkAction } from "redux-thunk";

let initialState = {
  users: [] as Array<userType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  toggleFollowingInProgress: [] as Array<number>,
  userName: "",
  friends: null as boolean | null,
};

type InitialStateType = typeof initialState;

const usersReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };

    case "UNFOLLOW":
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };

    case "SET_USERS": {
      return { ...state, users: action.users };
    }

    case "SET_CURRENT_PAGE": {
      return { ...state, currentPage: action.currentPage };
    }

    case "SET_TOTAL_USERS_COUNT": {
      return { ...state, totalUsersCount: action.totalCount };
    }
    case "TOOGLE_IS_FETCHING": {
      return { ...state, isFetching: action.isFetching };
    }

    case "TOOGLE_IS_FOLLOWING_PROGRESS": {
      return {
        ...state,
        toggleFollowingInProgress: action.toggleFollowingInProgress
          ? [...state.toggleFollowingInProgress, action.userId]
          : state.toggleFollowingInProgress.filter(
              (id) => id !== action.userId
            ),
      };
    }

    case "SEARCH_BY_USER_NAME": {
      return { ...state, userName: action.userName };
    }

    case "FOLLOWED_USERS": {
      return { ...state, friends: action.friends };
    }

    default:
      return state;
  }
};

type ActionTypes =
  | ReturnType<typeof foolowedUsers>
  | ReturnType<typeof followActionCreator>
  | ReturnType<typeof unfollowActionCreator>
  | ReturnType<typeof setUsersActionCreator>
  | ReturnType<typeof setCurentPageActionCreator>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof setToogleIsFetchingActionCreator>
  | ReturnType<typeof setToggleIsFollowingProgress>
  | ReturnType<typeof searchByUserName>;

export const foolowedUsers = (friends: boolean | null) =>
  ({
    type: "FOLLOWED_USERS",
    friends,
  } as const);

export const searchByUserName = (userName: string) =>
  ({
    type: "SEARCH_BY_USER_NAME",
    userName,
  } as const);

export const followActionCreator = (userId: number) =>
  ({
    type: "FOLLOW",
    userId,
  } as const);

export const unfollowActionCreator = (userId: number) =>
  ({
    type: "UNFOLLOW",
    userId,
  } as const);

export const setUsersActionCreator = (users: Array<userType>) =>
  ({
    type: "SET_USERS",
    users,
  } as const);

export const setCurentPageActionCreator = (currentPage: number) =>
  ({
    type: "SET_CURRENT_PAGE",
    currentPage,
  } as const);

export const setTotalUsersCount = (totalCount: number) =>
  ({
    type: "SET_TOTAL_USERS_COUNT",
    totalCount,
  } as const);

export const setToogleIsFetchingActionCreator = (isFetching: boolean) =>
  ({
    type: "TOOGLE_IS_FETCHING",
    isFetching,
  } as const);

export const setToggleIsFollowingProgress = (
  toggleFollowingInProgress: boolean,
  userId: number
) =>
  ({
    type: "TOOGLE_IS_FOLLOWING_PROGRESS",
    toggleFollowingInProgress,
    userId,
  } as const);

// type GetStateType = () => AppStateType;
// type DispatchType = Dispatch<ActionTypes>;

type thunkType = BaseThunkType<ActionTypes>;

export const getUsersThunkCreator =
  (
    currentPage: number,
    pageSize: number,
    userName: string,
    friends: boolean
  ): thunkType =>
  async (dispatch, getState) => {
    try {
      const response = await usersAPI.getUsers(
        currentPage,
        pageSize,
        userName,
        friends
      );
      dispatch(setUsersActionCreator(response.data.items));
      dispatch(setTotalUsersCount(response.data.totalCount));
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      dispatch(setToogleIsFetchingActionCreator(true));
    }
  };

export const follow =
  (userId: number): thunkType =>
  async (dispatch, getState) => {
    try {
      dispatch(setToggleIsFollowingProgress(true, userId));
      const response = await usersAPI.follow(userId);
      dispatch(followActionCreator(userId));
      dispatch(setToggleIsFollowingProgress(false, userId));
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

export const unfollow =
  (userId: number): thunkType =>
  async (dispatch) => {
    try {
      dispatch(setToggleIsFollowingProgress(true, userId));
      const response = await usersAPI.unfollow(userId);
      dispatch(unfollowActionCreator(userId));
      dispatch(setToggleIsFollowingProgress(false, userId));
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

export default usersReducer;
