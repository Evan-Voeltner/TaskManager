import React, { useState } from 'react';

const TaskTable = (props) => {
    return ( 
        <div>
            <h1>Task Table</h1>
            <table>
                <tbody>
                    {props.taskInstances.map((taskInstance) => {
                        return (
                            <tr>
                                <td>{taskInstance.name}</td>
                                <td>{taskInstance.date_to_be_completed}</td>
                                <td><input type="checkbox" /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
     );
}
 
export default TaskTable;