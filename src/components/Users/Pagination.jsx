import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurentPageActionCreator } from "../../redux/usersReducers.ts";
import { useLocation } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination() {
  const totalUsersCount = useSelector(
    (state) => state.usersPage.totalUsersCount
  );
  const currentPage = useSelector((state) => state.usersPage.currentPage);
  const pageSize = useSelector((state) => state.usersPage.pageSize);

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const page = parseInt(searchParams.get("page"), 10) || 1;
    dispatch(setCurentPageActionCreator(page));
  }, [location.search, dispatch]);

  const pagesCount = Math.ceil(totalUsersCount / pageSize);

  const handleChangePage = (event, value) => {
    dispatch(setCurentPageActionCreator(value));
  };

  return (
    <div>
      <Stack spacing={2}>
        <Pagination
          onChange={handleChangePage}
          count={pagesCount}
          page={currentPage}
          variant="outlined"
          color="primary"
        />
      </Stack>
    </div>
  );
}
