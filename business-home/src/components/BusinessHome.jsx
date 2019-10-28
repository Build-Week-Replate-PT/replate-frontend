import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
//
const HOME = props => {
  const userdetails = props.location.state.detail;
  console.log(userdetails.user);
  return (
    <section className="homePage-container">
      <div className="homePage-content">
        <h2>HOME PAGE</h2>
        </div>
      </div>
    </section>
  );
};

export default HOME;
