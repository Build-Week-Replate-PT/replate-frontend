import { withFormik, Form, Field } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import replatelogo from "../Replate-images/replatelogo.svg";
import "../App.css";

const CreateProfile = ({ values, status }) => {
  const [state, setState] = useState([]);
  useEffect(() => {}, [status]);
  return (
    <div>
      <div className="navigation">
        <img className="tiny" src={replatelogo} alt="logo"></img>
        <p className="replate">Replate</p>
        <nav>
          <h1>hi, volunteer</h1>
          <ul>
            <li>
              {" "}
              <a href="#"> Pickups</a>
            </li>
            <li>
              {" "}
              <a href="#"> Profile </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#"> About </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#"> Contact Us </a>
            </li>
          </ul>
        </nav>
      </div>
      <p id="header"> User Profile</p>
      <Form>
        <p>
          Name
          <br />
        </p>
        <Field
          className="field"
          component="input"
          type="text"
          name="name"
          placeholder="Name"
        />
        <p> Volunteer name:</p>
        <Field
          className="field"
          component="input"
          type="text"
          name="VolunterName"
          placeholder="Volunteer Name"
        />
        <p> Phone number: </p>
        <Field
          className="field"
          component="input"
          type="number"
          name="phone"
          placeholder="1-(555)-555-5555"
        />
        <br />
        <button id="custom-btn">Submit</button>
      </Form>
    </div>
  );
};
const formikHOC = withFormik({
  mapPropsToValues({ username, phone, number }) {
    return {
      username: username || "",
      number: number || "",
      phone: phone || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("required field"),
    phone: Yup.string().required(" required field")
  }),
  handleSubmit(values, { setStatus }) {
    setStatus(values);
  }
});
const UserFormWithFormik = formikHOC(CreateProfile);
export default UserFormWithFormik;
