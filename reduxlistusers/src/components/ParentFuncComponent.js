import React from "react";
import { useSelector } from "react-redux";

export default function ParentFuncComponent() {
  const reduxStore = useSelector((store) => store);
  return (
    <div>
      ParentFuncComponent received props as - {JSON.stringify(reduxStore)}
    </div>
  );
}
