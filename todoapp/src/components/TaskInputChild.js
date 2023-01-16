import React, { useState } from "react";

export default function TaskInputChild(props) {
  const [newTask, setNewTask] = useState("");
  function setNewTaskValue(event) {
    setNewTask(event.target.value);
  }
  function passValueToParent() {
    props.receiveNewTask(newTask);
  }
  return (
    <div>
      <h2>Enter the task name:</h2>
      <input type={"text"} onBlur={setNewTaskValue} />
      <button onClick={passValueToParent}>Add Task</button>
    </div>
  );
}
