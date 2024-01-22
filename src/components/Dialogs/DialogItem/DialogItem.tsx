import React from "react";
//@ts-ignore
import classes from "../Dialogs.module.css";
import { NavLink } from "react-router-dom";

type PropsType = {
  id: number;
  name: string;
};

function DialogItem({ name, id }: PropsType) {
  return (
    <div className={classes.dialog + " " + classes.active}>
      <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
    </div>
  );
}

export default DialogItem;
