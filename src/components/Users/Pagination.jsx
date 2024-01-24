import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useSelector, useDispatch } from "react-redux";
import { setCurentPageActionCreator } from "../../redux/usersReducers.ts";

export default function BasicPagination() {
  const totalUsersCount = useSelector(
    (state) => state.usersPage.totalUsersCount
  );
  const currentPage = useSelector((state) => state.usersPage.currentPage);
  const pageSize = useSelector((state) => state.usersPage.pageSize);

  const pagesCount = Math.ceil(totalUsersCount / pageSize);

  const dispatch = useDispatch();

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
