import React from "react";
import InnerChild from "./InnerChild";

export default function MainContent() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        height: "100%",
        background: "blue",
        color: "white",
        fontWeight: "bold",
        justifyContent: "center",
        alignItems: "center",flexDirection:'column'
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        MainContent
      </div>
      <div
        style={{
          display: "flex",
          flexGrow: "1",
          alignItems: "end",
          paddingBottom: "24px",
        }}
      >
        <InnerChild />
      </div>
    </div>
  );
}
