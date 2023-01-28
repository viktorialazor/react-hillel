import React from "react";
import { useState } from "react";

import "./Form.css";

function Form({ addContactItem }) {
  const [newContact, setNewContact] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isFieldsFull, setIsFieldsFull] = useState(false);

  const changeFormStatus = () => {
    setIsFormOpen(!isFormOpen);
  };

  const onInputChange = (e) => {
    const { value, name } = e.target;

    const updatedContact = {
      ...newContact,
      [name]: value,
    };

    const updatedIsFieldsFull = isFormFieldsFull(updatedContact) ? true : false;

    setNewContact(() => {
      return {
        ...newContact,
        ...updatedContact,
      };
    });

    setIsFieldsFull(updatedIsFieldsFull);
  };

  const onSaveClick = (e) => {
    e.preventDefault();

    const { firstName, lastName, phone } = newContact;

    const newItem = {
      name: `${firstName} ${lastName}`,
      phone,
    };

    addContactItem(newItem);
    resetForm();
    changeFormStatus();
  };

  const onCancelClick = () => {
    resetForm();
    changeFormStatus();
  };

  const resetForm = () => {
    setNewContact({
      firstName: "",
      lastName: "",
      phone: "",
    });
    setIsFieldsFull(false);
  };

  const isFormFieldsFull = (obj) => {
    for (const prop in obj) {
      if (!isFieldEmpty(obj[prop])) {
        return false;
      }
    }
    return true;
  };

  const isFieldEmpty = (message) => {
    return message.trim() !== "";
  };

  const renderAddButton = () => {
    return (
      <button className="form__button" type="button" onClick={changeFormStatus}>
        Add Contact
      </button>
    );
  };

  const renderForm = () => {
    return (
      <form className="form">
        <p className="form__row">
          <input
            className="form__input"
            name="firstName"
            type="text"
            value={newContact.name}
            onChange={onInputChange}
            placeholder="Enter first name"
          />
          <input
            className="form__input"
            name="lastName"
            type="text"
            value={newContact.username}
            onChange={onInputChange}
            placeholder="Enter last name"
          />
          <input
            className="form__input"
            name="phone"
            type="text"
            value={newContact.phone}
            onChange={onInputChange}
            placeholder="Enter phone"
          />
        </p>
        <p className="form__row">
          <button
            className="form__button"
            type="submit"
            disabled={!isFieldsFull ? true : false}
            onClick={onSaveClick}
          >
            Save
          </button>
          <button
            className="form__button"
            type="button"
            onClick={onCancelClick}
          >
            Cancel
          </button>
        </p>
      </form>
    );
  };

  return (
    <div className="form__wrapper">
      {isFormOpen ? renderForm() : renderAddButton()}
    </div>
  );
}

export default Form;
