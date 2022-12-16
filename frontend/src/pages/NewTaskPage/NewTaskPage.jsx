import React, { useState } from "react";
import CreateTaskForm from "../../components/CreateTaskForm/CreateTaskForm";
import { Link } from "react-router-dom";

const NewTaskPage = (props) => {
  return (
    <div>
      <div style={{"margin-left": 200}}>
        <button className="btn btn-danger">
          <Link to="/main">Back</Link>
        </button>
      </div>
      <div
        className="row justify-content-center"
        // style={{ "margin-top": 20, "margin-left": 800 }}
      >
        <div className="col">
          <CreateTaskForm postNewTask={props.postNewTask} />
        </div>
      </div>
    </div>
  );
};

export default NewTaskPage;
