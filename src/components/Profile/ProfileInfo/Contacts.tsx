import React from "react";

interface ContactsProps {
  contactTitle: string;
  contactValue: string | null;
}

function Contacts({ contactTitle, contactValue }: ContactsProps) {
  return (
    <div>
      {contactTitle}: {contactValue}
    </div>
  );
}

export default Contacts;
