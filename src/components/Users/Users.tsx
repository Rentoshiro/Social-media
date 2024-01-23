import React, { useRef, FC } from "react";
import Pagination from "./Pagination";
import User from "./User.tsx";
import { userType } from "../../types/types";
import { useSelector, useDispatch } from "react-redux";
import { AppStateType } from "../../redux/redux-store.ts";

type UsersProps = {
  users: Array<userType>;
  setCurrentPage: () => void;
  toggleFollowing: Array<number>;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  searchByUserName: (newName: string) => void;
  foolowedUsers: (followed: boolean | null) => void;
};

const Users =
  // : FC<UsersProps>
  ({ setCurrentPage, follow, unfollow, searchByUserName, foolowedUsers }) => {
    const name = useRef<HTMLTextAreaElement>(null);
    const users = useSelector((state: AppStateType) => state.usersPage.users);
    const toggleFollowing = useSelector(
      (state: AppStateType) => state.usersPage.toggleFollowingInProgress
    );
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth);

    function handleUsers() {
      if (name.current) {
        searchByUserName(name.current.value);
      }
    }

    return (
      <div>
        <textarea ref={name}></textarea>
        <button onClick={handleUsers}>Find</button>

        <button onClick={() => foolowedUsers(null)}>All</button>
        <button onClick={() => foolowedUsers(true)}>Followed</button>
        <button onClick={() => foolowedUsers(false)}>Unfollowed</button>

        <Pagination setCurrentPage={setCurrentPage} />

        {users.map((user) => (
          <User
            key={user.id}
            user={{ ...user }}
            follow={follow}
            unfollow={unfollow}
            toggleFollowing={toggleFollowing}
            isAuth={isAuth}
          />
        ))}
      </div>
    );
  };

export default Users;
