import React from "react";
//@ts-ignore
import classes from "../../components/Profile/Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer.tsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.tsx";
import { useRef, useState } from "react";

function Profile(props) {
  return (
    <div className={classes.content}>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        updateImage={props.updateImage}
        isOwner={props.isOwner}
        saveProfile={props.saveProfile}
      ></ProfileInfo>
      <MyPostsContainer></MyPostsContainer>
    </div>
  );
}

export default Profile;
