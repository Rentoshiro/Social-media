import React, { useRef, FC } from "react";
import Pagination from "./Pagination.jsx";
import User from "./User.jsx";
import { useSelector, useDispatch } from "react-redux";
import { searchByUserName, foolowedUsers } from "../../redux/usersReducers.ts";

const Users = ({ page }) => {
  const name = useRef(null);
  const users = useSelector((state) => state.usersPage.users);
  const toggleFollowing = useSelector(
    (state) => state.usersPage.toggleFollowingInProgress
  );
  const isAuth = useSelector((state) => state.auth.isAuth);

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
