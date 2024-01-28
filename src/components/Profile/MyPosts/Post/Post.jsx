import React, { useState } from "react";
import classes from "../../../Profile/MyPosts/Post/Post.module.css";
import avatarImg from "../../../../images/fox.jpg";
import Button from "@mui/material/Button";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { Button } from "@mui/material";

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
      <img src={avatarImg} alt="Avatar" />
      {isEditing ? (
        <input
          type="text"
          value={editedMessage}
          onChange={(e) => setEditedMessage(e.target.value)}
        />
      ) : (
        <div>{message}</div>
      )}
      <div>Likes: {like}</div>
      {isEditing ? (
        <>
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
      {/* <button onClick={() => deletePost(postId)}>Delete</button> */}
      {/* <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={() => deletePost(postId)}
      >
        Delete
      </Button> */}
      {/* <Button variant="contained">Edit Profile</Button> */}
    </div>
  );
};

export default Post;
