import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import {
  setFormData,
  checkFormData,
  setFormDataError,
} from "../../../store/actions/form";
import {
  createUserItem,
  setEditableUserId,
  updateUserItem,
} from "../../../store/actions/users";
import UserForm from "../components/UserForm";

const UserFormPage = ({
  editableUserId,
  formData,
  isValid,
  errorMessage,
  setData,
  checkData,
  setFormError,
  addUser,
  setEditableId,
  updateUser,
}) => {
  const navigate = useNavigate();

  const onFieldChange = (e) => {
    const { value, name } = e.target;

    const userItem = {
      ...formData,
      [name]: value,
    };

    setData(userItem);

    const isFieldsFull = isFormFieldsFull(userItem) ? true : false;
    checkData(isFieldsFull);

    if (isFieldsFull) {
      setFormError("");
    }
  };

  const onSaveClick = () => {
    if (!isValid) {
      setFormError("Fields must be filled");
      return;
    }
    if (editableUserId) {
      updateUser(editableUserId, formData);
      setEditableId("");
      resetFormData();
    } else {
      addUser(formData);
      resetFormData();
    }
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

  const resetFormData = () => {
    const defaultData = {
      name: "",
      phone: "",
    };
    setData(defaultData);
    checkData(false);
    setFormError("");
    setEditableId("");
  };

  const onBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <UserForm
      onFieldChange={onFieldChange}
      onSaveClick={onSaveClick}
      onBackButtonClick={onBackButtonClick}
      errorMessage={errorMessage}
      formData={formData}
      isValid={isValid}
    />
  );
};

function mapStateToProps({ users, form }) {
  return {
    editableUserId: users.editableUserId,
    formData: form.formData,
    isValid: form.isValid,
    errorMessage: form.errorMessage,
  };
}

const mapDispatchToProps = {
  setEditableId: setEditableUserId,
  setData: setFormData,
  checkData: checkFormData,
  setFormError: setFormDataError,
  addUser: createUserItem,
  updateUser: updateUserItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserFormPage);
