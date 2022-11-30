import React, { useState } from "react";
import TaskTable from "../../components/TaskTable/TaskTable";

const MainPage = (props) => {
  return (
    <div>
      <TaskTable taskInstances={props.taskInstances}/>
    </div>
  );
};

export default MainPage;
