import React from "react";
import { Outlet, Route, useNavigate } from "react-router-dom";

function checkUserAuthenticated() {
  return false;
}
function PrivateRoute() {
  const navigate = useNavigate();
  const isAuthenticated = checkUserAuthenticated();

  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }
  return <Outlet />;
}

export default PrivateRoute;
