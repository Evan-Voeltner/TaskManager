import React, { useState } from "react";

const TaskTable = (props) => {
  function completionToggle(taskInstance) {
    let updatedCompletion;
    console.log("Before change", taskInstance);
    console.log("Before change", taskInstance.is_completed);

    if (taskInstance.is_completed === false) {
      updatedCompletion = true;
    } else {
      updatedCompletion = false;
    }

    taskInstance.is_completed = updatedCompletion;
    console.log("After change", taskInstance);
    console.log("After change", taskInstance.is_completed);

    props.updateTaskInstance(taskInstance);
    
  }

  return (
    <div>
      <table>
        <tbody>
          {props.taskInstances
            .filter((taskInstanceToFilter) => {
              if (
                taskInstanceToFilter.recurring_pattern ===
                props.recurring_pattern && taskInstanceToFilter.is_completed === props.isCompleted
              ) {
                return true;
              }
              else if(props.recurring_pattern === 0 && taskInstanceToFilter.is_completed === props.isCompleted){
                  return true;
              }
              else {
                return false;
              }
            })
            .map((taskInstance) => {
              return (
                <tr>
                  <td>{taskInstance.name}</td>
                  <td>{taskInstance.date_to_be_completed}</td>
                  <td>
                    <input
                      type="checkbox"
                      onClick={completionToggle.bind(this, taskInstance)}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
