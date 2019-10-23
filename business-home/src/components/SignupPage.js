import React from "react";

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
    </div>
  );
};

export default SignupPage;
