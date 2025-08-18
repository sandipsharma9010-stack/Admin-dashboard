import React, { useState } from "react";

function StringCompiler({ method, title, methodfun, disc, input }) {
  const [name, setName] = useState("Mahadev");
  const [output, setOutput] = useState("");

  const disablebtn = name.length === 0;

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    switch (methodfun.toLowerCase()) {
      case "length()":
        setOutput(`Length: ${name.length}`);
        break;

      case "at()":
        const atChar = name.at(1);
        setOutput(`Character at index 1: ${atChar}`);
        break;

      case "concat()":
        const concatenated = name.concat(" Item5");
        setOutput(`Concatenated String: ${concatenated}`);
        break;

      case "slice()":
        const sliced = name.slice(1, 4);
        setOutput(`Sliced String (1,4): ${sliced}`);
        break;

      case "touppercase()":
        const upper = name.toUpperCase();
        setOutput(`Uppercase: ${upper}`);
        break;

      case "tolowercase()":
        const lower = name.toLowerCase();
        setOutput(`Lowercase: ${lower}`);
        break;

         case "replace()":
        const ItemReplace = name.replace("Mahadev", "Sandeep");
        setName(ItemReplace)
        setOutput(`Lowercase: ${ItemReplace}`);
        break;


        case "padstart()":
        const ItemPadStart = name.padStart(4, "0");
        setOutput(`Padstart: ${ItemPadStart}`);
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
              <p className="text-red-500 text-sm font-medium">
                Input is empty
              </p>
            )}
          </label>

          <button
            disabled={disablebtn}
            className={`${
              disablebtn
                ? "bg-indigo-300"
                : "bg-indigo-900 hover:bg-indigo-800"
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
