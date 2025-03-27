import React, { useState, useEffect } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import "bootstrap/dist/css/bootstrap.min.css";

const TodoApp = () => {
  // State to manage the list of tasks, initialized from local storage
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Effect to store tasks in local storage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Function to add a new task with a given priority
  const addTask = (text, priority) => {
    const newTask = { id: Date.now(), text, completed: false, priority };
    setTasks([...tasks, newTask]);
  };

  // Function to toggle the completion status of a task
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to delete a task by filtering it out of the tasks array
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container mt-5 to-do">
      {/* Title of the application */}
      <h3 className="text-center mb-4">Your Todo's</h3>
      
      {/* Component for adding tasks */}
      <TaskInput addTask={addTask} />
      
      {/* Component for displaying the list of tasks */}
      <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />
    </div>
  );
};

export default TodoApp;
