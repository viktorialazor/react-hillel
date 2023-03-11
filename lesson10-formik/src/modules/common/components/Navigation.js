import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const setActiveClass = (isActive) => (isActive ? "active" : "");

  return (
    <ul className="nav">
      <li className="nav__item">
        <NavLink to="/" className={({ isActive }) => setActiveClass(isActive)}>
          Home
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink
          to="/users"
          className={({ isActive }) => setActiveClass(isActive)}
        >
          Users
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink
          to="/albums"
          className={({ isActive }) => setActiveClass(isActive)}
        >
          Albums
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
