import React, { useState } from "react";
import CreateTaskForm from "../../components/CreateTaskForm/CreateTaskForm";

const NewTaskPage = (props) => {
  return (
    <div className="row justify-content-center" style={{ "margin-top": 20, "margin-left": 500,}}>
      <div className="col">
        <h1>Enter a new task</h1>
        <CreateTaskForm postNewTask={props.postNewTask} />
      </div>
    </div>
  );
};

export default NewTaskPage;
