import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import DonationsList from "./DonationsList";
import { getBusinessFood } from "./ApiContent";
import { NavLink } from "react-router-dom";
import { axiosWithAuthBusiness } from "../utils/axiosWithAuth.js";

const BusinessDetails = (props, userInfo) => {
  console.log(userInfo);
  const { businessData, setBusinessData, apiAdd } = props; //destructuring the values brought in from the App page
  const [searchVal, setSearch] = useState("");
  const [infoState, setInfo] = useState([]);
  const [foodList, setFoodList] = useState([]);

  //
  let info = Object.keys(props);
  console.log("info", info);
  const userTest = "";
  // const userTest = 15;
  console.log(Number.isInteger(userTest));
  let inputData = [];
  //====
  //====EVENT HANDLERS
  const handleChange = e => {
    const { value } = e.target;
    setSearch(value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setInfo(
      infoState.filter(ele =>
        ele.name.toLowerCase().includes(searchVal.toLowerCase())
      )
    );
    setBusinessData(
      businessData.filter(ele =>
        ele.name.toLowerCase().includes(searchVal.toLowerCase())
      )
    );
  };
  //=====

  let tokenNum = localStorage.getItem("token");
  console.log(tokenNum);
  useEffect(() => {
    axiosWithAuthBusiness()
      .post("/login", tokenNum)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(e => console.log(e));
  }, []);

  // useEffect(() => {
  //   console.log("useEffect with ApiContent.js");
  //   getBusinessFood().then(data => setFoodList(data));
  // });

  return (
    <div className="businessDetails">
      <div className="blockSpace"></div>
      <div className="navigation-buttons">
        <NavLink to="/business-home">Home</NavLink>
        <br></br>
        <NavLink to="/DonationsList">Donations</NavLink>
      </div>
      <SearchForm
        searchVal={searchVal}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <h2>BusinessDetails: {props.name}</h2>
      <p>Name: {props.name}</p>
      <p>Pass: {props.name}</p>
      <p>Organization: {props.name}</p>
      <p>Address: {props.name}</p>
      <p>email: {props.name}</p>
      <p>phone: {props.name}</p>
    </div>
  );
};

export default BusinessDetails;
