import React, { memo, useEffect, useRef } from "react";
import { useState } from "react";
import { useOnlineHook } from "./hooks/useOnlineHook";
import { useTheme } from "./contexts/ThemeProvider";

const UseContextDemo = React.memo(function UseContextDemo({ value }) {
  const [name, setName] = useState("");
  const renderCount = useRef(1);
  const pastNameRef = useRef("");

  //   const [theme, setTheme] = useTheme();
  //   const isOnline = useOnlineHook();

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    pastNameRef.current = name;
  });

  return (
    <div className={`  flex flex-col w-[500px] m-3`}>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-semibold">Use Ref Example</h1>

        {/* <button
          className="p-4 bg-purple-400 rounded-xl"
          onClick={() => setTheme()}
        >
          Toggle Dark/Light Theme
        </button> */}
      </div>

      <div className=" flex flex-col items-center justify-center mt-44 gap-8">
        <div className="text-4xl text-red-700 break-words w-full">
          I rendered it to {renderCount.current} times.
        </div>
      </div>
    </div>
  );
});

export default UseContextDemo;

// function UseContextDemo({ value }) {
//   const [name, setName] = useState("");
//   const renderCount = useRef(1);
//   const pastNameRef = useRef("");

//   //   const [theme, setTheme] = useTheme();
//   //   const isOnline = useOnlineHook();

//   useEffect(() => {
//     renderCount.current = renderCount.current + 1;
//     pastNameRef.current = name;
//   });

//   return (
//     <div className={`  flex flex-col w-[500px] m-3`}>
//       <div className="flex flex-col items-center justify-center gap-4">
//         <h1 className="text-4xl font-semibold">Use Ref Example</h1>

//         {/* <button
//             className="p-4 bg-purple-400 rounded-xl"
//             onClick={() => setTheme()}
//           >
//             Toggle Dark/Light Theme
//           </button> */}
//       </div>

//       <div className=" flex flex-col items-center justify-center mt-44 gap-8">
//         <div className="text-4xl text-red-700 break-words w-full">
//           I rendered it to {renderCount.current} times.
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UseContextDemo;
