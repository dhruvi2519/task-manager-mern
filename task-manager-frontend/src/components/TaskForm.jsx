import { useEffect, useState } from "react";
import API from "../services/api";

const TaskForm = ({ fetchTasks, editTask, setEditTask }) => {

  // 🟢 Form state
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "Todo",
    dueDate: ""
  });

  // 🔁 Jab Edit button click ho → form auto fill ho
  useEffect(() => {
    if (editTask) {
      setFormData({
        title: editTask.title || "",
        description: editTask.description || "",
        status: editTask.status || "Todo",
        dueDate: editTask.dueDate
          ? editTask.dueDate.slice(0, 10) // yyyy-mm-dd
          : ""
      });
    }
  }, [editTask]);

  // ✍ Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // 🚀 Submit handler (Create / Update)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editTask) {
        // 🟡 UPDATE TASK
        await API.put(`/tasks/${editTask._id}`, formData);
        setEditTask(null); // edit mode off
      } else {
        // 🟢 CREATE TASK
        await API.post("/tasks", formData);
      }

      // 🔄 Reset form
      setFormData({
        title: "",
        description: "",
        status: "Todo",
        dueDate: ""
      });

      // 🔄 Refresh task list
      fetchTasks();
    } catch (error) {
      console.error("Error saving task:", error);
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>

      <h2>{editTask ? "Edit Task" : "Add New Task"}</h2>

      {/* TITLE */}
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      {/* DESCRIPTION */}
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />

      {/* STATUS */}
      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
      >
        <option value="Todo">Todo</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>

      {/* DUE DATE */}
      <input
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleChange}
      />

      {/* BUTTON */}
      <button type="submit">
        {editTask ? "Update Task" : "Add Task"}
      </button>

    </form>
  );
};

export default TaskForm;
