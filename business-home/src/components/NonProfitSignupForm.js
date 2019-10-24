import React, { useState } from "react";
// import { withFormik, Form, Field } from "formik";
// import * as Yup from "yup";
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
        {/* {touched.username && errors.username && (<p>errors.username</p>)} */}
        </div>
        <div>
        <input
          component="input"
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={handleChange}
        />
        {/* {touched.password && errors.password && (<p>errors.password</p>)} */}
        </div>
        <div>
        <input
          component="input"
          type="text"
          name="organization_name"
          placeholder="Enter an organization name"
          onChange={handleChange}
        />
        {/* {touched.organizationname && errors.organizationname && (
          <p>errors.organizationname</p>
        )} */}
        </div>
        <div>
        <input
          component="input"
          type="text"
          name="address"
          placeholder="Enter organization address on one line"
          onChange={handleChange}
        />
        {/* {touched.address && errors.address && (<p>errors.address</p>)} */}
        </div>      
        <div> 
        <input
          component="input"
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleChange}
        />
        {/* {touched.email && errors.email && (<p>errors.email</p>)} */}
        </div> 
        <div>
        <input
          component="input"
          type="tel"
          name="phone"
          placeholder="Enter phone number"
          onChange={handleChange}
        />
        {/* {touched.telephone && errors.telephone && (<p>errors.telephone</p>)} */}
        </div>

        <div>
        <button>Submit</button>
        </div>
        
      </form>
    </div>
  );
};

// const formikHOC = withFormik({
//   mapPropsToValues({
//     username,
//     password,
//     organizationname,
//     address,
//     email,
//     telephone
//   }) {
//     return {
//       username: username || "",
//       password: password || "",
//       organizationname: organizationname || "",
//       address: address || "",
//       email: email || "",
//       telephone: telephone || ""
//     };
//   },

//   validationSchema: Yup.object().shape({
//     username: Yup.string().required("Username is required"),
//     password: Yup.string().required("Password is required"),
//     organizationname: Yup.string().required("Organization name is required"),
//     address: Yup.string().required("Organization address is required"),
//     email: Yup.string().required("Email is required"),
//     telephone: Yup.string().required("Telephone is required")
//   })
// });

// const NonProfitSignupFormWithFormik = formikHOC(NonProfitSignupForm);

export default NonProfitSignupForm;
