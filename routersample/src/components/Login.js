import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const navigate = useNavigate();
  function handleLoginClick() {
    console.log("User clicked on login");
    props.setIsLoggedIn(true);
    navigate("/");
  }
  return (
    <div>
      Login Page
      <br />
      <button onClick={handleLoginClick}>Click to login</button>
    </div>
  );
}
