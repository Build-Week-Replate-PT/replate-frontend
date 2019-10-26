import React from "react";
import { NavLink } from "react-router-dom";

const MainNav = () => {
    return(
        <div className="NavBar-container">
            <div className="NavBar-banner">
            <NavLink to="/">User Login</NavLink>
            <NavLink to="/signup">User Signup</NavLink>
            </div>
        </div>
    )
}

export default MainNav;
