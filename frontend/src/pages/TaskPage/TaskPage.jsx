import React, { useState } from "react";
import TaskTable from "../../components/TaskTable/TaskTable";

const TaskPage = (props) => {
  return (
    <div>
      <TaskTable deleteTask={props.deleteTask} allTasks={props.allTasks} navigateToEditPage={props.navigateToEditPage}/>
    </div>
  );
};

export default TaskPage;
