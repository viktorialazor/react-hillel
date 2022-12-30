import React from "react";

import ContactItem from "../ContactItem/ContactItem";
import "./Contacts.css";

function Contacts({ contactList, deleteContactItem }) {
  return (
    <ul className="list">
      {contactList.map((item) => (
        <ContactItem
          key={item.id}
          contact={item}
          deleteContactItem={deleteContactItem}
        />
      ))}
    </ul>
  );
}

export default Contacts;
