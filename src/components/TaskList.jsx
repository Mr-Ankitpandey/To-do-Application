import React from "react";

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  // Sorting tasks based on priority order (High -> Medium -> Low)
  const sortedTasks = [...tasks].sort((a, b) => {
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  return (
    <ul className="list-group">
      {sortedTasks.map((task) => (
        <li 
          key={task.id} 
          className={`list-group-item d-flex justify-content-between align-items-start ${task.completed ? "list-group-item-success" : ""}`}
        >
          {/* Task text with click functionality to mark as completed */}
          <span
            id="todo"
            onClick={() => toggleTaskCompletion(task.id)}
            style={{ cursor: "pointer", textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.text} ({task.priority})
          </span>
          
          {/* Button to delete a task */}
          <button className="btn btn-outline-danger btn-sm" onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;