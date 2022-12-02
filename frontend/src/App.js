// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import useAuth from "./hooks/useAuth";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import MainPage from "./pages/MainPage/MainPage";
import NewTaskPage from "./pages/NewTaskPage/NewTaskPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { useEffect, useState } from "react";

function App() {
  const [user, token] = useAuth();
  const [taskInstances, setTaskInstances] = useState([]);

  useEffect(() => {
    getAllTaskInstances()
  }, []);

  async function getAllTaskInstances() {
    try {
      let response = await axios.get(
        "http://127.0.0.1:8000/api/taskInstances/userTaskInstances/",
        { headers: { Authorization: "Bearer " + token } }
      );
      setTaskInstances(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function postNewTask(newTask) {
    console.log("Task to POST", newTask);
    try {
      let response = await axios.post(
        `http://127.0.0.1:8000/api/tasks/userTasks/`,
        newTask,
        { headers: { Authorization: "Bearer " + token } }
      );
      console.log(response);
      createTaskInstances(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  function createTaskInstances(refrenceTask) {
    if (refrenceTask.is_recurring) {
      if (refrenceTask.recurring_pattern.type === 1) {
        createDailyTaskInstances(refrenceTask);
      } else if (refrenceTask.recurring_pattern.type === 2) {
        createWeeklyTaskInstances(refrenceTask);
      } else if (refrenceTask.recurring_pattern.type === 3) {
        createMonthlyTaskInstances(refrenceTask);
      }
    } else {
      let newTaskInstance = {
        task_id: refrenceTask.id,
        name: refrenceTask.name,
        date_to_be_completed: refrenceTask.recurring_pattern.Date,
        is_completed: false,
      };
      postNewTaskInstance(newTaskInstance);
    }
  }

  async function createDailyTaskInstances(refrenceTask) {
    let presentDate = new Date();
    let currentYear = presentDate.getFullYear();
    let currentMonth = presentDate.getMonth();
    let currentDay = presentDate.getDate();
    let finalDate;
    let totalDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    console.log(totalDaysInMonth);
    console.log(currentDay);

    for (let i = currentDay; i <= totalDaysInMonth; i++) {
      finalDate = new Date(currentYear, currentMonth, currentDay);

      let newTaskInstance = {
        task_id: refrenceTask.id,
        name: refrenceTask.name,
        date_to_be_completed: finalDate.toJSON().slice(0, 10),
        is_completed: false,
      };

      await postNewTaskInstance(newTaskInstance);
      currentDay++;
    }
  }

  async function createWeeklyTaskInstances(refrenceTask) {
    let presentDate = new Date();
    let currentMonth = presentDate.getMonth();
    let currentYear = presentDate.getFullYear();
    let totalDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    let finalDate;

    for (let i = 1; i <= totalDaysInMonth; i++) {
      let finalDate = new Date(currentYear, currentMonth, i);

      let newTaskInstance = {
        task_id: refrenceTask.id,
        name: refrenceTask.name,
        date_to_be_completed: finalDate.toJSON().slice(0, 10),
        is_completed: false,
      };

      if (finalDate.getDay() === 6) {
        await postNewTaskInstance(newTaskInstance);
      }
    }
  }

  async function createMonthlyTaskInstances(refrenceTask) {
    let presentDate = new Date();
    let currentMonth = presentDate.getMonth();
    let currentYear = presentDate.getFullYear();
    let finalDate;

    for (let i = 0; i < 12; i++) {
      if (currentMonth == 12) {
        currentMonth = 0;
        currentYear++;
      }
      finalDate = new Date(currentYear, currentMonth + 1, 0);

      let newTaskInstance = {
        task_id: refrenceTask.id,
        name: refrenceTask.name,
        date_to_be_completed: finalDate.toJSON().slice(0, 10),
        importance: refrenceTask.importance,
        recurring_pattern: 3,
        is_completed: false,
      };

      await postNewTaskInstance(newTaskInstance);
      currentMonth++;
    }
  }

  async function updateTaskInstance(updatedTaskInstance) {
    console.log("TaskInstance to Update", updatedTaskInstance);
    try {
      let response = await axios.put(
        `http://127.0.0.1:8000/api/taskInstances/userTaskInstances/${updatedTaskInstance.id}/`,
        updatedTaskInstance,
        { headers: { Authorization: "Bearer " + token } }
      );
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function getTaskInstance(pk) {
    try {
      let response = await axios.get(
        "http://127.0.0.1:8000/api/taskInstances/userTaskInstances/",
        { headers: { Authorization: "Bearer " + token } }
      );
      setTaskInstances(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function postNewTaskInstance(newTaskInstance) {
    console.log("TaskInstance to POST", newTaskInstance);
    try {
      let response = await axios.post(
        `http://127.0.0.1:8000/api/taskInstances/userTaskInstances/`,
        newTaskInstance,
        { headers: { Authorization: "Bearer " + token } }
      );
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/main"
          element={<MainPage taskInstances={taskInstances} updateTaskInstance={updateTaskInstance}/>}
        />
        <Route
          path="/new"
          element={<NewTaskPage postNewTask={postNewTask} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
