import React, { useState } from "react";
import TaskTable from "../../components/TaskTable/TaskTable";

const MainPage = (props) => {
  return (
    <div>
      <span>
        <TaskTable taskInstances={props.taskInstances} recurring_pattern={1} updateTaskInstance={props.updateTaskInstance}/>
        <TaskTable taskInstances={props.taskInstances} recurring_pattern={2} updateTaskInstance={props.updateTaskInstance}/>
        <TaskTable taskInstances={props.taskInstances} recurring_pattern={3} updateTaskInstance={props.updateTaskInstance}/>
      </span>
    </div>
  );
};

export default MainPage;
