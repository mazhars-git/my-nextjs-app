"use client";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("Hello Counter");
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-80">
        <h1 className="text-center text-2xl font-bold mb-4">Simple Counter</h1>
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-500"
          >
            -
          </button>
          <span>{count}</span>
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-500"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
