import React, { useState, useEffect } from "react";
import DonationCard from "./DonationCard";
import SearchForm from "./SearchForm";
import axios from "axios";
import Dropdown from "react-dropdown";

import { dummyData } from "./DummyData";
import {
  axiosWithAuthBusiness,
  axiosWithAuthFood
} from "../utils/axiosWithAuth.js";

const DonationsList = props => {
  // console.log(props);
  const { donations, setDonations, apiAdd } = props;
  const [searchValDon, setSearchDon] = useState("");
  const [infoState, setInfo] = useState([]);
  const [filteredDonations, setFilteredDons] = useState([]);

  //====EVENT HANDLERS
  const handleChange = e => {
    const { value, name } = e.target; //destructuring to retrieve the value
    setSearchDon(value);
    console.log(e.target, value, name);
  };
  const handleSubmit = e => {
    console.log(`DONATIONS:`, donations);
    e.preventDefault();
    console.log(e.target);
    setInfo(
      infoState.filter(ele =>
        ele.name.toLowerCase().includes(searchValDon.toLowerCase())
      )
    );
    setDonations(
      donations.filter(ele =>
        ele.name.toLowerCase().includes(searchValDon.toLowerCase())
      )
    );
    setFilteredDons();

    console.log(donations);
    console.log(filteredDonations);
  };
  //=====

  //----get the user token========
  let credentials = {
    username: "aasDora2",
    password: "pass"
  };

  const [tokenNum, setToken] = useState("");
  const [businessUser, setBusinessUser] = useState({});
  // let response = {};
  useEffect(() => {
    axiosWithAuthBusiness()
      .post("/login", credentials)
      .then(data => {
        setToken(data.data.token);
        console.log(data.data.token);
        // setBusinessUser(data.data.user);
        // console.log(businessUser, data.data.user);
      })
      .catch(err => console.log(err));
    // }
  }, []);

  if (tokenNum != "") {
    console.log("test", tokenNum);
    axios
      .get("https://bw-replate.herokuapp.com/api/food", {
        headers: { Authorization: `${tokenNum}` }
      })
      .then(res => console.log(res))
      .catch(e => console.log(e));
  }
  //==============tokenNum = token!!!!!=====
  // console.log(filteredDonations);

  //using DummyData.js.....==========================
  const options = ["one", "two", "three"];
  useEffect(() => {
    if (donations == 0) {
      setFilteredDons(dummyData);
      console.log("filtered", filteredDonations);
    }
  });
  //=================================================

  //===========================================
  return (
    <section className="donations-container">
      DONATIONS PAGE:
      <div className="donation-header">
        <SearchForm
          searchValDon={searchValDon}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <Dropdown
          options={options}
          onChange={`beedrill`}
          value={options[0]}
          placeholder="somethingclever"
        >
          DropDown
        </Dropdown>
      </div>
      <div className="donationsList">
        {console.log(filteredDonations, donations)}
        {filteredDonations !== 0
          ? filteredDonations.map(each => {
              console.log("true");
              return <DonationCard each={each} />;
            })
          : donations.map(each => {
              console.log("else");
              return <DonationCard each={each} />;
            })}
      </div>
    </section>
  );
};

export default DonationsList;
