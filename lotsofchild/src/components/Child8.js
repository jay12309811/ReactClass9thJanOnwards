import React from "react";
import Child9 from "./Child9";

export default function Child2() {
  return (
    <div style={{ background: "grey", padding: "10px", color: "white" }}>
      Child8
      <Child9 />
    </div>
  );
}
