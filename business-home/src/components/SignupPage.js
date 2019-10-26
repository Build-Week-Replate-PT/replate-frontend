import React from "react";
import { Link } from "react-router-dom";

//import compoments
import BusinessSignupForm from "./BusinessSignupForm";
import NonProfitSignupForm from "./NonProfitSignupForm";


const SignupPage = () => {
  return (
    <div>
      <div>
        <BusinessSignupForm />
      </div>
      <div>
        <NonProfitSignupForm />
      </div>
      <div>
      <Link to="/">Click here to login</Link>
      </div>
      
    </div>
  );
};

export default SignupPage;
