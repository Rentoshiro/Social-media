import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";

export default function BasicPagination({ setCurrentPage }) {
  const totalUsersCount = useSelector(
    (state) => state.usersPage.totalUsersCount
  );
  const currentPage = useSelector((state) => state.usersPage.currentPage);
  const pageSize = useSelector((state) => state.usersPage.pageSize);

  const pagesCount = Math.ceil(totalUsersCount / pageSize);

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
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
