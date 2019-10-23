import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

// https://bw-replate.herokuapp.com/api/auth/volunteer/login
// {
//     username: "volunteerUsername",
//     password: "pass"
// }

const NonProfitForm = (errors, touched, values, status) => {
  const [login, setLogin] = useState([]);

  return (
    <div>
      <h2>Non-Profit Volunteer Login</h2>
      <Form>
        <Field
          component="input"
          type="text"
          name="username"
          placeholder="Enter user name"
        />
        {touched.username && errors.username && <p>errors.username</p>}
        <Field
          component="input"
          type="password"
          name="password"
          placeholder="Enter password"
        />
        {touched.password && errors.password && <p>errors.password</p>}
        <button type="submit">Login</button>
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
