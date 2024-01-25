import React, { useRef, ChangeEvent, useEffect } from "react";
// @ts-ignore
import classes from "../Dialogs/Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem.tsx";
import Message from "./Message.tsx";
import AddMessageForm from "./AddMessageForm.jsx";

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

const ws = new WebSocket(
  "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
);

const Dialogs =
  // : React.FC<DialogsProps>
  ({ messagesData, updateNewMessageBody, sendMessage, isAuth }) => {
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
    const messages = [1, 2, 3, 4];

    useEffect(() => {
      if (ws.readyState === WebSocket.OPEN) {
      }
    }, [ws.readyState]);

    ws.addEventListener("message", (event) => {
      const receivedMessage = JSON.parse(event.data);
      console.log("Received message:", receivedMessage);
    });

    return (
      <>
        <div style={{ height: "500px", overflow: "auto" }}>
          {messages.map((m) => (
            <Message key={m} />
          ))}
          {messages.map((m) => (
            <Message key={m} />
          ))}
          {messages.map((m) => (
            <Message key={m} />
          ))}

          {/* <div className={classes.dialogs}>
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
      <button onClick={handleClick}>Click me</button> */}
        </div>
        <div>
          <AddMessageForm />
        </div>
      </>
    );
  };

export default Dialogs;
