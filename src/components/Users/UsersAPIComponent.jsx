import React, { useEffect } from "react";
import Users from "./Users.jsx";
import { useSelector, useDispatch } from "react-redux";
import { getUsersThunkCreator } from "../../redux/usersReducers.ts";
import { useLocation, useSearchParams } from "react-router-dom";

const UsersAPIComponent = () => {
  const currentPage = useSelector((state) => state.usersPage.currentPage);

  const pageSize = useSelector((state) => state.usersPage.pageSize);

  const userName = useSelector((state) => state.usersPage.userName);

  const friends = useSelector((state) => state.usersPage.friends);

  const isFetching = useSelector((state) => state.usersPage.isFetching);

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
