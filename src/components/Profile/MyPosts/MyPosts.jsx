import React from "react";
import Post from "./Post/Post";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

function MyPosts({ updateNewPostText, addPost, posts, deletePost, editPost }) {
  const { userId } = useParams();
  const text = useRef(null);
  const [errorMessage, setErrorMessage] = useState();

  function handleClick() {
    if (text.current) {
      const postText = text.current.value.trim();
      if (postText) {
        addPost(postText);
        text.current.value = "";
        setErrorMessage("");
      } else {
        setErrorMessage("Please enter some text before adding a post.");
      }
    }
  }

  function handleChange() {
    if (text.current) {
      updateNewPostText(text.current.value);
    }
  }

  const profileDataStyle = {
    border: "1px solid #ddd",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "10px",
    width: "500px",
  };

  return (
    <div>
      {!userId && <div style={profileDataStyle}>My posts</div>}
      {!userId && (
        <div className="postsBlock">
          <div>
            <textarea
              ref={text}
              onChange={handleChange}
              style={{
                backgroundColor: "rgba(169, 169, 169, 0.3)",
                padding: "8px",
                borderRadius: "10px",
                width: "auto",
                resize: "none",
              }}
              placeholder="New post..."
            />
          </div>
          <button onClick={handleClick}>Add post</button>
        </div>
      )}
      {errorMessage}
      {posts.posts.map((message) => (
        <Post
          key={message.id}
          postId={message.id}
          message={message.message}
          like={message.likesCount}
          deletePost={deletePost}
          editPost={editPost}
        />
      ))}
    </div>
  );
}

export default MyPosts;
