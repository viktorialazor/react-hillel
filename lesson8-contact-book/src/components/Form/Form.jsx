import React from "react";
import { connect } from "react-redux";
import {
  setFormStatus,
  checkFormData,
  setFormData,
} from "../../store/actions/form";
import { addContactItem } from "../../store/actions/contacts";

import "./Form.css";

function Form({
  isFormOpen,
  isFieldsFull,
  formData,
  onChangeFormStatus,
  onCheckFormData,
  onSetFormData,
  onAddContactItem,
}) {
  const changeFormStatus = () => {
    onChangeFormStatus(!isFormOpen);
  };

  const onInputChange = (e) => {
    const { value, name } = e.target;
    const updatedContact = {
      ...formData,
      [name]: value,
    };
    const updatedIsFieldsFull = isFormFieldsFull(updatedContact) ? true : false;
    onSetFormData({
      ...formData,
      ...updatedContact,
    });
    onCheckFormData(updatedIsFieldsFull);
  };

  const onSaveClick = (e) => {
    e.preventDefault();

    const { firstName, lastName, phone } = formData;

    const newItem = {
      firstName,
      lastName,
      phone,
    };

    onAddContactItem(newItem);
    resetForm();
    changeFormStatus();
    onCheckFormData(false);
  };

  const onCancelClick = () => {
    resetForm();
    changeFormStatus();
    onCheckFormData(false);
  };

  const resetForm = () => {
    onSetFormData({
      firstName: "",
      lastName: "",
      phone: "",
    });
    onChangeFormStatus(false);
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
            value={formData.firstName}
            onChange={onInputChange}
            placeholder="Enter first name"
          />
          <input
            className="form__input"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={onInputChange}
            placeholder="Enter last name"
          />
          <input
            className="form__input"
            name="phone"
            type="text"
            value={formData.phone}
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

function mapStateToProps({ form }) {
  return {
    isFormOpen: form.isFormOpen,
    isFieldsFull: form.isFieldsFull,
    formData: form.formData,
  };
}

const mapDispatchToProps = {
  onSetFormData: setFormData,
  onChangeFormStatus: setFormStatus,
  onCheckFormData: checkFormData,
  onAddContactItem: addContactItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
