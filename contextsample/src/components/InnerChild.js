import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export default function InnerChild() {
  const counterValues = useContext(CounterContext); // React hook Consumer Step 3 / Method 2
  return (
    <div style={{ fontStyle: "italic" }}>
      {`InnerChild receives counter value through context, and value is =>
          ${counterValues.counterValue}`}
    </div>
  );
}
