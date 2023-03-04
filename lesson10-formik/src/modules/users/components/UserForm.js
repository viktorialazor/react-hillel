import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import userSchema from "../validation/userSchema";

const UserForm = ({ onSubmitClick, onBackButtonClick, formData }) => {
  return (
    <div>
      <h2 className="title">User Form</h2>
      <Formik
        initialValues={formData}
        onSubmit={onSubmitClick}
        validationSchema={userSchema}
      >
        <Form className="form">
          <div className="form__row">
            <p className="form-column">
              <Field
                className="form__input"
                name="name"
                placeholder="Enter your name"
              />
              <span className="form__error">
                <ErrorMessage name="name" />
              </span>
            </p>
            <p className="form-column">
              <Field
                className="form__input"
                name="phone"
                placeholder="Enter phone number"
              />
              <span className="form__error">
                <ErrorMessage name="phone" />
              </span>
            </p>
          </div>
          <p className="form__row form__buttons">
            <button className="form__button button" type="submit">
              Save
            </button>
            <button
              className="form__button button"
              type="button"
              onClick={onBackButtonClick}
            >
              Back
            </button>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default UserForm;
