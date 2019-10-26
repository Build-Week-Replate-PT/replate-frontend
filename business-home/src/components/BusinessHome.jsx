import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
//
const HOME = () => {
  return (
    <section className="homePage-container">
      <div className="homePage-content">
        <h2>HOME PAGE</h2>
        <div className="blockSpace"></div>
        <div className="navigation-buttons">
          <NavLink to="/DonationsList">Donations</NavLink>
          <br></br>
          <NavLink to="/BusinessDetails">Bus Details</NavLink>
        </div>
      </div>
    </section>
  );
};

export default HOME;
