import React from "react";

import "./ContactItem.css";

function ContactItem({ contact, deleteContactItem }) {
  const { id, firstName, lastName, phone } = contact;

  const onDeleteClick = (id) => {
    deleteContactItem(id);
  };

  return (
    <li className="list__item">
      <p className="list__info">
        <span className="list__text">{firstName}</span>
        <span className="list__text">{lastName}</span>
        <span className="list__text list__text--phone">{phone}</span>
      </p>
      <button
        className="list__button"
        type="button"
        onClick={() => onDeleteClick(id)}
      >
        Delete
      </button>
    </li>
  );
}

export default ContactItem;
