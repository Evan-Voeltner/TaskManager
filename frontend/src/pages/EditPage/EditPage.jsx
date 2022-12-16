import React, { useState } from "react";
import CreateTaskForm from "../../components/CreateTaskForm/CreateTaskForm";
import { Link } from "react-router-dom";

const EditPage = (props) => {
  return (
    <div>
      <button style={{ "margin-left": 200 }} className="btn btn-danger">
        <Link to="/main">Back</Link>
      </button>
      <CreateTaskForm
        postNewTask={props.postNewTask}
        updateTask={props.updateTask}
        editTask={true}
      />
    </div>
  );
};

export default EditPage;
