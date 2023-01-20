import useContacts from "./hooks/useContacts.js";
import Contacts from "./components/Contacts/Contacts";
import Form from "./components/Form/Form";
import "./App.css";

function App() {
  const { contactList, errorMessage, addContactItem, deleteContactItem } =
    useContacts();

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

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
