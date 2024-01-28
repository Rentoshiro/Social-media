import React from "react";

function Contacts({ contactTitle, contactValue }) {
  return (
    <div>
      <span style={{ fontSize: "20px" }}>{contactTitle}</span> :
      <a
        href={`${contactValue}`}
        target="_blank"
        style={{ textDecoration: "underline", color: "black" }}
      >
        {contactValue}
      </a>
    </div>
  );
}

export default Contacts;
