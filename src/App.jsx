import { BrowserRouter, Routes, Route } from "react-router";
import TaskProvider from "./context/TaskProvider.jsx"
import TasksPage from "./pages/TasksPage.jsx";
import CalendarPage from "./pages/CalendarPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import NewTask from "./pages/NewTask.jsx";

function App() {
  return (
    <TaskProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TasksPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/new-task" element={<NewTask />} />
        </Routes>
      </BrowserRouter>
    </TaskProvider>
  );
}

export default App;
