import React, { memo, useEffect, useRef } from "react";
import { useState } from "react";
import { useOnlineHook } from "./hooks/useOnlineHook";
import { useTheme } from "./contexts/ThemeProvider";
import UseContextDemo from "./UseContextDemo";

export function UseContextDemo1() {
  const [name, setName] = useState("");
  const renderCount = useRef(1);
  const pastNameRef = useRef("");

  const [theme, setTheme] = useTheme();
  const isOnline = useOnlineHook();

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    pastNameRef.current = name;
  });

  return (
    <div
      className={` ${
        theme ? "bg-gray-600" : "bg-white"
      }  flex flex-col w-[500px] m-3`}
    >
      <button
        className="p-4 bg-purple-400 rounded-xl"
        onClick={() => setTheme()}
      >
        Toggle Dark/Light Theme
      </button>
      <UseContextDemo value={"Jello"} />
    </div>
  );
}

export default UseContextDemo1;
