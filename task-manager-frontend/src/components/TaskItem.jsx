import API from "../services/api";

const TaskItem = ({ task, fetchTasks, setEditTask }) => {

  const handleDelete = async () => {
    await API.delete(`/tasks/${task._id}`);
    fetchTasks();
  };

  const handleEdit = () => {
    setEditTask(task);
  };
 
  return (
    <div className="task-card">
         <h3> Task Status : {task.status}</h3>
<hr/>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
     
     
      <div className="actions">
        <button className="edit" onClick={handleEdit}>Edit</button>
        <button className="delete" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
