import React from "react";
import Child1 from "./Child1";

export default function Parent() {
  return (
    <div style={{ background: "red", padding: "10px", color: "white" }}>
      Parent
      <Child1 />
    </div>
  );
}
