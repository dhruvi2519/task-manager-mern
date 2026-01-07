import { useEffect, useState } from "react";
import API from "./services/api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");

  const fetchTasks = async () => {
    let url = "/tasks";

    if (statusFilter) {
      url += `?status=${statusFilter}`;
    }

    const res = await API.get(url);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, [statusFilter]);

  return (
    <div className="container">
      <h1>Task Manager</h1>

      {/* FILTER */}
      <select onChange={(e) => setStatusFilter(e.target.value)}>
        <option value="">All</option>
        <option value="Todo">Todo</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>

      <TaskForm fetchTasks={fetchTasks} />
      <TaskList tasks={tasks} fetchTasks={fetchTasks} />
    </div>
  );
}

export default App;
