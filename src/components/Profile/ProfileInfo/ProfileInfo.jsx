import React, { useRef, useState } from "react";
import backgroung from "../../../images/backgroungjpn.jpg";
import ProfileStatus from "./ProfileStatus";
import ProfileData from "./ProfileData";
import ProfileDataForm from "./ProfileDataForm";
import { useDispatch, useSelector } from "react-redux";
import { updateImage } from "../../../redux/profileReducer.ts";
import MyPostsContainer from "../MyPosts/MyPostsContainer.jsx";
import icon from "../../../images/icon.jpeg";

function ProfileInfo({ isOwner }) {
  const fileInputRef = useRef(null);
  const [editMode, setEditMode] = useState(false);

  const profile = useSelector((state) => state.profilePage.profile);
  const status = useSelector((state) => state.profilePage.status);

  const dispatch = useDispatch();

  if (!profile) {
    return <div></div>;
  }

  function handleImageChange() {
    if (fileInputRef.current && fileInputRef.current.files?.length) {
      const selectedImage = fileInputRef.current.files[0];
      const formData = new FormData();
      formData.append("image", selectedImage);

      if (formData) {
        dispatch(updateImage(formData));
      }
    }
  }

  function activateEditMode() {
    setEditMode(true);
  }

  function deactivateEditMode() {
    setEditMode(false);
  }

  return (
    <div style={{ overflowX: "hidden" }}>
      <div>
        <img
          alt="background"
          src={backgroung}
          style={{ width: "100%", height: "300px" }}
        />
      </div>
      <div style={{ padding: "10px" }}>
        <div
          style={{
            position: "relative",
            top: "-100px",
            borderRadius: "50%",
            overflow: "hidden",
            border: "5px solid white",
            width: "200px",
            height: "200px",
          }}
        >
          <img
            src={profile.photos.large ? profile.photos.large : icon}
            alt="profile"
            style={{ width: "100%", height: "auto", borderRadius: "50%" }}
          />
        </div>
        {isOwner && (
          <input
            style={{ position: "relative", top: "-100px" }}
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
          />
        )}

        <div
          style={{
            marginTop: "10px",
            position: "relative",
            top: "-240px",
            left: "400px",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "20px",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              Status
            </p>
            <ProfileStatus status={status} />
          </div>
        </div>
        <div style={{ display: "flex", position: "relative", top: "-200px" }}>
          <div>
            {!editMode ? (
              <ProfileData
                profile={profile}
                activateEditMode={activateEditMode}
                isOwner={isOwner}
              />
            ) : (
              <ProfileDataForm
                profile={profile}
                deactivateEditMode={deactivateEditMode}
              />
            )}
          </div>
          <div
            style={{
              position: "relative",
              top: "35px",
              marginLeft: "100px",
            }}
          >
            <MyPostsContainer></MyPostsContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
