import React, { useEffect, useRef } from "react";
import { useState } from "react";

function UseRefDemo() {
  const [name, setName] = useState("");
  const renderCount = useRef(1);
  const pastNameRef = useRef("");

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    pastNameRef.current = name;
  }, [name]);

  return (
    <div className="flex flex-col w-[500px] m-3">
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-semibold">Use Ref Example </h1>
      </div>

      <div className=" flex flex-col items-center justify-center mt-44 gap-8">
        <div className="p-3 border-red-600 border-2 rounded-md w-full">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="focus:outline-none w-full"
          />
        </div>

        <div className="text-4xl text-red-700 break-words w-full">
          My name is <span className="text-green-500">{name}</span> and used to
          be <span className="text-green-500"> {pastNameRef.current}</span>
        </div>

        <div className="text-4xl text-red-700 break-words w-full">
          I rendered it to {renderCount.current} times.
        </div>
      </div>
    </div>
  );
}

export default UseRefDemo;
