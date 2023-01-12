import React, { useEffect, useState } from "react";
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

export default function ParentFuncComponent() {
  const [parentState1, setParentState1] = useState("");
  const [parentState2, setParentState2] = useState("");

  
  useEffect(() => {
    console.log("If you write like this, it is same as componentDidMount");
  }, []);

  useEffect(() => {
    console.log("If you write like this, it executes at every render");
  });

  useEffect(() => {
    console.log(
      "If you write like this, it executes only parentState1 (dependency values) changes"
    );
  }, [parentState1, parentState2]);

  const updateState1Value = (event) => {
    setParentState1(event.target.value);
  };
  const updateState2Value = (event) => {
    setParentState2(event.target.value);
  };
  return (
    <div style={{ margin: "2% 4%" }}>
      <div style={{ background: "lightblue" }}>
        Update ParentFuncComponent's parentState1 value {"  "}
        <input type={"text"} onBlur={updateState1Value} /> <br /> <br />
        Update ParentFuncComponent's parentState2 value {"  "}
        <input type={"text"} onBlur={updateState2Value} />
      </div>
      <div style={{ marginTop: "2%", background: "green" }}>
        <ChildComponent1 value={parentState1} />
        <br />
        <ChildComponent2 value={parentState2} />
      </div>
    </div>
  );
}
