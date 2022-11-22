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

function App() {
  const [user, token] = useAuth();

  async function postNewTask(newTask) {
    console.log("Task to POST", newTask)
    try {
      let respone = await axios.post(
        `http://127.0.0.1:8000/api/tasks/userTasks/`,
        newTask,
        { headers: { Authorization: "Bearer " + token } }
      );
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
        <Route path="/main" element={<MainPage />} />
        <Route path="/new" element={<NewTaskPage postNewTask={postNewTask}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
