import React, { useRef, ChangeEvent } from "react";
// @ts-ignore
import classes from "../Dialogs/Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem.tsx";
import Message from "./Message/Message.tsx";

type DialogsProps = {
  messagesData: {
    nameData: Array<{ id: number; name: string }>;
    dialogsData: Array<{ id: number; message: string }>;
    dialogText: string;
  };
  updateNewMessageBody: (text: React.RefObject<HTMLTextAreaElement>) => void;
  sendMessage: (text: React.RefObject<HTMLTextAreaElement>) => void;
  isAuth: boolean;
};

const Dialogs: React.FC<DialogsProps> = ({
  messagesData,
  updateNewMessageBody,
  sendMessage,
  isAuth,
}) => {
  const text = useRef<HTMLTextAreaElement>(null);

  const handleClick = () => {
    if (text.current) {
      sendMessage(text);
    }
  };

  const handleChange = () => {
    if (text.current) {
      updateNewMessageBody(text);
    }
  };

  return (
    <>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
          {messagesData.nameData.map((item) => (
            <DialogItem key={item.id} name={item.name} id={item.id} />
          ))}
        </div>
        <div className={classes.messages}>
          {messagesData.dialogsData.map((message) => (
            <Message key={message.id} message={message.message} />
          ))}
        </div>
      </div>
      <textarea
        ref={text}
        onChange={handleChange}
        value={messagesData.dialogText}
      />
      <button onClick={handleClick}>Click me</button>
    </>
  );
};

export default Dialogs;
