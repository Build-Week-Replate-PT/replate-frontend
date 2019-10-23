import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

//import business login local storage for token -JAH
import { axiosWithAuthBusiness } from '../utils/axiosWithAuth';

// https://bw-replate.herokuapp.com/api/auth/business/login
// {
//     username: "businessUsername",
//     password: "pass"
// }

const BusinessForm = (errors, touched, values, status) => {

  //set local state here 
  const [login, setLogin] = useState({
    username: '',
    password: ''
  });

  //set login event
  const businessLogin = e => {
    e.preventDefault();
    axiosWithAuthBusiness()
    .post('/login', login)
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.token);
    })

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
      <Form onSubmit={businessLogin} >
        <div>
        <Field
          component="input"
          type="text"
          name="username"
          placeholder="Enter user name"
        />
        {touched.username && errors.username && (<p>errors.username</p>)}
        </div>
        <div>
        <Field
          component="input"
          type="password"
          name="password"
          placeholder="Enter password"
        />
        {touched.password && errors.password && (<p>errors.password</p>)}
        </div>
        <div>
        <button type="submit">Login</button>
        </div>
       
      </Form>
    </div>
  );
};

const formikHOC = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required")
  })
});

const BusinessFormwithFormik = formikHOC(BusinessForm);

export default BusinessFormwithFormik;
