import React, { useState } from "react";

const TaskInstanceTable = (props) => {
  function determineTaskInstancesToDisplay(taskInstanceDate) {
    let currentDate = new Date();
    console.log(taskInstanceDate);
    let taskInstanceDateArray = taskInstanceDate.split("-");
    console.log(taskInstanceDateArray);

    if (props.recurring_pattern === 1) {
      console.log(
        "Daily Task Comparison ",
        taskInstanceDate,
        " === ",
        currentDate
      );
      if (taskInstanceDate === currentDate.toJSON().slice(0, 10)) {
        return true;
      }
    } else if (props.recurring_pattern === 2) {
      console.log("Full Year", currentDate.getFullYear().toString());
      console.log("Full Year", taskInstanceDateArray[0]);
      console.log("Full Month", (currentDate.getMonth() + 1).toString());
      console.log("Full Date", taskInstanceDateArray[2].toString());
      if (
        taskInstanceDateArray[0] === currentDate.getFullYear().toString() &&
        taskInstanceDateArray[1] === (currentDate.getMonth() + 1).toString() &&
        taskInstanceDateArray[2] >= currentDate.getDate() &&
        taskInstanceDateArray[2] - 7 <= currentDate.getDate()
      ) {
        return true;
      }
    } else if (props.recurring_pattern === 3) {
      if (
        taskInstanceDateArray[0] === currentDate.getFullYear().toString() &&
        taskInstanceDateArray[1] === (currentDate.getMonth() + 1).toString()
      ) {
        return true;
      }
    }
  }

  function determinePrecentageToCompletion() {
    let currentDate = new Date();

    if (props.recurring_pattern === 1) {
      let todaysTaskInstancesArray = props.taskInstances.filter(
        (taskInstanceToFilter) => {
          if (
            taskInstanceToFilter.date_to_be_completed ===
            currentDate.toJSON().slice(0, 10)
          ) {
            return true;
          }
        }
      );

      let totalTaskInstances = todaysTaskInstancesArray.length;
      let totalCompleteTaskInstances = todaysTaskInstancesArray.filter(
        (taskInstanceToFilter) => {
          if (taskInstanceToFilter.is_completed) {
            return true;
          }
        }
      ).length;

      return (totalCompleteTaskInstances / totalTaskInstances) * 100;
    } else if (props.recurring_pattern === 2) {
      let thisWeeksTaskInstancesArray = props.taskInstances.filter(
        (taskInstanceToFilter) => {
          let taskInstanceDateArray =
            taskInstanceToFilter.date_to_be_completed.split("-");

          if (
            taskInstanceDateArray[0] === currentDate.getFullYear().toString() &&
            taskInstanceDateArray[1] ===
              (currentDate.getMonth() + 1).toString() &&
            taskInstanceDateArray[2] >= currentDate.getDate() &&
            taskInstanceDateArray[2] - 7 <= currentDate.getDate() &&
            taskInstanceToFilter.recurring_pattern === props.recurring_pattern
          ) {
            return true;
          }
        }
      );

      let totalTaskInstances = thisWeeksTaskInstancesArray.length;
      let totalCompleteTaskInstances = thisWeeksTaskInstancesArray.filter(
        (taskInstanceToFilter) => {
          if (taskInstanceToFilter.is_completed) {
            return true;
          }
        }
      ).length;

      return (totalCompleteTaskInstances / totalTaskInstances) * 100;
    } else if (props.recurring_pattern === 3) {
      let thisMonthsTaskInstancesArray = props.taskInstances.filter(
        (taskInstanceToFilter) => {
          let taskInstanceDateArray =
            taskInstanceToFilter.date_to_be_completed.split("-");

          if (
            taskInstanceDateArray[0] === currentDate.getFullYear().toString() &&
            taskInstanceDateArray[1] ===
              (currentDate.getMonth() + 1).toString() &&
            taskInstanceToFilter.recurring_pattern === props.recurring_pattern
          ) {
            return true;
          }
        }
      );

      let totalTaskInstances = thisMonthsTaskInstancesArray.length;
      let totalCompleteTaskInstances = thisMonthsTaskInstancesArray.filter(
        (taskInstanceToFilter) => {
          if (taskInstanceToFilter.is_completed) {
            return true;
          }
        }
      ).length;

      return (totalCompleteTaskInstances / totalTaskInstances) * 100;
    }
  }

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
      <table className="table table-sm">
        <tbody>
          {props.taskInstances
            .filter((taskInstanceToFilter) => {
              if (
                taskInstanceToFilter.recurring_pattern ===
                  props.recurring_pattern &&
                taskInstanceToFilter.is_completed === props.isCompleted
              ) {
                if (
                  determineTaskInstancesToDisplay(
                    taskInstanceToFilter.date_to_be_completed
                  )
                ) {
                  return true;
                }
              } else if (
                props.recurring_pattern === 0 &&
                taskInstanceToFilter.is_completed === props.isCompleted
              ) {
                return true;
              } else {
                return false;
              }
            })
            .sort((a, b) => {
              if (a.importance < b.importance) return 1;
              if (a.importance > b.importance) return -1;
              return 0;
            })
            .map((taskInstance) => {
              return (
                <tr>
                  <td>{taskInstance.name}</td>
                  {/* <td>{taskInstance.importance}</td> */}
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
      <div>{determinePrecentageToCompletion()}%</div>
    </div>
  );
};

export default TaskInstanceTable;
