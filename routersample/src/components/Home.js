import React, { useEffect } from "react";

// You can think of these components as "pages"
// in your app.
export function Home() {

  console.log("isLoggedIn from home", sessionStorage.getItem("isLoggedIn"));
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
