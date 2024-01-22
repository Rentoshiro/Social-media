import Contacts from "./Contacts.tsx";
import { useState, useEffect } from "react";

function ProfileDataForm({ profile, deactivateEditMode, saveProfile }) {
  const [formValues, setFormValues] = useState({
    fullName: "",
    lookingForAJob: "",
    lookingForAJobDescription: "",
    aboutMe: "",
    contacts: {
      facebook: "",
      website: "",
      vk: "",
      twitter: "t",
      instagram: "",
      youtube: "",
      github: "",
      mainLink: "",
    },
  });

  useEffect(() => {
    setFormValues({
      fullName: profile.fullName,
      lookingForAJob: profile.lookingForAJob,
      lookingForAJobDescription: profile.lookingForAJobDescription,
      aboutMe: profile.aboutMe,
      contacts: { ...profile.contacts },
    });
  }, [profile]);

  function handleValues(identifier, value) {
    setFormValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
      contacts: {
        ...prevValues.contacts,
        [identifier]: value,
      },
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    saveProfile(formValues);
    deactivateEditMode();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button onClick={handleSubmit}>Save Changes</button>
        <div>Name: {profile.fullName}</div>
        <input
          id="fullName"
          name="fullName"
          placeholder="Full Name"
          value={formValues.fullName}
          onChange={(event) => handleValues("fullName", event.target.value)}
        ></input>
        <div>
          Looking for a job:
          <input
            id="checkbox"
            type="checkbox"
            checked={formValues.lookingForAJob}
            onChange={(event) =>
              handleValues("lookingForAJob", event.target.checked)
            }
          />
        </div>
        <div>My professional skills: {profile.lookingForAJobDescription}</div>
        <textarea
          id="lookingForAJobDescription"
          placeholder="My professional skills"
          onChange={(event) =>
            handleValues("lookingForAJobDescription", event.target.value)
          }
          value={formValues.lookingForAJobDescription}
        ></textarea>
        <div>About me: {profile.aboutMe}</div>
        <textarea
          id="aboutMe"
          placeholder="About me"
          onChange={(event) => handleValues("aboutMe", event.target.value)}
          value={formValues.aboutMe}
        ></textarea>
      </div>
      <div>
        Contacts:
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key}>
              <Contacts contactTitle={key} />
              <input
                id={key}
                placeholder={key}
                value={formValues.contacts[key]}
                onChange={(event) => handleValues(key, event.target.value)}
              />
            </div>
          );
        })}
      </div>
    </form>
  );
}

export default ProfileDataForm;
