import React, { useState } from "react";
import TaskInstanceTable from "../../components/TaskInstanceTable/TaskInstanceTable";

import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

const MainPage = (props) => {
  return (
    <div style={{'margin': 100}}>
      <div className="row">
        <div className="col">
          <h1>Daily</h1>
          <TaskInstanceTable
            taskInstances={props.taskInstances}
            recurring_pattern={1}
            updateTaskInstance={props.updateTaskInstance}
            isCompleted={false}
          />
        </div>
        <div className="col">
          <h1>Weekly</h1>
          <TaskInstanceTable
            taskInstances={props.taskInstances}
            recurring_pattern={2}
            updateTaskInstance={props.updateTaskInstance}
            isCompleted={false}
          />
        </div>
        <div className="col">
          <h1>Monthly</h1>
          <TaskInstanceTable
            taskInstances={props.taskInstances}
            recurring_pattern={3}
            updateTaskInstance={props.updateTaskInstance}
            isCompleted={false}
          />
        </div>
      </div>
      <div>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          contentHeight={650}
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
        <div className="row justify-content-center">
          <div className="col">
            <h1>Completed Tasks</h1>
            <TaskInstanceTable
              taskInstances={props.taskInstances}
              recurring_pattern={0}
              updateTaskInstance={props.updateTaskInstance}
              isCompleted={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
