import React, { useState } from "react";

function StringCompiler({ method, title, methodfun, disc, input }) {
  const [name, setName] = useState([1, 3, 4, -6, -8, 4.5, 5.2, 5, 8, 8.9]);
  const [output, setOutput] = useState("");

  const disablebtn = name.length === 0;

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    switch (methodfun.toLowerCase()) {
      case "abs()":
        const ItmeAbs = name.map((n) => Math.abs(n)).join(" , ");
        setOutput(`abs: ${ItmeAbs}`);
        break;

      case "max()":
        const itemMax = Math.max(...name);
        setOutput(`Round: ${itemMax}`);
        break;

      case "min()":
        const itemMin = Math.min(...name);
        setOutput(`Round: ${itemMin}`);
        break;

      case "round()":
        const atChar = name.map((n) => Math.round(n)).join(" , ");
        setOutput(`Round: ${atChar}`);
        break;

      case "ceil()":
        const atCeil = name.map((n) => Math.ceil(n)).join(" , ");
        setOutput(`Round: ${atCeil}`);
        break;

        case "floor()":
        const atfloor = name.map((n) => Math.floor(n)).join(" , ");
        setOutput(`Round: ${atfloor}`);
        break;

        case "trunc()":
        const Itemcbrt = name.map((n) => Math.trunc(n)).join(", ");
        setOutput(`cbrt: ${Itemcbrt}`);
        break;

      default:
    }
  };

  return (
    <>
      <div className="w-full mx-auto p-6 rounded-2xl shadow-lg border border-gray-200 bg-white">
        <h1 className="text-2xl font-bold text-center">{title}</h1>
        <p className="border border-gray-300 p-2 rounded-lg my-3 bg-indigo-900 text-white">
          {disc}
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <label className="block">
            <span className="block font-semibold text-gray-700 dark:text-gray-300 mb-1">
              Input String: {input}
            </span>

            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm dark:text-white"
              type="text"
              placeholder="Add a Value"
              value={name}
              onChange={handleNameChange}
            />
            {name.length === 0 && (
              <p className="text-red-500 text-sm font-medium">Input is empty</p>
            )}
          </label>

          <button
            disabled={disablebtn}
            className={`${
              disablebtn ? "bg-indigo-300" : "bg-indigo-900 hover:bg-indigo-800"
            } text-white w-full font-medium py-2 rounded-lg shadow-md transition`}
            type="submit"
          >
            {method} Submit
          </button>

          {output.length > 0 && (
            <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm">
              <span className="font-bold text-gray-700 dark:text-gray-200 mt-4">
                Output:
              </span>
              <p className="text-indigo-500 break-words">{output}</p>
            </div>
          )}
        </form>
      </div>
    </>
  );
}

export default StringCompiler;
