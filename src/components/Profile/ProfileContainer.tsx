import { connect } from "react-redux";
//@ts-ignore
import classes from "../../components/Profile/Profile.module.css";
import Profile from "./Profile.tsx";
import React, { useEffect } from "react";
import {
  actions,
  showProfile,
  getStatus,
  updateStatus,
  updateImage,
  saveProfile,
} from "../../redux/profileReducer.ts";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/AuthRedirect.tsx";
import { compose } from "redux";
import { AppStateType } from "../../redux/redux-store.ts";

function ProfileContainer(props) {
  const { userId } = useParams();

  useEffect(() => {
    props.showProfile(userId || props.userProfile);
    props.getStatus(userId || props.userProfile);
  }, [userId, props.userProfile]);

  return (
    <div className={classes.content}>
      <Profile {...props} isOwner={!userId}></Profile>
    </div>
  );
}

const mapStateToProps = (state: AppStateType) => {
  return {
    profile: state.profilePage.profile,
    userProfile: state.auth.userId,
    status: state.profilePage.status,
  };
};

export default compose(
  connect(mapStateToProps, {
    setUserProfile: actions.setUserProfile,
    saveProfile,
    updateImage,
    updateStatus,
    showProfile,
    getStatus,
  }),
  withAuthRedirect
)(ProfileContainer);
