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
  changeUserName: (newName: string) => void;
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
  changeUserName,
  isAuth,
}) => {
  const name = useRef<HTMLTextAreaElement>(null);

  function handleUsers() {
    if (name.current) {
      changeUserName(name.current.value);
    }
  }

  return (
    <div>
      <textarea ref={name}></textarea>
      <button onClick={handleUsers}>Users</button>

      <Pagination
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        changeUserName={changeUserName}
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
