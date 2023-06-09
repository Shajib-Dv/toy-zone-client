/** @format */

import React, { useContext } from "react";
import { AuthContest } from "../../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContest);
  const location = useLocation();
  if (loading) {
    return <progress className="progress"></progress>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/signin" replace />;
};

export default PrivateRoute;
