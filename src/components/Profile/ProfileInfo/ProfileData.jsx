import React from "react";
import Contacts from "./Contacts";
import { Button } from "@mui/material";

const profileDataStyle = {
  border: "1px solid #ddd",
  padding: "10px",
  borderRadius: "8px",
  marginBottom: "10px",
  width: "500px",
};

function ProfileData({ profile, activateEditMode, isOwner }) {
  return (
    <div>
      {isOwner && (
        <Button
          style={{ left: "250px", top: "-78px" }}
          variant="contained"
          onClick={activateEditMode}
        >
          Edit Profile
        </Button>
      )}

      <div style={profileDataStyle}>Profile Information</div>

      <div style={profileDataStyle}>
        <div>
          <span style={{ fontWeight: "bold" }}>Name: </span> {profile.fullName}
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>Looking for a job: </span>
          {profile.lookingForAJob ? "Yes" : "No"}
        </div>
        {profile.lookingForAJob && (
          <div>
            <span style={{ fontWeight: "bold" }}>My professional skills: </span>
            {profile.lookingForAJobDescription}
          </div>
        )}
        <div>
          <span style={{ fontWeight: "bold" }}>About me: </span>
          {profile.aboutMe}
        </div>
        <div>
          <p
            style={{
              fontSize: "20px",
            }}
          >
            Contacts:
          </p>
          {Object.keys(profile.contacts).map((key) => (
            <Contacts
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileData;
