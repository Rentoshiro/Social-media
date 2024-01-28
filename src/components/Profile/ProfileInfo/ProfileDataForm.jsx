import Contacts from "./Contacts";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { saveProfile } from "../../../redux/profileReducer.ts";
import { Button } from "@mui/material";

function ProfileDataForm({ profile, deactivateEditMode }) {
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

  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(saveProfile(formValues));
    deactivateEditMode();
  }

  const profileDataStyle = {
    border: "1px solid #ddd",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "10px",
    width: "500px",
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={profileDataStyle}>
        <Button
          style={{ left: "230px", top: "-90px" }}
          variant="contained"
          onClick={handleSubmit}
        >
          Save Changes
        </Button>
        <div>
          {" "}
          <span style={{ fontWeight: "bold" }}>Name:</span> {profile.fullName}
        </div>
        <input
          id="fullName"
          name="fullName"
          placeholder="Full Name"
          value={formValues.fullName}
          onChange={(event) => handleValues("fullName", event.target.value)}
          style={{
            backgroundColor: "rgba(169, 169, 169, 0.3)",
            padding: "8px",
            borderRadius: "10px",
            width: "auto",
          }}
        ></input>
        <div>
          <span style={{ fontWeight: "bold" }}>Looking for a job:</span>
          <input
            id="checkbox"
            type="checkbox"
            checked={formValues.lookingForAJob}
            onChange={(event) =>
              handleValues("lookingForAJob", event.target.checked)
            }
          />
        </div>
        <div>
          {" "}
          <span style={{ fontWeight: "bold" }}>
            My professional skills:
          </span>{" "}
          {profile.lookingForAJobDescription}
        </div>
        <textarea
          id="lookingForAJobDescription"
          placeholder="My professional skills"
          onChange={(event) =>
            handleValues("lookingForAJobDescription", event.target.value)
          }
          value={formValues.lookingForAJobDescription}
          style={{
            backgroundColor: "rgba(169, 169, 169, 0.3)",
            padding: "8px",
            borderRadius: "10px",
            width: "auto",
            resize: "none",
          }}
        ></textarea>
        <div>
          {" "}
          <span style={{ fontWeight: "bold" }}>About me: </span>{" "}
          {profile.aboutMe}
        </div>
        <textarea
          id="aboutMe"
          placeholder="About me"
          onChange={(event) => handleValues("aboutMe", event.target.value)}
          value={formValues.aboutMe}
          style={{
            backgroundColor: "rgba(169, 169, 169, 0.3)",
            padding: "8px",
            borderRadius: "10px",
            width: "auto",
            resize: "none",
          }}
        ></textarea>
      </div>
      <div style={profileDataStyle}>
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
                style={{
                  backgroundColor: "rgba(169, 169, 169, 0.3)",
                  padding: "8px",
                  borderRadius: "10px",
                  width: "auto",
                }}
              />
            </div>
          );
        })}
      </div>
    </form>
  );
}

export default ProfileDataForm;
