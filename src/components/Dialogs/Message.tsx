import React from "react";
//@ts-ignore
import classes from "../Dialogs.module.css";

type PropsType = {
  message: string;
};

function Message() {
  const message = {
    url: "https://i.pinimg.com/564x/73/f3/5a/73f35ab18a1e7cc588bc8d793a0d6860.jpg",
    author: "Rene",
    text: "Hi hi",
  };
  return (
    <>
      <div>
        <img
          src={message.url}
          style={{ width: "50px", height: "50px" }}
          className=""
          alt="Description"
        />
        {message.author}
      </div>
      <div>{message.text}</div>
    </>
  );
  // <div className={classes.message}>{message}</div>;
}

export default Message;
