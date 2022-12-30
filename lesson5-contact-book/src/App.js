import React, { useState } from "react";

import Contacts from "./components/Contacts/Contacts";
import Form from "./components/Form/Form";
import "./App.css";

const defaultContactList = [
  {
    id: 1,
    firstName: "John",
    lastName: "Smith",
    phone: "123123",
  },
  {
    id: 2,
    firstName: "Robert",
    lastName: "Johnson",
    phone: "456456",
  },
  {
    id: 3,
    firstName: "Michael",
    lastName: "Williams",
    phone: "789789",
  },
];

function App() {
  const [contactList, setContactList] = useState(defaultContactList);

  const addContactItem = (newItem) => {
    setContactList([...contactList, newItem]);
  };

  const deleteContactItem = (id) => {
    setContactList(contactList.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <Contacts
        contactList={contactList}
        deleteContactItem={deleteContactItem}
      />
      <Form addContactItem={addContactItem} />
    </div>
  );
}

export default App;
