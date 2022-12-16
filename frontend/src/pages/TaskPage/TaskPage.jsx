import React, { useState } from "react";
import TaskTable from "../../components/TaskTable/TaskTable";
import { Link } from "react-router-dom";

const TaskPage = (props) => {
  return (
    <div>
      <button style={{ "margin-left": 200 }} className="btn btn-danger">
        <Link to="/main">Back</Link>
      </button>
      <TaskTable deleteTask={props.deleteTask} allTasks={props.allTasks} navigateToEditPage={props.navigateToEditPage}/>
    </div>
  );
};

export default TaskPage;
