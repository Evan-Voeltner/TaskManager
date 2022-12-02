import React, { useState } from "react";
import TaskTable from "../../components/TaskTable/TaskTable";

import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

const MainPage = (props) => {
  return (
    <div>
      <h1>Daily</h1>
      <TaskTable
        taskInstances={props.taskInstances}
        recurring_pattern={1}
        updateTaskInstance={props.updateTaskInstance}
        isCompleted={false}
      />
      <h1>Weekly</h1>
      <TaskTable
        taskInstances={props.taskInstances}
        recurring_pattern={2}
        updateTaskInstance={props.updateTaskInstance}
        isCompleted={false}
      />
      <h1>Monthly</h1>
      <TaskTable
        taskInstances={props.taskInstances}
        recurring_pattern={3}
        updateTaskInstance={props.updateTaskInstance}
        isCompleted={false}
      />
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={props.taskInstances
          .filter((taskInstance) => {
            if (taskInstance.is_completed === false) {
              return true;
            }
          })
          .map((event) => {
            return { title: event.name, date: event.date_to_be_completed };
          })}
      />
      <h1>Completed Tasks</h1>
      <TaskTable
        taskInstances={props.taskInstances}
        recurring_pattern={0}
        updateTaskInstance={props.updateTaskInstance}
        isCompleted={true}
      />
    </div>
  );
};

export default MainPage;
