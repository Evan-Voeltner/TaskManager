import React, { useState } from "react";

const CreateTaskForm = (props) => {
  const [name, setName] = useState('');
  const [importance, setImportance] = useState('1');
  const [date, setDate] = useState([]);
  const [isRecurring, setIsRecurring] = useState(false);
  const [recurringPattern, setRecurringPattern] = useState('0');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(name);
    console.log(date);
    console.log(importance);
    console.log(isRecurring);
    console.log(recurringPattern);

    let finalPattern = {};

    if(recurringPattern === '0'){
      finalPattern = {
        type: 0,
        Date: date,
      }
    }
    else if(recurringPattern === '1'){
      finalPattern = {
        type: 1,
        Date: date,
      }
    }
    else if(recurringPattern === '2'){
      finalPattern = {
        type: 2,
        Date: date,
      }
    }
    else if(recurringPattern === '3'){
      finalPattern = {
        type: 3,
        Date: date,
      }
    }
    console.log(finalPattern)
    
    let newTask = {
      name: name,
      is_recurring: isRecurring,
      recurring_pattern: finalPattern,
      importance: importance,
    };
    if(props.editTask === true){
      props.updateTask(newTask)
    }
    else{
      props.postNewTask(newTask);
    }
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Task Name</label>
        <input type="text" onChange={(event) => setName(event.target.value)} />

        <p>Level Of Importance</p>
        <select
          name="Importance"
          onChange={(event) => setImportance(event.target.value)}
        >
          <option value={"1"}>Low</option>
          <option value={"2"}>Medium</option>
          <option value={"3"}>High</option>
        </select>

        <p>When does it need to be completed</p>
        <input type="date" onChange={(event) => setDate(event.target.value)}/>

        <p>Recurring</p>
        <div>
          <input
            type="radio"
            name="isRecurring"
            value={true}
            onChange={(event) => setIsRecurring(event.target.value)}
          />
          <label htmlFor="isRecurring">Yes</label>
          <input
            type="radio"
            name="isRecurring"
            value={false}
            onChange={(event) => setIsRecurring(event.target.value)}
          />
          <label htmlFor="isRecurring">No</label>
        </div>

        <p>When does it recurr</p>
        <select
          name="Recurring"
          onChange={(event) => setRecurringPattern(event.target.value)}
        >
          <option value={"0"}>Never</option>
          <option value={"1"}>Daily</option>
          <option value={"2"}>Weekly</option>
          <option value={"3"}>Monthly</option>
        </select>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTaskForm;
