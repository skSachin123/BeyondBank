// import React from "react";
// import { Component } from "react";
// import { Route, useNavigate } from "react-router-dom";
// import secureLocalStorage from "react-secure-storage";

// const PrivateRoute = ({ element, ...rest }) => {
//   const user = secureLocalStorage.getItem("user");
// const PrivateRoute = ({ component: Component, isLoggedInUser, ...rest }) => {
//   const navigate = useNavigate();
//   // const user = secureLocalStorage.getItem("user");

//   return (
//     // <Route {...rest} element={user ? element : <Navigate to="/" replace />} />
//     <Route
//       {...rest}
//       render={(props) =>
//         isLoggedInUser ? (
//           <Component {...props} />
//         ) : (
//           navigate("/", { state: { from: props.location } })
//         )
//       }
//     />
//   );
// };
// const PrivateRoute = ({ element, redirectPath, ...rest }) => {
//   const user = secureLocalStorage.getItem("user");

//   return (
//     <Route
//       {...rest}
//       element={user ? element : <Navigate to={redirectPath} replace />}
//     />
//   );
// };

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Define a helper function to check if the user is authenticated
const isAuthenticated = () => {
  // Add your authentication logic here
  // e.g., check if the user is logged in or has a valid token
  // Return true if authenticated, false otherwise
};

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);
export default PrivateRoute;
