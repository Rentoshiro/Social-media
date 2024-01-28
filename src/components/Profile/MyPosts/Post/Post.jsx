import React, { useState } from "react";
import classes from "../../../Profile/MyPosts/Post/Post.module.css";
import Button from "@mui/material/Button";
import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import SaveSharpIcon from "@mui/icons-material/SaveSharp";
import BackspaceSharpIcon from "@mui/icons-material/BackspaceSharp";

const Post = ({ message, like, postId, deletePost, editPost }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedMessage, setEditedMessage] = useState(message);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedMessage(message);
  };

  const handleSaveEdit = () => {
    editPost(postId, editedMessage);
    setIsEditing(false);
  };

  return (
    <div className={classes.item}>
      {isEditing ? (
        <input
          type="text"
          value={editedMessage}
          onChange={(e) => setEditedMessage(e.target.value)}
          style={{
            backgroundColor: "rgba(169, 169, 169, 0.3)",
            padding: "8px",
            borderRadius: "10px",
            width: "auto",
          }}
        />
      ) : (
        <div>{message}</div>
      )}
      <div>Likes: {like}</div>
      {isEditing ? (
        <>
          <Button
            onClick={handleSaveEdit}
            startIcon={<SaveSharpIcon />}
          ></Button>
          <Button
            onClick={handleCancelEdit}
            startIcon={<BackspaceSharpIcon />}
          ></Button>
        </>
      ) : (
        <Button onClick={handleEdit} startIcon={<EditSharpIcon />}></Button>
      )}

      <Button
        onClick={() => deletePost(postId)}
        startIcon={<DeleteForeverSharpIcon />}
      ></Button>
    </div>
  );
};

export default Post;
