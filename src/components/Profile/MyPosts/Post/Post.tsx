import React from "react";
// @ts-ignore
import classes from "../../../Profile/MyPosts/Post/Post.module.css";
// @ts-ignore
import avatarImg from "../../../../images/fox.jpg";

type PostProps = {
  message: string;
  like: number;
  postId: number;
  deletePost: (postId: number) => void;
};

const Post: React.FC<PostProps> = ({ message, like, postId, deletePost }) => {
  return (
    <div className={classes.item}>
      <img src={avatarImg} alt="Avatar" />
      <div>{message}</div>
      <div>Likes: {like}</div>
      <button
        onClick={() => {
          deletePost(postId);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Post;
