import { useRef } from "react";

function AddMessageForm({ sendMessage, readyStatus }) {
  const text = useRef();

  function handleSendClick() {
    sendMessage(text.current.value);
    text.current.value = "";
  }

  return (
    <>
      <textarea ref={text}></textarea>
      <button disabled={readyStatus !== "ready"} onClick={handleSendClick}>
        Send
      </button>
    </>
  );
}

export default AddMessageForm;
