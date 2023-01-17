import React from "react";
import Child7 from "./Child7";

export default function Child2() {
  return (
    <div style={{ background: "violet", padding: "10px", color: "white" }}>
      Child6
      <Child7 />
    </div>
  );
}
