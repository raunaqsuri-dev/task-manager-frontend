import { useState } from "react";

function TaskManager() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    if (task) {
      setTasks([...tasks, task]);
      setTask(""); // Clear the input field after submission
    }
  }

  return (
    <div style={{ margin: "20px 0" }}>
      <form onSubmit={handleSubmit}>
        <label>
          Task:
          <input
            type="text"
            placeholder="Enter Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </label>
        <button type="submit" style={{ marginLeft: "10px" }}>
          Add Task
        </button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{ padding: "8px", borderBottom: "1px solid #ccc" }}
          >
            {task}
          </li>
        ))}
        ;
      </ul>
    </div>
  );
}

export default TaskManager;
