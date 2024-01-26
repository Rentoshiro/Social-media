import React, { useRef, ChangeEvent, useEffect } from "react";
// @ts-ignore
import classes from "../Dialogs/Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem.tsx";
import Message from "./Message.tsx";
import AddMessageForm from "./AddMessageForm.jsx";
import { useState } from "react";

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

const Dialogs =
  // : React.FC<DialogsProps>
  ({ messagesData, updateNewMessageBody, sendMessage, isAuth }) => {
    const [messages, setMessages] = useState<any>([]);
    const [readyStatus, setReadyStatus] = useState();
    const messagesContainerRef = useRef(null);
    const ws = useRef(null);

    useEffect(() => {
      ws.current = new WebSocket(
        "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
      );

      if (ws.current) {
        ws.current.addEventListener("message", (e) => {
          if (ws.current.readyState === WebSocket.OPEN) {
            const newMessages = JSON.parse(e.data);
            setMessages((prevMessages) => [...prevMessages, ...newMessages]);
          }
          setReadyStatus("ready");
        });
      }

      return () => {
        if (ws.current) {
          ws.current.close();
        }
      };
    }, []);

    useEffect(() => {
      if (messagesContainerRef.current) {
        messagesContainerRef.current.scrollTop =
          messagesContainerRef.current.scrollHeight;
      }
    }, [messages]);

    function sendMessage(message) {
      if (ws.current && ws.current.readyState === WebSocket.OPEN) {
        ws.current.send(message);
      }
    }

    return (
      <>
        <div
          style={{
            height: "82vh",
            overflow: "auto",
            scrollBehavior: "smooth",
          }}
          ref={messagesContainerRef}
        >
          {messages &&
            messages.map((m) => (
              <Message url={m.photo} author={m.userName} text={m.message} />
            ))}
        </div>
        <div>
          <AddMessageForm sendMessage={sendMessage} readyStatus={readyStatus} />
        </div>
      </>
    );
  };

export default Dialogs;

{
  /* <div className={classes.dialogs}>
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
<button onClick={handleClick}>Click me</button> */
}
