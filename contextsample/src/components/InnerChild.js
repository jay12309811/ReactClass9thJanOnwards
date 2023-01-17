import React from "react";
import { CounterContext } from "../context/CounterContext";

export default function InnerChild() {
  return (
    <CounterContext.Consumer>
      {(value) => (
        <div style={{ fontStyle: "italic" }}>
          {`InnerChild receives counter value through context, and value is =>
          ${value.counterValue}`}
        </div>
      )}
    </CounterContext.Consumer>
  );
}
