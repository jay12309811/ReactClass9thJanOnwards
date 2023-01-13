import React, { useEffect } from "react";

export default function ChildComponent2(props) {
  useEffect(() => {
    return () => {
      console.log("ChildComponent2 is being removed from UI, use it for clean up");
    };
  }, []);

  return <div>ChildComponent2 received props value as {props.value}</div>;
}
