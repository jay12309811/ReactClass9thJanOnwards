import React from "react";
import MainContent from "./MainContent";
import SideMenu from "./SideMenu";

export default function Content() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        height: "650px",
      }}
    >
      <SideMenu />
      <MainContent />
    </div>
  );
}
