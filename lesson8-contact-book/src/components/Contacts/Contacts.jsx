import React from "react";
import { connect } from "react-redux";
import ContactItem from "../ContactItem/ContactItem";
import "./Contacts.css";
import { deleteContactItem } from "../../store/actions/contacts";

function Contacts({ contactList, onDeleteContactItem }) {
  return (
    <ul className="list">
      {contactList.map((item) => (
        <ContactItem
          key={item.id}
          contact={item}
          deleteContact={onDeleteContactItem}
        />
      ))}
    </ul>
  );
}

function mapStateToProps({ contacts }) {
  return { contactList: contacts.contacts };
}

const mapDispatchToProps = {
  onDeleteContactItem: deleteContactItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
