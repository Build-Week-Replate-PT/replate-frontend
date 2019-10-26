import React, { useState, useEffect } from "react";
import "./App.css";
import { Route } from "react-router-dom";

//importing components

import MainNav from "./components/MainNav";
import BusinessHome from "./components/BusinessHome";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import PrivateRoute from "./components/PrivateRoute";
import VolunteerHomePage from "./VolunteerHomepage";
import NavBar from "./NavBar";
// import BusinessDetails from "./components/BusinessDetails";
// import DonationsList from "./components/DonationsList";
// import DonationCard from "./components/DonationCard";
// import PickUps from "./VolunteerComponents/PickUps.js";
// import CreateProfile from "./VolunteerComponents/CreateProfile.js";

// import PickUpDetails from "./VolunteerComponents/PickupDetails.js";

function App() {
  // const [businessData, setBusinessData] = useState([]);
  // const [donations, setDonations] = useState([]);
  // // const [donations, setDonations] = useState({ id: 0, name: "fish" });

  // //-----Below is for testing ONLY!!! change url when REAL API is up and running----
  // // const apiAdd = "https://pokeapi.co/api/v2/pokemon/";
  // const apiAdd = "https://bw-replate.herokuapp.com/api/auth/business/login";
  // const apiAddFood = "https://bw-replate.herokuapp.com/api/food";
  // //====^^^^^^^^^====
  // let busKeys = [];

  return (
    <main>
      <div className="App">
        <header>
          <MainNav />
        </header>
        {/* =======HEADER======== */}
        {/* =====Content Below is showing route images===== */}
        <section className="Components-section">
          <div className="blockSpace"></div>
          <Route exact path={"/"} render={props => <LoginPage {...props} />} />

          <Route
            exact
            path={"/signup"}
            render={props => <SignupPage {...props} />}
          />
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
          /> */}
          {/* <Route
            path="/DonationCard/:id"
            render={props => {
              return <DonationCard props={props} donations={donations} />;
            }}
         
          {/* <Route exact path="/PickUps" component={PickUps} />
          <Route exact path="/PickUpDetails" component={PickUpDetails} />
          <Route exact path="/CreateProfile" component={CreateProfile} /> */}
          <PrivateRoute path="/business-home" component={BusinessHome} />
          <PrivateRoute path="/nonprofit-home" component={VolunteerHomePage} />
        </section>
      </div>
    </main>
  );
}

export default App;
