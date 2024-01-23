import React, { useRef, FC } from "react";
import Pagination from "./Pagination";
import User from "./User.tsx";
import { userType } from "../../types/types";

type UsersProps = {
  isAuth: boolean;
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  users: Array<userType>;
  setCurrentPage: () => void;
  toggleFollowing: Array<number>;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  searchByUserName: (newName: string) => void;
  foolowedUsers: (followed: boolean | null) => void;
};

const Users: FC<UsersProps> = ({
  totalUsersCount,
  pageSize,
  currentPage,
  setCurrentPage,
  users,
  toggleFollowing,
  follow,
  unfollow,
  searchByUserName,
  isAuth,
  foolowedUsers,
}) => {
  const name = useRef<HTMLTextAreaElement>(null);

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

      <Pagination
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

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
