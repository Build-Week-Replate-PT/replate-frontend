import React from "react";
import ReactDOM from "react-dom";
import replatelogo from "../Replate-images/replatelogo.svg";
import "../App.css";
import pup from "./pup.jpg";

function VolunteerProfile() {
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
      <p id="header"> My Profile</p>

      <img className="Pupfile" src={pup} alt="pupper"></img>
      <div className="diff">
        <h2>Username: testname</h2>
        <h2>Phone: (352)-459-2666</h2>
        <h2>Volunteer name: helper477</h2>
        <h2>
          <span id="buttonone">Update info</span>
        </h2>
        <h2>
          <span id="buttontwo"> Delete profile </span>
        </h2>
      </div>
    </div>
  );
}
export default VolunteerProfile;
