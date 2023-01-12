import React from "react";

export default function LandingPage(props) {
  function onLogoutButtonClick() {
    props.updateLoggedIn(false);
  }
  return (
    <div>
      Welcom to LandingPage
      <button onClick={onLogoutButtonClick}>Click to logout</button>
    </div>
  );
}
