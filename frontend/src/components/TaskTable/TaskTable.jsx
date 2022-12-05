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
