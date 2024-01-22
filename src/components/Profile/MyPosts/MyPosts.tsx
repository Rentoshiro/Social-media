import React from "react";
//@ts-ignore
import classes from "../../../components/Profile/MyPosts/MyPosts.module.css";
import Post from "./Post/Post.tsx";
import { useRef } from "react";
import { useParams } from "react-router-dom";

interface MyPostsProps {
  updateNewPostText: (text: string) => void;
  addPost: (text: string) => void;
  posts: {
    newPostText: string;
    posts: Array<{ id: number; message: string; likesCount: number }>;
  };
  deletePost: (postId: number) => void;
}

function MyPosts({
  updateNewPostText,
  addPost,
  posts,
  deletePost,
}: MyPostsProps) {
  const { userId } = useParams();
  const text = useRef<HTMLTextAreaElement>(null);

  function handleClick() {
    if (text.current) {
      addPost(text.current.value);
    }
  }

  function handleChange() {
    if (text.current) {
      updateNewPostText(text.current.value);
    }
  }

  return (
    <div>
      {!userId && <div>My posts</div>}
      {!userId && (
        <div className="postsBlock">
          <div>
            <textarea
              ref={text}
              onChange={handleChange}
              value={posts.newPostText}
            />
          </div>
          <button onClick={handleClick}>Add post</button>
        </div>
      )}
      {posts.posts.map((message) => (
        <Post
          key={message.id}
          postId={message.id}
          message={message.message}
          like={message.likesCount}
          deletePost={deletePost}
        />
      ))}
    </div>
  );
}

export default MyPosts;
