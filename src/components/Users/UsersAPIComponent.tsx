import React, { FC, useEffect } from "react";
import Users from "./Users.tsx";
import { userType } from "../../types/types.ts";
import { useSelector } from "react-redux";
import { AppStateType } from "../../redux/redux-store.ts";

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
  // follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  toggleFolowing: any;
  searchByUserName: (newName: string) => void;
  foolowedUsers: (friends: boolean | null) => void;
  userName: string;
  friends: boolean;
};

const UsersAPIComponent =
  // : FC<UsersAPIComponentProps>
  (props) => {
    const currentPage = useSelector(
      (state: AppStateType) => state.usersPage.currentPage
    );

    const pageSize = useSelector(
      (state: AppStateType) => state.usersPage.pageSize
    );

    const userName = useSelector(
      (state: AppStateType) => state.usersPage.userName
    );

    const friends = useSelector(
      (state: AppStateType) => state.usersPage.friends
    );

    const isFetching = useSelector(
      (state: AppStateType) => state.usersPage.isFetching
    );

    useEffect(() => {
      props.getUsers(currentPage, pageSize, userName, friends);
    }, [currentPage, userName, friends]);

    return (
      <>
        {isFetching ? "" : "Is fetching"}
        <Users
          setCurrentPage={props.setCurrentPage}
          follow={props.follow}
          unfollow={props.unfollow}
          searchByUserName={props.searchByUserName}
          foolowedUsers={props.foolowedUsers}
        />
      </>
    );
  };

export default UsersAPIComponent;
