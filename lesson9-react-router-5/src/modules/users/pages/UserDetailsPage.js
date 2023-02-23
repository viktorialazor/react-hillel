import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import UserDetails from "../components/UserDetails";
import {
  fetchUserItem,
  setEditableUserId,
  deleteUserItem,
} from "../../../store/actions/users";
import { checkFormData, setFormData } from "../../../store/actions/form";

const UserDetailsPage = ({
  user,
  setData,
  setUserItem,
  deleteUser,
  setEditableId,
  checkData,
}) => {
  const { id } = useParams();

  useEffect(() => {
    setUserItem(id);
  }, []);

  const history = useHistory();

  const onEditClick = () => {
    const editableUser = {
      name: user.name,
      phone: user.phone,
    };
    setEditableId(id);
    setData(editableUser);
    checkData(true);
  };

  const onDeleteClick = () => {
    deleteUser(id);
  };

  const onBackButtonClick = () => {
    history.goBack();
  };

  return (
    <UserDetails
      user={user}
      onEditClick={onEditClick}
      onDeleteClick={onDeleteClick}
      onBackButtonClick={onBackButtonClick}
    />
  );
};

function mapStateToProps({ users }) {
  return { user: users.userDetails };
}

const mapDispatchToProps = {
  setData: setFormData,
  setUserItem: fetchUserItem,
  deleteUser: deleteUserItem,
  setEditableId: setEditableUserId,
  checkData: checkFormData,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailsPage);
