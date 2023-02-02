import React from "react";

export default function HOCParent(props) {
  // do some common ops
  return (
    <div>
      HOCParent
      {props.children}
    </div>
  );
}
