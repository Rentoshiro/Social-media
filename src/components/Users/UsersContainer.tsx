import { connect } from "react-redux";
import UsersAPIComponent from "./UsersAPIComponent.tsx";
import {
  follow,
  unfollow,
  setUsersActionCreator,
  setCurentPageActionCreator,
  setTotalUsersCount,
  getUsersThunkCreator,
  searchByUserName,
  foolowedUsers,
} from "../../redux/usersReducers.ts";
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getToggleFolowing,
  getUserName,
  getIsAuth,
  getFollowed,
} from "../../redux/usersSelectors.ts";

import { AppStateType } from "../../redux/redux-store.ts";
import { userType } from "../../types/types.ts";

type mapStateToPropsType = {
  users: Array<userType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  toggleFolowing: Array<number>;
  userName: string;
};

type mapDispatchPropsType = {
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  getUsers: (currentPage: number, pageSize: number) => void;
  changeUserName: (newName: string) => void;
  setTotalUsers: () => void;
  setUsers: () => void;
  setCurrentPage: () => void;
};

const mapStateToProps = (state: AppStateType) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    toggleFolowing: getToggleFolowing(state),
    userName: getUserName(state),
    isAuth: getIsAuth(state),
    friends: getFollowed(state),
  };
};

export default connect(mapStateToProps, {
  follow: follow,
  unfollow: unfollow,
  getUsers: getUsersThunkCreator,
  searchByUserName: searchByUserName,
  setTotalUsers: setTotalUsersCount,
  setUsers: setUsersActionCreator,
  setCurrentPage: setCurentPageActionCreator,
  foolowedUsers: foolowedUsers,
})(UsersAPIComponent);
