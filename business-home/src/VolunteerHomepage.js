import React from "react";
import replatelogo from "./Replate-images/replatelogo.svg";
import "./App.css";
import desktopbanner from "./Replate-images/desktopbanner.svg";
import { Link } from "react-router-dom";
import CreateProfile from "./VolunteerComponents/CreateProfile.js";

function VolunteerHomepage() {
  return (
    <div>
      <div className="navigation">
        <img className="tiny" src={replatelogo} alt="logo"></img>
        <p className="replate">Replate</p>
        <nav>
          <h1>hi, volunteer</h1>
          <ul>
            <li>
              {" "}
              <a href="#"> Pickups</a>
            </li>
            <li>
              {" "}
              <a href="#"> Profile </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#"> About </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#"> Contact Us </a>
            </li>
          </ul>
        </nav>
      </div>
      <img className="banner" src={desktopbanner} alt="logo"></img>
      <p id="header">
        {" "}
        Welcome to Replate, volunteer. <br /> Please{" "}
        <Link to="/CreateProfile"> create a profile </Link>
      </p>
    </div>
  );
}

export default VolunteerHomepage;
