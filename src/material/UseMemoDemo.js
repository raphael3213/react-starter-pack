import React, { useState, useMemo } from "react";

function UseMemoDemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  return (
    <div className="flex flex-col w-[500px] m-3">
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-semibold">Use Ref Example </h1>
      </div>

      <div className="flex flex-col items-center justify-center mt-44 gap-8">
        <div className="p-3 border-red-600 border-2 rounded-md w-full">
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value))}
            className="focus:outline-none w-full"
          />
        </div>
        <button
          className="border-red-500 bg-red-500 p-3 text-white rounded-lg w-1/3 hover:bg-red-800"
          onClick={() => setDark((prevDark) => !prevDark)}
        >
          Change Theme
        </button>

        <div
          className={`${
            dark ? "bg-black text-white" : "bg-white text-black"
          } w-full p-4 flex items-center justify-center rounded-lg`}
        >
          {doubleNumber}
        </div>
      </div>
    </div>
  );
}

function slowFunction(num) {
  console.log("calling Slow Function");
  for (let i = 0; i < 1000000000; i++) {}

  return num * 2;
}

export default UseMemoDemo;
