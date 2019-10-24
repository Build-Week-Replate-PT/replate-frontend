import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

// https://bw-replate.herokuapp.com/api/auth/volunteer/register

// {
//     username: "volunteerUsername",
//     password: "pass",
//     organization_name: "alskjdflaksjdf"
//     address: "1234 Somewhere Place, New York, NY 12345",
//     email: "wecare@helpinghandcharity.com",
//     phone: 55
// }

const NonProfitSignupForm = (errors, touched, values, status) => {
  return (
    <div>
      <h2>Non Profit Volunteer Signup</h2>
      <Form>
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
        <Field
          component="input"
          type="text"
          name="organizationname"
          placeholder="Enter an organization name"
        />
        {touched.organizationname && errors.organizationname && (
          <p>errors.organizationname</p>
        )}
        </div>
        <div>
        <Field
          component="input"
          type="text"
          name="address"
          placeholder="Enter organization address on one line"
        />
        {touched.address && errors.address && (<p>errors.address</p>)}
        </div>      
        <div> 
        <Field
          component="input"
          type="email"
          name="email"
          placeholder="Enter email"
        />
        {touched.email && errors.email && (<p>errors.email</p>)}
        </div> 
        <div>
        <Field
          component="input"
          type="telephone"
          name="telephone"
          placeholder="Enter phone number"
        />
        {touched.telephone && errors.telephone && (<p>errors.telephone</p>)}
        </div>

        <div>
        <button type='submit'>Submit</button>
        </div>
        
      </Form>
    </div>
  );
};

const formikHOC = withFormik({
  mapPropsToValues({
    username,
    password,
    organizationname,
    address,
    email,
    telephone
  }) {
    return {
      username: username || "",
      password: password || "",
      organizationname: organizationname || "",
      address: address || "",
      email: email || "",
      telephone: telephone || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
    organizationname: Yup.string().required("Organization name is required"),
    address: Yup.string().required("Organization address is required"),
    email: Yup.string().required("Email is required"),
    telephone: Yup.string().required("Telephone is required")
  })
});

const NonProfitSignupFormWithFormik = formikHOC(NonProfitSignupForm);

export default NonProfitSignupFormWithFormik;
