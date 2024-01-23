import React from "react";
// @ts-ignore
import classes from "./user.module.css";
import { NavLink } from "react-router-dom";
import { userType } from "../../types/types";
import { useSelector } from "react-redux";

type UserProps = {
  user: userType;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  toggleFollowing: Array<number>;
  isAuth: boolean;
};

const User: React.FC<UserProps> = ({
  user,
  follow,
  unfollow,
  toggleFollowing,
  isAuth,
}) => {
  return (
    <>
      {user && (
        <div>
          <span>
            <div>
              <NavLink to={`/profile/${user.id}`}>
                <img
                  src={
                    user && user.photos && user.photos.small
                      ? user.photos.small
                      : "https://i.pinimg.com/originals/87/99/c2/8799c23bb7a1629ef923bfb52faf6d56.jpg"
                  }
                  className={classes.userPhoto}
                />
              </NavLink>
            </div>
            <span>
              <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
              </span>
            </span>
            {isAuth && (
              <div>
                {user.followed ? (
                  <button
                    disabled={toggleFollowing.some((id) => id === user.id)}
                    onClick={() => {
                      unfollow(user.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={toggleFollowing.some((id) => id === user.id)}
                    onClick={() => {
                      follow(user.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            )}
          </span>
        </div>
      )}
    </>
  );
};

export default User;
