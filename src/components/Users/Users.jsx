import React, { useRef, FC } from "react";
import Pagination from "./Pagination.jsx";
import User from "./User.jsx";
import { useSelector, useDispatch } from "react-redux";
import { searchByUserName, foolowedUsers } from "../../redux/usersReducers.ts";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";

const Users = ({ page }) => {
  const name = useRef(null);
  const users = useSelector((state) => state.usersPage.users);
  const toggleFollowing = useSelector(
    (state) => state.usersPage.toggleFollowingInProgress
  );
  const isAuth = useSelector((state) => state.auth.isAuth);

  const dispatch = useDispatch();

  function handleUsers() {
    if (name.current) {
      dispatch(searchByUserName(name.current.value));
    }
  }

  return (
    <div style={{ height: "98vh" }}>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "30px" }}
      >
        <input
          ref={name}
          style={{
            backgroundColor: "rgba(169, 169, 169, 0.3)",
            padding: "8px",
            borderRadius: "10px",
            width: "500px",
            resize: "none",
            marginRight: "20px",
          }}
        ></input>
        <Button
          endIcon={<SearchSharpIcon />}
          onClick={handleUsers}
          style={{ marginRight: "30px" }}
        >
          Find
        </Button>

        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button onClick={() => dispatch(foolowedUsers(null))}>All</Button>
          <Button onClick={() => dispatch(foolowedUsers(true))}>
            Followed
          </Button>
          <Button onClick={() => dispatch(foolowedUsers(false))}>
            Unfollowed
          </Button>
        </ButtonGroup>
      </div>

      <Pagination page={page} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex" }}>
          {users.slice(0, 5).map((user) => (
            <User
              key={user.id}
              user={{ ...user }}
              isAuth={isAuth}
              toggleFollowing={toggleFollowing}
            />
          ))}
        </div>
        <div style={{ display: "flex" }}>
          {users.slice(5, 10).map((user) => (
            <User
              key={user.id}
              user={{ ...user }}
              isAuth={isAuth}
              toggleFollowing={toggleFollowing}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
