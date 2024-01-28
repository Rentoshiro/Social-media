import React, { useRef, ChangeEvent, useEffect } from "react";
import classes from "./Dialogs.module.css";
import Message from "./Message";
import AddMessageForm from "./AddMessageForm.jsx";
import { useState } from "react";

const Dialogs = ({ sendMessage }) => {
  const [messages, setMessages] = useState([]);
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
