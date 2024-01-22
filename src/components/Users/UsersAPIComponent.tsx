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
  getUsers: (currentPage: number, pageSize: number, userName: string) => void;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  toggleFolowing: any;
  changeUserName: (newName: string) => void;
  userName: string;
};

const UsersAPIComponent: FC<UsersAPIComponentProps> = (props) => {
  useEffect(() => {
    props.getUsers(props.currentPage, props.pageSize, props.userName);
  }, [props.currentPage, props.userName]);
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
        changeUserName={props.changeUserName}
        isAuth={props.isAuth}
      />
    </>
  );
};

export default UsersAPIComponent;
