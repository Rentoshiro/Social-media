import React from "react";
//@ts-ignore
import classes from "../../components/Profile/Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer.tsx";
import { useDispatch, useSelector } from "react-redux";
import ProfileInfo from "./ProfileInfo/ProfileInfo.tsx";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { AppStateType } from "../../redux/redux-store.ts";
import { showProfile, getStatus } from "../../redux/profileReducer.ts";

function Profile() {
  const { userId } = useParams();
  const userProfile = useSelector((state: AppStateType) => state.auth.userId);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showProfile(userId || userProfile));
    dispatch(getStatus(userId || userProfile));
  }, [userId, userProfile]);

  return (
    <div className={classes.content}>
      <ProfileInfo isOwner={!userId}></ProfileInfo>
      <MyPostsContainer></MyPostsContainer>
    </div>
  );
}

export default Profile;
