import Contacts from "./components/Contacts/Contacts";
import Form from "./components/Form/Form";
import "./App.css";
import { React, useEffect } from "react";
import { fetchContactList } from "./store/actions/contacts.js";
import { connect } from "react-redux";

function App({ getContactList }) {
  useEffect(() => {
    getContactList();
  });

  return (
    <div className="container">
      <Contacts />
      <Form />
    </div>
  );
}

const mapDispatchToProps = {
  getContactList: fetchContactList,
};

export default connect(null, mapDispatchToProps)(App);
