import React, { useState } from "react";
import axios from 'axios';

// https://bw-replate.herokuapp.com/api/auth/volunteer/register

// {
//     username: "volunteerUsername",
//     password: "pass",
//     organization_name: "alskjdflaksjdf"
//     address: "1234 Somewhere Place, New York, NY 12345",
//     email: "wecare@helpinghandcharity.com",
//     phone: 55
// }

const NonProfitSignupForm = (props) => {
   //set state
   const [signup, setSignup] = useState({
    username: "",
    password: "",
    organization_name: "",
    address: "",
    email: "",
    phone: ""
  });

  //set signup
  const nonProfitVolunteerSignup = e => {
    console.log("Click works");
    console.log(signup)
    e.preventDefault();
    axios 
    .post('https://bw-replate.herokuapp.com/api/auth/volunteer/register', signup)
    .then(res => {
      console.log(res.data);
      props.history.push('/nonprofit_home')
    })
    .catch(err => console.log(err))
  }

  //change handler
  const handleChange = e => {
    setSignup({
      ...signup,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div>
      <h2>Non Profit Volunteer Signup</h2>
      <form onSubmit={nonProfitVolunteerSignup}>
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
        <input
          component="input"
          type="text"
          name="organization_name"
          placeholder="Enter an organization name"
          onChange={handleChange}
        />
        
        </div>
        <div>
        <input
          component="input"
          type="text"
          name="address"
          placeholder="Enter organization address on one line"
          onChange={handleChange}
        />
       
        </div>      
        <div> 
        <input
          component="input"
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleChange}
        />
       
        </div> 
        <div>
        <input
          component="input"
          type="tel"
          name="phone"
          placeholder="Enter phone number"
          onChange={handleChange}
        />
        
        </div>

        <div>
        <button>Submit</button>
        </div>
        
      </form>
    </div>
  );
};

export default NonProfitSignupForm;
