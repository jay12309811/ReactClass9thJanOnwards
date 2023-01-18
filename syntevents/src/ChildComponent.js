import { useSnackbar } from "notistack";
import React from "react";
// Most commonly used Synthetic events are listed here
export default function ChildComponent() {
  const { enqueueSnackbar } = useSnackbar();
  return (
    <div>
      <input
        type={"text"}
        onChange={() => {
          enqueueSnackbar("Input value changed !", {
            variant: "success",
          });
        }}
        onBlur={() => {
          enqueueSnackbar("User cursor moved away from input!", {
            variant: "success",
          });
        }}
      />{" "}
      <br />
      <button
        onMouseEnter={() => {
          enqueueSnackbar("User cursor hovered over me!", {
            variant: "success",
          });
        }}
        onMouseLeave={() => {
          enqueueSnackbar("User cursor left me after hovering!", {
            variant: "success",
          });
        }}
      >
        Hover Me !
      </button>
      <br />
      <button
        onClick={() => {
          enqueueSnackbar("Button clicked!", {
            variant: "success",
          });
        }}
      >
        Click me!
      </button>
    </div>
  );
}
