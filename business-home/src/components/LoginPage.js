import React from "react";
import { Link } from "react-router-dom";

//import components
import BusinessForm from "./BusinessForm";
import NonProfitForm from "./NonProfitForm";

const LoginPage = (props) => {
  return (
    <div>
      <div>
        <BusinessForm {...props}/>
      </div>
      <div>
        <NonProfitForm {...props}/>
      </div>
      <div>
      <Link to="/signup">Click here to create a profile</Link>
      </div>
      
    </div>
  );
};

export default LoginPage;

//===After user logs in, information is sent to backend
//backend sends user to their own homepage.
