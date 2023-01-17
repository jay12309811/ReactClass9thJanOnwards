import React from "react";
import Child2 from "./Child2";

export default function Child1() {
  return (
    <div style={{ background: "green", padding: "10px", color: "white" }}>
      Child1
      <Child2 />
    </div>
  );
}
