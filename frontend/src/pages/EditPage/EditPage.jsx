import React, { useState } from 'react';
import CreateTaskForm from '../../components/CreateTaskForm/CreateTaskForm';
const EditPage = (props) => {
    return ( 
    <div>
        <CreateTaskForm postNewTask={props.postNewTask}  updateTask={props.updateTask} editTask={true}/>
    </div> );
}
 
export default EditPage;