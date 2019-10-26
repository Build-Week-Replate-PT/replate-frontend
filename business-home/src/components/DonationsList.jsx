import React, { useState, useEffect } from "react";
import DonationCard from "./DonationCard";
import SearchForm from "./SearchForm";

import { dummyData } from "./DummyData";
import { axiosWithAuthFood } from "../utils/axiosWithAuth.js";

const DonationsList = props => {
  // console.log(props);
  const { donations, setDonations, apiAdd } = props;
  const [searchValDon, setSearchDon] = useState("");
  const [infoState, setInfo] = useState([]);
  const [foodItems, setFoodItems] = useState({});

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
  };
  //=====

  let tokenNum = localStorage.getItem("token");
  useEffect(() => {
    axiosWithAuthFood()
      .get("", tokenNum)
      .then(res => {
        // console.log("Get response:", res.data);
        setFoodItems(res.data);
      })
      .catch(e => console.log(e));
  }, []);

  //===========================================
  return (
    <section className="donations-container">
      DONATIONS PAGE:
      <div className="donation-header">
        <p>Add Donation</p>
        <SearchForm
          searchValDon={searchValDon}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="donationsList">
        {foodItems.length > 0
          ? foodItems.map(each => {
              return <DonationCard each={each} />;
            })
          : dummyData.map(each => {
              return <DonationCard each={each} key={each.id} />;
            })}
      </div>
    </section>
  );
};

export default DonationsList;
