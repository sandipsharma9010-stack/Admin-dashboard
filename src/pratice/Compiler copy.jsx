import React, { useState } from "react";

function Compiler({ method, title }) {
  const [name, setName] = useState([
    "GFcsxxswxwedx",
    "gfg",
    "g4g",
    "GeeksforGeeksfefe",
  ]);

  const handleNameChange = (event) => {
    setName(event.target.value.split(","));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let arrCopy = [...name];
    if (typeof arrCopy[method] === "function") {
      arrCopy[method]();
    }
    setName(arrCopy);
  };

  return (
    <div className="w-80 mx-auto p-6 rounded-2xl shadow-lg border border-gray-200 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 dark:border-gray-700">
      
      <h1 className="text-xl font-bold mb-4 text-indigo-600">{title}</h1>

   
      <form onSubmit={handleSubmit} className="space-y-4">
      
        <label className="block">
          <span className="block font-semibold text-gray-700 dark:text-gray-300 mb-1">
            Array:
          </span>
          <input
            type="text"
            value={name.join(",")}
            onChange={handleNameChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />
        </label>

        
        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 rounded-lg shadow-md transition"
        >
          Apply {method}()
        </button>
      </form>

    
      <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm">
        <span className="font-bold text-gray-700 dark:text-gray-200">Result:</span>{" "}
        <code className="text-indigo-500">[{name.join(", ")}]</code>
      </div>
    </div>
  );
}

export default Compiler;
