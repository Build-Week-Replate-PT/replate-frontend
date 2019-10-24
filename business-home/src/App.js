import React, { useState, useEffect } from "react";
import "./App.css";
import { Route } from "react-router-dom";
//
import BusinessDetails from "./components/BusinessDetails";
import DonationsList from "./components/DonationsList";
import DonationCard from "./components/DonationCard";
import NavBar from "./NavBar";
import Home from "./components/Home";
import PickUps from "./VolunteerComponents/PickUps.js";
import CreateProfile from "./VolunteerComponents/CreateProfile.js";
import VolunteerHomePage from "./VolunteerHomepage";
import PickUpDetails from "./VolunteerComponents/PickupDetails.js";
import Links from "./components/Links";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";

function App() {
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
    <main>
      <div className="App">
        <header>
          <NavBar />
        </header>
        {/* =======HEADER======== */}
        {/* =====Content Below is showing route images===== */}
        <section className="Components-section">
          <div className="blockSpace"></div>
          <p>Sections Displayed:</p>
          <Route
            exact
            path={"/"}
            render={props => {
              return <Home props={props} />;
            }}
          />
          <Route
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
            exact
            path={"/login"}
            render={props => {
              return <LoginPage />;
            }}
          />
          <Route
            exact
            path={"/signup"}
            render={props => {
              return <SignupPage />;
            }}
          />
          <Route
            path="/DonationCard/:id"
            render={props => {
              return <DonationCard props={props} donations={donations} />;
            }}
          />

          <Route
            exact
            path="/VolunteerHomePage"
            component={VolunteerHomePage}
          />
          <Route exact path="/PickUps" component={PickUps} />
          <Route exact path="/PickUpDetails" component={PickUpDetails} />
          <Route exact path="/CreateProfile" component={CreateProfile} />
        </section>
      </div>
    </main>
  );
}

export default App;
