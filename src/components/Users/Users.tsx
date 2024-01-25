import React, { useRef, FC } from "react";
import Pagination from "./Pagination";
import User from "./User.tsx";
import { userType } from "../../types/types";
import { useSelector, useDispatch } from "react-redux";
import { AppStateType } from "../../redux/redux-store.ts";
import { searchByUserName, foolowedUsers } from "../../redux/usersReducers.ts";

const Users = ({ page }) => {
  const name = useRef<HTMLTextAreaElement>(null);
  const users = useSelector((state: AppStateType) => state.usersPage.users);
  const toggleFollowing = useSelector(
    (state: AppStateType) => state.usersPage.toggleFollowingInProgress
  );
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth);

  const dispatch = useDispatch();

  function handleUsers() {
    if (name.current) {
      dispatch(searchByUserName(name.current.value));
    }
  }

  return (
    <div>
      <textarea ref={name}></textarea>
      <button onClick={handleUsers}>Find</button>

      <button onClick={() => dispatch(foolowedUsers(null))}>All</button>
      <button onClick={() => dispatch(foolowedUsers(true))}>Followed</button>
      <button onClick={() => dispatch(foolowedUsers(false))}>Unfollowed</button>

      <Pagination page={page} />

      {users.map((user) => (
        <User
          key={user.id}
          user={{ ...user }}
          isAuth={isAuth}
          toggleFollowing={toggleFollowing}
        />
      ))}
    </div>
  );
};

export default Users;
