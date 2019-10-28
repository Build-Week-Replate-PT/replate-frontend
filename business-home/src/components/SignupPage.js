import React from "react";
import { Link } from "react-router-dom";

//import compoments
import BusinessSignupForm from "./BusinessSignupForm";
import NonProfitSignupForm from "./NonProfitSignupForm";


const SignupPage = (props) => {
  return (
    <div>
      <div>
        <BusinessSignupForm {...props}/>
      </div>
      <div>
        <NonProfitSignupForm {...props}/>
      </div>
      <div>
      <Link to="/">Click here to login</Link>
      </div>
      
    </div>
  );
};

export default SignupPage;
