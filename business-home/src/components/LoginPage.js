import React from "react";

//import components
import BusinessForm from "./BusinessForm";
import NonProfitForm from "./NonProfitForm";

const LoginPage = () => {
  return (
    <div>
      <div>
        <BusinessForm />
      </div>
      <div>
        <NonProfitForm />
      </div>
    </div>
  );
};

export default LoginPage;

//===After user logs in, information is sent to backend
//backend sends user to their own homepage.
