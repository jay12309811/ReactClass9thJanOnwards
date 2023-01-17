import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

export default function LandingPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
