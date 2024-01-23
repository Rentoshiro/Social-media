import React, { FC, useEffect } from "react";
import Users from "./Users.tsx";
import { userType } from "../../types/types.ts";

type UsersAPIComponentProps = {
  isAuth: boolean;
  isFetching: boolean;
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  setCurrentPage: any;
  users: Array<userType>;
  getUsers: (
    currentPage: number,
    pageSize: number,
    userName: string,
    followed: boolean
  ) => void;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  toggleFolowing: any;
  searchByUserName: (newName: string) => void;
  foolowedUsers: (friends: boolean | null) => void;
  userName: string;
  friends: boolean;
};

const UsersAPIComponent: FC<UsersAPIComponentProps> = (props) => {
  useEffect(() => {
    props.getUsers(
      props.currentPage,
      props.pageSize,
      props.userName,
      props.friends
    );
  }, [props.currentPage, props.userName, props.friends]);
  return (
    <>
      {props.isFetching ? "" : "Is fetching"}
      <Users
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        setCurrentPage={props.setCurrentPage}
        users={props.users}
        follow={props.follow}
        unfollow={props.unfollow}
        toggleFollowing={props.toggleFolowing}
        searchByUserName={props.searchByUserName}
        isAuth={props.isAuth}
        foolowedUsers={props.foolowedUsers}
      />
    </>
  );
};

export default UsersAPIComponent;
