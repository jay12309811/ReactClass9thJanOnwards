import React from "react";
import { CounterContext } from "../context/CounterContext";

export default function Header() {
  return (
    <CounterContext.Consumer>
      {(value) => (
        <div
          style={{
            width: "100%",
            background: "red",
            color: "white",
            fontWeight: "bold",
            height: "60px",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          Header
          <div
            style={{
              display: "flex",
              marginLeft: "10px",
              alignItems: "center",
            }}
          >
            <button
              style={{ height: "30px" }}
              onClick={() => {
                value.updateFuncCounter(value.counterValue - 1);
              }}
            >
              -
            </button>
            <h3>{value.counterValue}</h3>
            <button
              style={{ height: "30px" }}
              onClick={() => {
                value.updateFuncCounter(value.counterValue + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
      )}
    </CounterContext.Consumer>
  );
}
