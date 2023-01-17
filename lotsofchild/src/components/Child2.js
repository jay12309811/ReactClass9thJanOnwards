import React from "react";
import Child3 from "./Child3";

export default function Child2() {
  return (
    <div style={{ background: "blue", padding: "10px", color: "white" }}>
      Child2
      <Child3 />
    </div>
  );
}
