import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

//import business login local storage for token -JAH
import { axiosWithAuthNonProfit } from '../utils/axiosWithAuth';

// https://bw-replate.herokuapp.com/api/auth/volunteer/login
// {
//     username: "volunteerUsername",
//     password: "pass"
// }

const NonProfitForm = (errors, touched, values, status) => {
  //set local state
  const [login, setLogin] = useState({
    username: '',
    password: ''
  });

  //set login event
  const nonProfitLogin = e => {
    e.preventDefault();
    axiosWithAuthNonProfit()
    .post('/login', login)
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.token);
    })
  }

  return (
    <div>
      <h2>Non-Profit Volunteer Login</h2>
      <Form onSubmit={nonProfitLogin}>
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

const NonProfitFormWithFormik = formikHOC(NonProfitForm);

export default NonProfitFormWithFormik;
