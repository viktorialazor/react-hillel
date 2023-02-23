import React from "react";
import { Link, useLocation } from "react-router-dom";

const UsersList = ({ userList }) => {
  const location = useLocation();
  const pathname = location.pathname;

  const albumsPath = "/albums?userId=";

  return (
    <ol className="user-list">
      {userList.map((item) => (
        <li className="user-list__item" key={item.id}>
          <p className="user-list__wrapper">
            <span className="user-list__info">
              <span className="user-list__text">Name: {item.name}</span>
              <span className="user-list__text">Phone: {item.phone}</span>
            </span>
            <span className="user-list__buttons">
              <button className="button" type="button">
                <Link to={`${albumsPath}${item.id}`}>Albums</Link>
              </button>
              <button className="button" type="button">
                <Link to={`${pathname}/${item.id}`}>Details</Link>
              </button>
            </span>
          </p>
        </li>
      ))}
    </ol>
  );
};

export default UsersList;
