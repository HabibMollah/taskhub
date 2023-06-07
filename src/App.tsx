import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import NotificationsPage from "./components/NotificationsPage";
import TasksPage from "./components/TasksPage";

function App() {
  return (
    <>
      <h1 className="mt-4 text-center text-5xl font-bold">TaskHub</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route path="tasks" element={<TasksPage />} />
      </Routes>
      <NavBar />
    </>
  );
}

export default App;
