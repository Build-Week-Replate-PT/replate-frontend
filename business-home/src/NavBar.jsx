import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBar-container">
      <div className="NavBar-banner">
        <NavLink to="/BusinessHome">
          <i className="material-icons">home</i>
        </NavLink>
        <NavLink to="/DonationsList">
          <i className="material-icons">fastfood</i>
        </NavLink>
        <NavLink to="/BusinessDetails">
          <i className="material-icons">account_circle</i>
        </NavLink>
        <NavLink to="/">User Login</NavLink>
        <NavLink to="/signup">User Signup</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
