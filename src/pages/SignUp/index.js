// - Import npm packages
import React from "react";
import { isMobile } from "react-device-detect";
// - Custom Components/Interfaces
import MobileSignUpPage from "./MobileSignUpPage";
import SignUpPage from "./SignUpPage";

// - Stylesheets

const Login = () => {
  // - States (useState)

  // - useEffect - (componentDidMount, componentDidUpdate & componentWillUnmount)

  // - Custom methods & identifiers

  return isMobile ? <MobileSignUpPage /> : <SignUpPage />;
};

export default Login;
