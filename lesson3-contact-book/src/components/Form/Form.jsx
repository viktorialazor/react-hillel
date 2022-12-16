import React from 'react';

import './Form.css';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      newContact: {
        firstName: '',
        lastName: '',
        phone: '',
      },
      isFormOpen: false,
      isFieldsFull: false,
    };
  }

  onAddCotactClick = () => {
    this.changeFormStatus();
    if (this.state.isFormOpen) {
      this.resetForm();
    }
  };

  changeFormStatus = () => {
    this.setState((state) => {
      return {
        ...state,
        isFormOpen: !state.isFormOpen,
      };
    });
  };

  onInputChange = (e) => {
    const { value, name } = e.target;

    this.setState((state) => {
      const updatedContact = {
        ...state.newContact,
        [name]: value,
      };
      const updatedIsFieldsFull = this.isFormFieldsFull(updatedContact)
        ? true
        : false;

      return {
        ...state,
        newContact: updatedContact,
        isFieldsFull: updatedIsFieldsFull,
      };
    });
  };

  onSaveClick = (e) => {
    e.preventDefault();

    const { firstName, lastName, phone } = this.state.newContact;

    const newItem = {
      id: Math.random(),
      firstName,
      lastName,
      phone,
    };

    this.props.addContactItem(newItem);
    this.resetForm();
    this.changeFormStatus();
  };

  onCancelClick = () => {
    this.resetForm();
    this.changeFormStatus();
  };

  resetForm = () => {
    this.setState((state) => {
      return {
        isFormOpen: state.isFormOpen,
        isFieldsFull: false,
        newContact: {
          firstName: '',
          lastName: '',
          phone: '',
        },
      };
    });
  };

  isFormFieldsFull(obj) {
    for (const prop in obj) {
      if (!this.isFieldEmpty(obj[prop])) {
        return false;
      }
    }
    return true;
  }

  isFieldEmpty(message) {
    return message.trim() !== '';
  }

  renderForm() {
    return (
      <form className="form">
        <p className="form__row">
          <input
            className="form__input"
            name="firstName"
            type="text"
            value={this.state.newContact.firstName}
            onChange={this.onInputChange}
            placeholder="Enter first name"
          />
          <input
            className="form__input"
            name="lastName"
            type="text"
            value={this.state.newContact.lastName}
            onChange={this.onInputChange}
            placeholder="Enter last name"
          />
          <input
            className="form__input"
            name="phone"
            type="text"
            value={this.state.newContact.phone}
            onChange={this.onInputChange}
            placeholder="Enter phone"
          />
        </p>
        <p className="form__row">
          <button
            className="form__button"
            type="submit"
            disabled={!this.state.isFieldsFull ? true : false}
            onClick={this.onSaveClick}>
            Save
          </button>
          <button
            className="form__button"
            type="button"
            onClick={this.onCancelClick}>
            Cancel
          </button>
        </p>
      </form>
    );
  }

  render() {
    return (
      <div className="form__wrapper">
        <button
          className="form__button"
          type="button"
          onClick={this.onAddCotactClick}>
          Add Contact
        </button>
        {this.state.isFormOpen ? this.renderForm() : ''}
      </div>
    );
  }
}

export default Form;
