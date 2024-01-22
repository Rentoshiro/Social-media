import React from "react";
//@ts-ignore
import classes from "../Dialogs.module.css";

type PropsType = {
  message: string;
};

function Message({ message }: PropsType) {
  return <div className={classes.message}>{message}</div>;
}

export default Message;
