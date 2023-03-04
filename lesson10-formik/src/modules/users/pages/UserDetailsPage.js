import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import UserDetails from "../components/UserDetails";
import {
  fetchUserItem,
  setEditableUserId,
  deleteUserItem,
} from "../../../store/actions/users";
import { setFormData } from "../../../store/actions/form";

const UserDetailsPage = ({
  user,
  setData,
  setUserItem,
  deleteUser,
  setEditableId,
}) => {
  const { id } = useParams();

  useEffect(() => {
    setUserItem(id);
  }, []);

  const navigate = useNavigate();

  const onEditClick = () => {
    const editableUser = {
      name: user.name,
      phone: user.phone,
    };
    setEditableId(id);
    setData(editableUser);
  };

  const onDeleteClick = () => {
    deleteUser(id);
  };

  const onBackButtonClick = () => {
    navigate(-1);
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
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailsPage);
