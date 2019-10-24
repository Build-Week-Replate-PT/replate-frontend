import React, { useState } from "react";
// import { withFormik, Form, Field } from "formik";
// import * as Yup from "yup";

import axios from 'axios'; 

//import business login local storage for token -JAH
import { axiosWithAuthBusiness } from '../utils/axiosWithAuth';

// https://bw-replate.herokuapp.com/api/auth/business/login
// {
//     username: "businessUsername",
//     password: "pass"
// }

const BusinessForm = (props) => {

  //set local state here 
  const [login, setLogin] = useState({
    username: '',
    password: ''
  });

  //set login event
  const businessLogin = e => {
    console.log(e);
    e.preventDefault();
    axios
    .post('https://bw-replate.herokuapp.com/api/auth/volunteer/login', login)
    .then(res => {
      console.log(res.data);
      localStorage.setItem('token', res.data.token);
    })
    .catch(err => console.log(err))

  }
  //change handler
  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.values
    })
  }

  return (
    <div>
      <h2>Business User Login</h2>
      <form onSubmit={businessLogin} >
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

// const formikHOC = withFormik({
//   mapPropsToValues({ username, password }) {
//     return {
//       username: username || "",
//       password: password || ""
//     };
//   },

//   validationSchema: Yup.object().shape({
//     username: Yup.string().required("Username is required"),
//     password: Yup.string().required("Password is required")
//   })
// });

// const BusinessFormwithFormik = formikHOC(BusinessForm);

export default BusinessForm;
