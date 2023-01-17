import React from "react";
import Child10 from "./Child10";

export default function Child2() {
  return (
    <div style={{ background: "pink", padding: "10px", color: "white" }}>
      Child9
      <Child10 />
    </div>
  );
}
