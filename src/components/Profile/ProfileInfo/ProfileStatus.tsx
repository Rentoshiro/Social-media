import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStatus } from "../../../redux/profileReducer.ts";

type ProfileStatusProps = {
  status: string;
  // updateStatus: (status: string) => void;
};

function ProfileStatus({ status }: ProfileStatusProps) {
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

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditedStatus(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      deactivateEditMode();
    }
  };

  return (
    <>
      {!editMode && (
        <div>
          <span onClick={activateEditMode}>{status || "No status yet"}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            value={editedStatus}
            onKeyDown={handleKeyDown}
            onBlur={deactivateEditMode}
            onChange={onStatusChange}
            autoFocus={true}
          />
        </div>
      )}
    </>
  );
}

export default ProfileStatus;
