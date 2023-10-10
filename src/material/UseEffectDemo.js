import React, { useEffect, useRef } from "react";
import { useState } from "react";

function UseEffectDemo() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  const ref = useRef("");

  console.log("On render");
  useEffect(() => {
    // fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    //   .then((response) => response.json())
    //   .then((json) => setItems(json));
    // console.log(items);
    ref.current = resourceType;
    console.log("On useEffect   : " + resourceType);
    console.log("Ref Current   : " + ref.current);
  }, [resourceType]);

  return (
    <div className="flex flex-col w-[500px] m-3">
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-semibold">Use Effect Example </h1>
      </div>

      <div className=" flex  items-center justify-center mt-44 gap-8">
        <button
          className="border-red-500 bg-red-500 p-3 text-white rounded-lg w-1/3 hover:bg-red-800"
          onClick={() => {
            setResourceType("posts");
          }}
        >
          Posts
        </button>
        <button
          className="border-red-500 bg-red-500 p-3 text-white rounded-lg w-1/3 hover:bg-red-800"
          onClick={() => {
            setResourceType("users");
          }}
        >
          Users
        </button>
        <button
          className="border-red-500 bg-red-500 p-3 text-white rounded-lg w-1/3 hover:bg-red-800"
          onClick={() => {
            setResourceType("comments");
          }}
        >
          Comments
        </button>
      </div>
      <div className="text-2xl w-full flex justify-center mt-5">
        {resourceType} and {ref.current}
      </div>
      <div className="w-full overflow-x-scroll max-h-96 mt-5">
        {items.map((item) => (
          <div className="break-words mb-1">
            {JSON.stringify(item)}
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UseEffectDemo;
