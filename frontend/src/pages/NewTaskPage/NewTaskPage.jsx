import React, { useState } from "react";
import CreateTaskForm from "../../components/CreateTaskForm/CreateTaskForm";

const NewTaskPage = (props) => {
  return (
    <div>
      <h1>Enter a new task</h1>
      <CreateTaskForm postNewTask={props.postNewTask}/>
    </div>
  );
};

export default NewTaskPage;
