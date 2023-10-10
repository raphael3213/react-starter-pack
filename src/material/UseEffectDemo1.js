import React, { useEffect, useRef } from "react";
import { useState } from "react";

function UseEffectDemo1() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  console.log("On render");

  const handleResize = () => {
    setWindowWidth(window.innerWidth);

    return () => {
      window.removeEventListener("resize", handleResize); // The return callback essentially acts as a clean up for before the useEffect hook is called. Therefore on any statechange, the return callback is called first, then the useEffect hook. It is also called when the component unmounts
    };
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setWindowWidth(windowWidth);
  }, []);

  return <div className="flex flex-col w-[500px] m-3">{windowWidth}</div>;
}

export default UseEffectDemo1;
