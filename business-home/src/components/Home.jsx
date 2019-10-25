import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
//
import BusinessDetails from "./BusinessDetails";
import DonationsList from "./DonationsList";
import DonationCard from "./DonationCard";
import NavBar from "./../NavBar";
//
const HOME = () => {
  const [businessData, setBusinessData] = useState([]);
  const [donations, setDonations] = useState([]);
  // const [donations, setDonations] = useState({ id: 0, name: "fish" });

  //-----Below is for testing ONLY!!! change url when REAL API is up and running----
  // const apiAdd = "https://pokeapi.co/api/v2/pokemon/";
  const apiAdd = "https://bw-replate.herokuapp.com/api/auth/business/login";
  const apiAddFood = "https://bw-replate.herokuapp.com/api/food";
  //====^^^^^^^^^====
  let busKeys = [];

  return (
    <section className="homePage-container">
      <div className="homePage-content">
        <h2>HOME PAGE</h2>

        {/*ENTER BUTTONS FOR DONATIONS AND BUSINESS INFO  */}

        {/* <header>
          <NavBar />
        </header> */}
        {/* <section className="Components-section">
          <div className="blockSpace"></div>
          <p>Sections Displayed:</p> */}

        {/* <Route
            exact
            path={"/DonationsList"}
            render={props => {
              return (
                <DonationsList
                  props={props}
                  donations={donations}
                  setDonations={setDonations}
                  apiAdd={apiAdd}
                />
              );
            }}
          />
          <Route
            exact
            path={"/BusinessDetails"}
            render={props => {
              return (
                <BusinessDetails
                  props={props}
                  businessData={businessData}
                  setBusinessData={setBusinessData}
                  apiAdd={apiAdd}
                />
              );
            }}
          />
          <Route
            path="/DonationCard/:id"
            render={props => {
              return <DonationCard props={props} donations={donations} />;
            }}
          />
        </section> */}

        {/* <div className="business-info">
          <h2>BusinessName</h2>
          <p>Location</p>
          <p>#Donations</p>
          <p>Rating</p>
        </div>
        <div className="business-current-offers">
          Current Open Orders:
          {openOrders == 0 ? <p>No Open Orders</p> : <p>{openOrders}</p>}

        </div> */}
      </div>
    </section>
  );
};

export default HOME;
