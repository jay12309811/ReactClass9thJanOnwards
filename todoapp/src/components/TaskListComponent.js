import React from "react";

export default function TaskListComponent(props) {
  return (
    <div>
      {props.tasksListArray.map((item, index) => (
        <div key={item + index}>
          <label>{item}</label>
          <button>Update</button>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
}
