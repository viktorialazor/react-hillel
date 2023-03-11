import React from "react";
import UserList from "../components/UserList";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { setFormData } from "../../../store/actions/form";
import { setEditableUserId } from "../../../store/actions/users";

const UserListPage = ({ userList, setData, setEditableId }) => {
  const { pathname } = useLocation();

  const onAddButtonClick = () => {
    const defaultData = {
      name: "",
      phone: "",
    };
    setData(defaultData);
    setEditableId("");
  };

  return (
    <div>
      <h2 className="title title--list">User List</h2>
      <button
        className="button button--add"
        type="button"
        onClick={onAddButtonClick}
      >
        <Link to={`${pathname}/form`}>Add User</Link>
      </button>
      <UserList userList={userList} />
    </div>
  );
};

function mapStateToProps({ users }) {
  return { userList: users.users };
}

const mapDispatchToProps = {
  setData: setFormData,
  setEditableId: setEditableUserId,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListPage);
