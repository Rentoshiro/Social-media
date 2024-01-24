import React from "react";
// @ts-ignore
import classes from "./user.module.css";
import { NavLink } from "react-router-dom";
import { userType } from "../../types/types.ts";
import { useSelector, useDispatch } from "react-redux";
import { follow, unfollow } from "../../redux/usersReducers.ts";

type UserProps = {
  user: userType;
  toggleFollowing: Array<number>;
  isAuth: boolean;
};

const User =
  // : React.FC<UserProps>
  ({ user, toggleFollowing, isAuth }) => {
    const dispatch = useDispatch();

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
                      disabled={toggleFollowing.some(
                        (id: number) => id === user.id
                      )}
                      onClick={() => {
                        dispatch(unfollow(user.id));
                      }}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      disabled={toggleFollowing.some(
                        (id: number) => id === user.id
                      )}
                      onClick={() => {
                        dispatch(follow(user.id));
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
