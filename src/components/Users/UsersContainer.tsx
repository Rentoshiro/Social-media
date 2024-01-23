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

const mapStateToProps = () => {
  return {};
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
