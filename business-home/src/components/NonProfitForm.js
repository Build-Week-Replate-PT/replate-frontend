import React, { useState, useEffect } from "react";
import axios from 'axios';

//import business login local storage for token -JAH
import { axiosWithAuthNonProfit } from '../utils/axiosWithAuth';

// https://bw-replate.herokuapp.com/api/auth/volunteer/login
// {
//     username: "volunteerUsername",
//     password: "pass"
// }

const NonProfitForm = (props) => {
  //set local state
  const [login, setLogin] = useState({
    username: "",
    password: ""
  });

  //set login event
  const nonProfitLogin = e => {
    console.log("Tada!")
    console.log(login);
    e.preventDefault();
    axios
    .post('https://bw-replate.herokuapp.com/api/auth/volunteer/login', login)
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.token);
    })
  }
  
  //handle change
  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
  }


  return (
    <div>
      <h2>Non-Profit Volunteer Login</h2>
      <form onSubmit={nonProfitLogin}>
        <div>
        <input
          component="input"
          type="text"
          name="username"
          placeholder="Enter user name"
          onChange={handleChange}
        />
        
        </div>
        <div>
        <input
          component="input"
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={handleChange}
        />
        
        </div>
        <div>
        <button>Login</button>
        </div>
        
      </form>
    </div>
  );
};


export default NonProfitForm;
