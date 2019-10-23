import React from "react";
import ReactDOM from "react-dom";
import replatelogo from './replatelogo.svg'
import burger from './burger.svg'
import "./App.css";

function PickUpDetails () {
  return (
    <div className="App">
    <img className="tiny" src={replatelogo} alt="logo"></img>
      <p className="replate">
 Replate</p>
 <div className="navigation">
      <nav>
        <h1>
          hi, volunteer
        </h1>
        <ul>
          <li>
            {" "}
            <a href="#"> Pickups </a>
          </li>
          <li>
            {" "}
            <a href="#"> Profile </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#"> About  </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#"> Contact Us </a>
          </li>
        </ul>
      </nav>
      </div>
      <p id="header"> Pickup Details</p>
      <img className="Fimg" src={burger} alt="logo"></img>
     
       <p id="spacing">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      
      <h2>
    
        <span id="buttonthree">  Accept</span>
 
      </h2>
     
    </div>

  );
}

export default PickUpDetails


