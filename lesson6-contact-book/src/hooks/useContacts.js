import { useEffect, useState } from "react";

import ContactApi from "../ContactApi";

export default function useContacts() {
  const [contactList, setContactList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    ContactApi.getList().then(setContactList).catch(showError);
  }, []);

  function showError(e) {
    setErrorMessage(e.message);
  }

  const addContactItem = (newItem) => {
    ContactApi.create(newItem)
      .then((newContact) => {
        setContactList([...contactList, newContact]);
      })
      .catch(showError);
  };

  const deleteContactItem = (id) => {
    ContactApi.delete(id)
      .then(() => {
        setContactList(contactList.filter((item) => item.id !== id));
      })
      .catch(showError);
  };

  return { contactList, errorMessage, addContactItem, deleteContactItem };
}
