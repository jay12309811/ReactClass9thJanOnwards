import React, { useRef } from "react";

export default function FuncChild2(props) {
  const renderdCount = useRef(0);
  return (
    <div>
      <h3>
        FuncChild2 received props - {props.value} and rendered{" "}
        <b>{++renderdCount.current} </b> times !!
      </h3>
    </div>
  );
}
