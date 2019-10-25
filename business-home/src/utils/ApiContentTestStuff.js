import React, { useState } from "react";
import axios from "axios";

export const baseUrl = "https://bw-replate.herokuapp.com/api";
export const businessRegister = `${baseUrl}/auth/business/register`;
export const businessLogin = `${baseUrl}/auth/business/login`;
export const volunteerRegister = `${baseUrl}/auth/volunteer/register`;
export const volunteerLogin = `${baseUrl}/auth/volunteer/login`;
export const foodUrl = `${baseUrl}/food`; // all food in database
export const foodId = `${foodUrl}/food/:id`;
//===  PUT, DELETE
export const businessFood = `${foodUrl}/business`;
export const volunteerFood = `${foodUrl}/volunteer`;
export const claimFood = `${foodUrl}/claim/:id`;

export const getBusinessFood = async () => {
  const result = await axios.get(foodUrl).then(({ data }) => data);
  return result;
};

export const GetTokenInfo = (baseApi, subText, loginTest, tokenReturn) => {
  // const [token, setToken] = useState(tokenReturn);
  axios
    .post(`${baseApi}${subText}`, loginTest)
    .then(results => {
      // console.log(results.data.token);
      let tokenReturn = results.data.token;
      console.log(tokenReturn);
      // setToken(tokenReturn);
      // setUserToken(results.data.token);
      // console.log(userToken);
    })
    .catch(err => console.log(err));
  // return [token];
};

//====custom hook below.  Works with DonationsList:
//....const [token, setToken] line
export const useGetToken = (baseApi, subText, loginTest, tokenReturn) => {
  const [token, setToken] = useState(tokenReturn);
  axios
    .post(`${baseApi}${subText}`, loginTest)
    .then(results => {
      // console.log(results.data.token);
      let tokenReturn = results.data.token;
      console.log(tokenReturn);
      setToken(tokenReturn);
      // setUserToken(results.data.token);
      // console.log(userToken);
    })
    .catch(err => console.log(err));
  return [token];
};

export const getUserInfo = (testApi, subText) => {
  axios
    .get(`${testApi}${subText}`)
    .then(results => console.log(results.data.data))
    .catch(err => console.log(err));
};
