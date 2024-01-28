import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { showProfile, getStatus } from "../../redux/profileReducer.ts";

function Profile() {
  const { userId } = useParams();
  const userProfile = useSelector((state) => state.auth.userId);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showProfile(userId || userProfile));
    dispatch(getStatus(userId || userProfile));
  }, [userId, userProfile]);

  return (
    <div
      style={{
        border: "13px solid white",
      }}
    >
      <ProfileInfo isOwner={!userId}></ProfileInfo>
    </div>
  );
}

export default Profile;
