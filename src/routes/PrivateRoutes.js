import React from "react";
import { Navigate, Route } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";

const PrivateRoute = ({
  path,
  component: Component,
  isAuthenticated,
  ...rest
}) => {
  const userPresent = JSON.parse(localStorage.getItem("users")) ? true : false;
  return userPresent ? Component : <Navigate to="/login" replace />;
};

export default PrivateRoute;
