import React, { useEffect, useState } from "react";
//@ts-ignore
import classes from "../Dialogs.module.css";

function Message({ url, author, text }) {
  return (
    <>
      <div>
        <img
          src={url}
          style={{ width: "50px", height: "50px" }}
          className=""
          alt="Description"
        />
        {author}
      </div>
      <div>{text}</div>
    </>
  );
}

export default Message;
