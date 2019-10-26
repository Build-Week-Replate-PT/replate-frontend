import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

//importing components
import MainNav from "./components/MainNav";
import BusinessHome from "./components/BusinessHome";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import PrivateRoute from "./components/PrivateRoute";
import VolunteerHomePage from "./VolunteerHomepage";
import BusinessDetails from "./components/BusinessDetails";
import DonationsList from "./components/DonationsList";
import PickUps from "./VolunteerComponents/PickUps.js";
import CreateProfile from "./VolunteerComponents/CreateProfile.js";
import PickUpDetails from "./VolunteerComponents/PickupDetails.js";

function App() {
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
          <Route
            exact
            path={"/DonationsList"}
            render={props => {
              return <DonationsList props={props} />;
            }}
          />
          <Route
            exact
            path={"/BusinessDetails"}
            render={props => {
              return <BusinessDetails props={props} />;
            }}
          />

          <Route exact path="/PickUps" component={PickUps} />
          <Route exact path="/PickUpDetails" component={PickUpDetails} />
          <Route exact path="/CreateProfile" component={CreateProfile} />
          <PrivateRoute path="/business-home" component={BusinessHome} />
          <PrivateRoute path="/nonprofit-home" component={VolunteerHomePage} />
        </section>
      </div>
    </main>
  );
}

export default App;
