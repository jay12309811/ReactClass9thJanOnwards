import React from "react";
import Child4 from "./Child4";

export default function Child2() {
  return (
    <div style={{ background: "orange", padding: "10px", color: "white" }}>
      Child3
      <Child4 />
    </div>
  );
}
