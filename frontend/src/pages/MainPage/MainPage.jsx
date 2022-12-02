import React, { useState } from "react";
import TaskTable from "../../components/TaskTable/TaskTable";

const MainPage = (props) => {
  return (
    <div>
      <span>
      <h1>Daily</h1>
        <TaskTable
          taskInstances={props.taskInstances}
          recurring_pattern={1}
          updateTaskInstance={props.updateTaskInstance}
          isCompleted = {false}
        />
        <h1>Weekly</h1>
        <TaskTable
          taskInstances={props.taskInstances}
          recurring_pattern={2}
          updateTaskInstance={props.updateTaskInstance}
          isCompleted = {false}
        />
        <h1>Monthly</h1>
        <TaskTable
          taskInstances={props.taskInstances}
          recurring_pattern={3}
          updateTaskInstance={props.updateTaskInstance}
          isCompleted = {false}
        />
        <h1>Completed Tasks</h1>
        <TaskTable
          taskInstances={props.taskInstances}
          recurring_pattern={0}
          updateTaskInstance={props.updateTaskInstance}
          isCompleted = {true}
        />
      </span>
    </div>
  );
};

export default MainPage;
