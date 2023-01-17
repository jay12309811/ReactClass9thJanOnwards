import React from "react";
import Child5 from "./Child5";

export default function Child2() {
  return (
    <div style={{ background: "cyan", padding: "10px", color: "white" }}>
      Child4
      <Child5 />
    </div>
  );
}
