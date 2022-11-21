import React, { useState } from "react";

const CreateTaskForm = (props) => {
  return (
    <div>
      <form>
        <label>Task Name</label>
        <input type="text" />
        
        <p>Level Of Importance</p>
        <select name="Importance">
            <option value={1}>Low</option>
            <option value={2}>Medium</option>
            <option value={3}>High</option>
        </select>

        <p>Recurring</p>
        <input type="radio" name="Recurring" value={true}/>

        <p>When does it recurr</p>
        <select name="Importance">
            <option value={1}>Daily</option>
            <option value={2}>Weekly</option>
            <option value={3}>Monthly</option>
        </select>

        
      </form>
    </div>
  );
};

export default CreateTaskForm;
