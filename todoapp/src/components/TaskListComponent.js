import React from "react";
import UpdateComponent from "./UpdateComponent";

export default function TaskListComponent(props) {
  function passValueToParent(updatedTask, taskIndex) {
    console.log("Received in TaskListComponent", updatedTask, taskIndex);
    props.getUpdatedTaskValue(updatedTask, taskIndex);
  }
  return (
    <div>
      {props.tasksListArray.map((item, index) => (
        <div key={item + index}>
          <label>{item}</label>
          <button>Delete</button>
          <UpdateComponent
            taskIndex={index}
            getUpdatedTaskValue={passValueToParent}
          />
        </div>
      ))}
    </div>
  );
}
