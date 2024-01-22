import React from "react";
import Contacts from "./Contacts.tsx";

interface ProfileDataProps {
  profile: {
    fullName: string;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    aboutMe: string;
    contacts: { [key: string]: string };
  };
  activateEditMode: () => void;
}

function ProfileData({ profile, activateEditMode }: ProfileDataProps) {
  return (
    <div>
      <button onClick={activateEditMode}>Edit Profile</button>
      <div>Name: {profile.fullName}</div>
      <div>Looking for a job: {profile.lookingForAJob ? "Yes" : "No"} </div>
      {profile.lookingForAJob && (
        <div>My professional skills: {profile.lookingForAJobDescription}</div>
      )}
      <div>About me: {profile.aboutMe} </div>
      <div>
        Contacts:
        {Object.keys(profile.contacts).map((key) => (
          <Contacts
            key={key}
            contactTitle={key}
            contactValue={profile.contacts[key]}
          />
        ))}
      </div>
    </div>
  );
}

export default ProfileData;
