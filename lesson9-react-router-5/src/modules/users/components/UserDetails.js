import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const UserDetails = ({
  user,
  onEditClick,
  onDeleteClick,
  onBackButtonClick,
}) => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const pathnameUsers = pathname.replace(id, "");

  return (
    <div className="container container--add">
      <h2 className="title">User Details Page</h2>
      <div className="user-info">
        <p className="user-info__text">Name: {user.name}</p>
        <p className="user-info__text">Phone: {user.phone}</p>
        <p className="user-list__buttons">
          <button className="button" type="button" onClick={onEditClick}>
            <Link to={`${pathnameUsers}form`}>Edit</Link>
          </button>
          <button className="button" type="button" onClick={onDeleteClick}>
            <Link to={`${pathnameUsers}`}>Delete</Link>
          </button>
        </p>
      </div>
      <button
        className="button button--back"
        type="button"
        onClick={onBackButtonClick}
      >
        Go To Users
      </button>
    </div>
  );
};

export default UserDetails;
