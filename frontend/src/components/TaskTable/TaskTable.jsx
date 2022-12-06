import React, { useState } from "react";

const TaskTable = (props) => {
  return (
    <div>
      <table>
        <tbody>
          {props.allTasks.map((task) => {
            return (
              <tr>
                <td>{task.name}</td>
                <td>
                  <input
                    type="button"
                    onClick={props.deleteTask.bind(this, task.id)}
                    value="Delete"
                  />
                  <input
                    type="button"
                    onClick={props.navigateToEditPage.bind(this, task)}
                    value="Edit Task"
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
