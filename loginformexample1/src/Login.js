import React, { useEffect, useState } from "react";
import LandingPage from "./LandingPage";

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginButtonClick = () => {
    setIsLoggedIn(true);
  };
  useEffect(() => {
    if (isLoggedIn === true) console.log("User is logged in");
    else console.log("User is logged out");
  }, [isLoggedIn]);

  if (isLoggedIn) return <LandingPage updateLoggedIn={setIsLoggedIn} />;
  else
    return (
      <div>
        Login
        <button onClick={loginButtonClick}>Click to login</button>
      </div>
    );
}
