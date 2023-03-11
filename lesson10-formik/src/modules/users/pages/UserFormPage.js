import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import {
  createUserItem,
  setEditableUserId,
  updateUserItem,
} from "../../../store/actions/users";
import UserForm from "../components/UserForm";

const UserFormPage = ({
  editableUserId,
  formData,
  addUser,
  setEditableId,
  updateUser,
}) => {
  const usersPath = "/users/";
  const navigate = useNavigate();

  const onSubmitClick = (values) => {
    if (editableUserId) {
      updateUser(editableUserId, values);
      setEditableId("");
    } else {
      addUser(values);
    }
    navigate(usersPath);
  };

  const onBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <UserForm
      onSubmitClick={onSubmitClick}
      onBackButtonClick={onBackButtonClick}
      formData={formData}
    />
  );
};

function mapStateToProps({ users, form }) {
  return {
    editableUserId: users.editableUserId,
    formData: form.formData,
  };
}

const mapDispatchToProps = {
  setEditableId: setEditableUserId,
  addUser: createUserItem,
  updateUser: updateUserItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserFormPage);
