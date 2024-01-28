import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStatus } from "../../../redux/profileReducer.ts";

function ProfileStatus({ status }) {
  const [editMode, setEditMode] = useState(false);
  const [editedStatus, setEditedStatus] = useState(status);
  const dispatch = useDispatch();

  function activateEditMode() {
    setEditMode(true);
  }

  function deactivateEditMode() {
    setEditMode(false);
    dispatch(updateStatus(editedStatus));
  }

  const onStatusChange = (e) => {
    setEditedStatus(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      deactivateEditMode();
    }
  };

  return (
    <div>
      {!editMode && (
        <div
          style={{
            backgroundColor: "rgba(169, 169, 169, 0.3)",
            padding: "10px",
            borderRadius: "20px",
            width: "500px",
          }}
        >
          <span onClick={activateEditMode}>{status || "No status yet"}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            style={{
              backgroundColor: "rgba(169, 169, 169, 0.3)",
              padding: "10px",
              borderRadius: "20px",
              width: "500px",
            }}
            value={editedStatus}
            onKeyDown={handleKeyDown}
            onBlur={deactivateEditMode}
            onChange={onStatusChange}
            autoFocus={true}
          />
        </div>
      )}
    </div>
  );
}

export default ProfileStatus;
