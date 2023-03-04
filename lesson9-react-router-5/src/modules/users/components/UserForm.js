import React from "react";
import { Link } from "react-router-dom";

const UserForm = ({
  onFieldChange,
  onSaveClick,
  onBackButtonClick,
  errorMessage,
  formData,
  isValid,
}) => {
  const usersPath = "/users/";

  return (
    <div>
      <h2 className="title">User Form</h2>
      <form className="form">
        <p className="form__row">
          <input
            className="form__input"
            type="text"
            name="name"
            value={formData.name}
            onChange={onFieldChange}
            placeholder="Enter your name"
          />
          <input
            className="form__input"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={onFieldChange}
            placeholder="Enter phone number"
          />
        </p>
        {errorMessage ? (
          <p className="form__row form_error">{errorMessage}</p>
        ) : (
          ""
        )}
        <p className="form__row form__buttons">
          <button
            className="form__button button"
            type="button"
            onClick={onSaveClick}
          >
            {isValid ? <Link to={usersPath}>Save</Link> : "Save"}
          </button>
          <button
            className="form__button button"
            type="button"
            onClick={onBackButtonClick}
          >
            Back
          </button>
        </p>
      </form>
    </div>
  );
};

export default UserForm;
