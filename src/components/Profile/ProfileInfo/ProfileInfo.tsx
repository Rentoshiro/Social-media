import React, { useRef, useState } from "react";
//@ts-ignore
import backgroung from "../../../images/background.jpg";
//@ts-ignore

import classes from "../ProfileInfo/ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus.tsx";
import ProfileData from "./ProfileData.tsx";
import ProfileDataForm from "./ProfileDataForm.jsx";
import { profileType } from "../../../types/types";

interface ProfileInfoProps {
  profile: profileType;
  status: string;
  updateStatus: (status: string) => void;
  updateImage: (formData: FormData) => void;
  isOwner: boolean;
  saveProfile: (profile: profileType) => void;
}

function ProfileInfo({
  profile,
  status,
  updateStatus,
  updateImage,
  isOwner,
  saveProfile,
}: ProfileInfoProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <div></div>;
  }

  function handleImageChange() {
    if (fileInputRef.current && fileInputRef.current.files?.length) {
      const selectedImage = fileInputRef.current.files[0];
      const formData = new FormData();
      formData.append("image", selectedImage);

      if (formData) {
        updateImage(formData);
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
    <div>
      <div>
        <img src={backgroung} alt="background" />
      </div>
      <div className={classes.descriptionBlock}>
        <img
          src={
            profile.photos.large
              ? profile.photos.large
              : "https://i.pinimg.com/originals/87/99/c2/8799c23bb7a1629ef923bfb52faf6d56.jpg "
          }
          alt="profile"
        />
        {isOwner && (
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
          />
        )}
        <div>
          {!editMode ? (
            <ProfileData
              profile={profile}
              activateEditMode={activateEditMode}
            />
          ) : (
            <ProfileDataForm
              profile={profile}
              deactivateEditMode={deactivateEditMode}
              saveProfile={saveProfile}
            />
          )}
        </div>
      </div>
      <ProfileStatus status={status} updateStatus={updateStatus} />
    </div>
  );
}

export default ProfileInfo;
