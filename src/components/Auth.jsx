import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/actions/authActions";

const Auth = () => {
  const dispatch = useDispatch(); // Hook to dispatch actions to the Redux store
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Getting authentication state from Redux store

  return (
    <div className="btn-div">
      {isAuthenticated ? (
        // If the user is authenticated, show the Logout button
        <button className="btn btn-danger" onClick={() => dispatch(logout())}>
          Logout
        </button>
      ) : (
        // If the user is not authenticated, show the Login button
        <button className="btn btn-primary" onClick={() => dispatch(login())}>
          Login
        </button>
      )}
    </div>
  );
};

export default Auth;
