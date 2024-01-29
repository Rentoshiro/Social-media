import React from "react";
import classes from "./Users.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { follow, unfollow } from "../../redux/usersReducers.ts";
import icon from "../../images/icon.jpeg";
import Button from "@mui/material/Button";

const User = ({ user, toggleFollowing, isAuth }) => {
  const dispatch = useDispatch();

  return (
    <>
      {user && (
        <div className={classes.userCard}>
          <NavLink to={`/profile/${user.id}`}>
            <img
              src={
                user && user.photos && user.photos.small
                  ? user.photos.small
                  : icon
              }
              className={classes.roundUserPhoto}
              alt={user.name}
            />
          </NavLink>
          <div className={classes.userInfo}>
            <div className={classes.userName}>{user.name}</div>
            <div className={classes.userStatus}>{user.status}</div>
          </div>
          {isAuth && (
            <div className={classes.userActions}>
              {user.followed ? (
                <Button
                  variant="outlined"
                  disabled={toggleFollowing.some((id) => id === user.id)}
                  onClick={() => {
                    dispatch(unfollow(user.id));
                  }}
                >
                  Unfollow
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  disabled={toggleFollowing.some((id) => id === user.id)}
                  onClick={() => {
                    dispatch(follow(user.id));
                  }}
                >
                  Follow
                </Button>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default User;
