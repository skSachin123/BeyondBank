import React from "react";
import { Route, Navigate } from "react-router-dom";

const AuthRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  const userPresent = JSON.parse(localStorage.getItem("users")) ? true : false;
  console.log(userPresent);
  return userPresent ? <Navigate to="/Home3" /> : Component;
};

export default AuthRoute;
