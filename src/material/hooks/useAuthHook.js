import React from "react";
import { useNavigate } from "react-router-dom";

function checkUserAuthenticated() {
  return true;
}

function useAuthHook() {
  const navigate = useNavigate();
  const isAuthenticated = checkUserAuthenticated();

  if (!isAuthenticated) {
    navigate("/login");
    return false;
  }
  return true;
}

export default useAuthHook;
