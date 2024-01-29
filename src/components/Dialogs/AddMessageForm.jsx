import { useRef } from "react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function AddMessageForm({ sendMessage, readyStatus }) {
  const text = useRef();

  function handleSendClick() {
    sendMessage(text.current.value);
    text.current.value = "";
  }

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <textarea
        ref={text}
        style={{
          backgroundColor: "rgba(169, 169, 169, 0.3)",
          padding: "8px",
          borderRadius: "10px",
          width: "1200px",
          resize: "none",
          marginRight: "10px",
        }}
      ></textarea>
      <Button
        disabled={readyStatus !== "ready"}
        onClick={handleSendClick}
        variant="contained"
        endIcon={<SendIcon />}
      >
        Send
      </Button>
    </div>
  );
}

export default AddMessageForm;
