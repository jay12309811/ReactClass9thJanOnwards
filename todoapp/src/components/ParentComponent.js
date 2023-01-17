import React, { useState } from "react";
import TaskInputChild from "./TaskInputChild";
import TaskListComponent from "./TaskListComponent";

export default function ParentComponent() {
  const [tasksListArray, setTasksListArray] = useState([]);
  //Tow way data binding
  function receiveNewTask(newTask) {
    console.log("received in parent", newTask);
    //const tempTaskListArray = tasksListArray + newTask
    // Update already existing tasks with new task value
    setTasksListArray([...tasksListArray, newTask]);
  }
  function getUpdatedTaskValue(updatedTask, taskIndex) {
    console.log("Received in ParentComponent", updatedTask, taskIndex);
    const newTaskListArray = [...tasksListArray];
    newTaskListArray[taskIndex] = updatedTask;
    setTasksListArray(newTaskListArray);
  }
  return (
    <div>
      <TaskInputChild receiveNewTask={receiveNewTask} />
      <TaskListComponent
        tasksListArray={tasksListArray}
        getUpdatedTaskValue={getUpdatedTaskValue}
      />
    </div>
  );
}
