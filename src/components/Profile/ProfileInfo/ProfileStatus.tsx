import React, { useState, ChangeEvent, KeyboardEvent } from "react";

type ProfileStatusProps = {
  status: string;
  updateStatus: (status: string) => void;
};

function ProfileStatus({ status, updateStatus }: ProfileStatusProps) {
  const [editMode, setEditMode] = useState(false);
  const [editedStatus, setEditedStatus] = useState(status);

  function activateEditMode() {
    setEditMode(true);
  }

  function deactivateEditMode() {
    setEditMode(false);
    updateStatus(editedStatus);
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
