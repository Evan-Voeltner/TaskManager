import React, { useState } from "react";
import TaskTable from "../../components/TaskTable/TaskTable";

const EditPage = (props) => {
  return(
    <div>
      <TaskTable deleteTask={props.deleteTask} allTasks={props.allTasks}/>
    </div>
  );
};

export default EditPage;
