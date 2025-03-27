import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./redux/store";
import Weather from "./components/Weather";
import TodoApp from "./components/TodoApp";
import Auth from "./components/Auth";
import "./styles.css";

const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    // Load tasks from local storage when the component mounts
    // This ensures that previously saved tasks are available after a page refresh
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    dispatch({ type: "LOAD_TASKS", payload: storedTasks });
  }, [dispatch]);

  return (
    <div className="app-container text-center">
      {/* Application Heading */}
      <h2>To-Do Application</h2>
      
      {/* Authentication Component (Handles Login & Logout) */}
      <Auth />
      
      {/* If user is authenticated, show Weather and TodoApp components */}
      {isAuthenticated ? (
        <>
          <Weather /> {/* Displays Weather Information */}
          <TodoApp /> {/* Main To-Do List Application */}
        </>
      ) : (
        // Show this message when the user is not logged in
        <p id="msg">Please login to add or view your tasks.</p>
      )}
    </div>
  );
};

// Root component wraps the App component with Redux Provider
// This ensures that the entire app has access to the Redux store
const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
