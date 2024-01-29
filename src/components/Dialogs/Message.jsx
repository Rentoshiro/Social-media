import icon from "../../images/icon.jpeg";

function Message({ url, author, text, userId, profileId }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "#8BA1A3",
          color: "white",
          padding: "10px",
          width: "500px",
          borderRadius: "30px",
          marginBottom: "15px",
          marginLeft: userId === profileId ? "auto" : "0",
        }}
      >
        {url ? (
          <img
            src={url}
            style={{
              width: "50px",
              height: "50px",
              marginRight: "10px",
              borderRadius: "30px",
            }}
            alt="Description"
          />
        ) : (
          <img
            src={icon}
            style={{
              width: "50px",
              height: "50px",
              marginRight: "10px",
              borderRadius: "30px",
            }}
            alt="Default Icon"
          />
        )}
        <div style={{ flex: "1" }}>
          <div>{author}</div>
          <div>{text}</div>
        </div>
      </div>
    </>
  );
}

export default Message;
