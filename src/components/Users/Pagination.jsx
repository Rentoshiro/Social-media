import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination({
  totalUsersCount,
  pageSize,
  currentPage,
  setCurrentPage,
  changeUserName,
}) {
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
