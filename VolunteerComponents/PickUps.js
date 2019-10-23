import React from "react";
import ReactDOM from "react-dom";
import replatelogo from './replatelogo.svg'
import "./App.css";

function PickUps() {
  return (
    <div>
    <div className="navigation">
    <img className="tiny" src={replatelogo} alt="logo"></img>
    <p className="replate">
Replate</p>
    <nav>
    <h1>
        hi, volunteer
      </h1>
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
    <p id="header"> Pending Pickups</p>
<div className="CardsContainer">
 
      <div  className="cardcomponent">
        <div className="faux">
          <h3> location: xxxxxx </h3>
<h3>quantity: 5 </h3>    
<h3> status: pending</h3>
    </div>
    
        </div>

        <div  className="cardcomponent">
        <div className="faux">
          <h3> location: xxxxxx </h3>
<h3>quantity: 5 </h3>    
<h3> status: pending</h3>
    </div>
        </div>

        <div  className="cardcomponent">
        <div className="faux">
          <h3> location: xxxxxx </h3>
<h3>quantity: 5 </h3>    
<h3> status: pending</h3>
    </div>
        </div>
        
      </div>

    </div>
  );
}

export default PickUps