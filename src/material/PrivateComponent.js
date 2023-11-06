import React, { useEffect } from "react";
import useAuthHook from "./hooks/useAuthHook";
import { useNavigate } from "react-router-dom";

function PrivateComponent() {
  const isAuthnticated = useAuthHook();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthnticated) {
      navigate("/login");
    }
  });

  return <div>PrivateComponent {isAuthnticated} Jello</div>;
}

export default PrivateComponent;
