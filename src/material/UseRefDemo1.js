import React, { useEffect, useRef } from "react";
import { useState } from "react";

function UseRefDemo1() {
  const [name, setName] = useState("");
  let [renderCount, setRenderCount] = useState(1);
  const pastNameRef = useRef("");
  let nonState = 5;

  useEffect(() => {
    // renderCount.current = renderCount.current + 1;
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
            onChange={(e) => {
              setName(e.target.value);
              // console.log(renderCount);
              // renderCount++;
              // console.log(typeof renderCount);
              setRenderCount(renderCount + 5);
              setRenderCount((renderCount) => renderCount + 3);
              // setRenderCount((renderCount) => renderCount + 1);

              nonState++;
            }}
            className="focus:outline-none w-full"
          />
        </div>

        <div className="text-4xl text-red-700 break-words w-full">
          My name is <span className="text-green-500">{name}</span> and used to
          be <span className="text-green-500"> {pastNameRef.current}</span> and
          this is temporary {nonState}
        </div>

        <div className="text-4xl text-red-700 break-words w-full">
          I rendered it to {renderCount} times.
        </div>
      </div>
    </div>
  );
}

export default UseRefDemo1;
