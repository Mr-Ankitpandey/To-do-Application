import React, { useState } from "react";

const TaskInput = ({ addTask }) => {
  // State to store the new task input by the user
  const [newTask, setNewTask] = useState("");
  // State to store the priority level of the task (default is Medium)
  const [priority, setPriority] = useState("Medium");

  // Function to handle adding a new task
  const handleAddTask = () => {
    // Prevent adding empty tasks
    if (newTask.trim() === "") return;
    
    // Call the addTask function passed as a prop to add the task with selected priority
    addTask(newTask, priority);
    
    // Reset the input fields after adding the task
    setNewTask("");
    setPriority("Medium");
  };

  return (
    <div className="input-group mb-3">
      {/* Input field for entering a new task */}
      <input
        type="text"
        className="form-control"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task..."
      />
      
      {/* Dropdown menu to select task priority */}
      <select className="form-select" value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      
      {/* Button to add the task to the list */}
      <button className="btn btn-primary add" onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default TaskInput;