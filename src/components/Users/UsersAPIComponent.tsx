import React, { FC, useEffect } from "react";
import Users from "./Users.tsx";
import { userType } from "../../types/types.ts";
import { AppStateType } from "../../redux/redux-store.ts";
import { useSelector, useDispatch } from "react-redux";
import { getUsersThunkCreator } from "../../redux/usersReducers.ts";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

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
  unfollow: (userId: number) => void;
  toggleFolowing: any;
  searchByUserName: (newName: string) => void;
  foolowedUsers: (friends: boolean | null) => void;
  userName: string;
  friends: boolean | null;
};

const UsersAPIComponent: FC<UsersAPIComponentProps> = () => {
  const currentPage = useSelector(
    (state: AppStateType) => state.usersPage.currentPage
  );

  const pageSize = useSelector(
    (state: AppStateType) => state.usersPage.pageSize
  );

  const userName = useSelector(
    (state: AppStateType) => state.usersPage.userName
  );

  const friends = useSelector((state: AppStateType) => state.usersPage.friends);

  const isFetching = useSelector(
    (state: AppStateType) => state.usersPage.isFetching
  );

  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams(location.search);
  let parsed = Object.fromEntries([...searchParams]);

  useEffect(() => {
    dispatch(getUsersThunkCreator(parsed.page, pageSize, userName, friends));
  }, [parsed.page, userName, friends]);

  useEffect(() => {
    setSearchParams(`?&page=${currentPage}`);
  }, [currentPage, friends]);

  return (
    <>
      {isFetching ? "" : "Is fetching"}
      <Users page={parsed.page} />
    </>
  );
};

export default UsersAPIComponent;
