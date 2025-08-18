import React, { useState } from "react";

function Compiler({ method, title, methodfun, disc, input }) {
  const [name, setName] = useState([
    "Itme1",
    "Item2",
    "Itme3",
    "Itme4",
  ]);
  const [output, setOutput] = useState([]);


  const disablebtn = name.length === 0;

  const handleNameChange = (event) => {
    setName(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Submitted Name:", methodfun);
    //  methodfun == "pop()" ? console.log(name.pop(),"sdsdsdsd") : console.log("no")

    switch (methodfun) {
    case "pop()":
      const newArray = [...name];
      const poppedItem = newArray.pop();
      setName(newArray);
      setOutput(`POP: ${poppedItem}`);
      break;

    case "push()":
      const newArray1 = [...name];
      const itemToPush = "Itme5"; 
      newArray1.push(itemToPush);
      setName(newArray1);
      setOutput(`Pushed: ${newArray1}`);
      break;

    case "shift()":
      const newArray2 = [...name];
      const shiftedItem = newArray2.shift(); 
      setName(newArray2);
      setOutput(`Removed: ${shiftedItem}`);
      break;

      case "unshift()":
      const newunshift = [...name];
      const itemToUnshift = "Itme5"; 
      newunshift.unshift(itemToUnshift); 
      setName(newunshift);
      setOutput(`Add: ${newunshift}`);
      break;

      case "concat()":
      const newConcat = [...name];
      const itemToConcat = ["Itme5"]; 
      const concatenatedArray = newConcat.concat(itemToConcat);
      setName(concatenatedArray);
      setOutput(`concat: ${concatenatedArray}`);
      break;

       case "flat()":
      const newFlat = [...name];
      const itemToFlat = ["Itme5",["Itme6"]]; 
      const FlatArray = newFlat.concat(itemToFlat);
      setName(FlatArray);
      setOutput(`flat: ${FlatArray}`);
      break;

      case "slice()":
      const newSlice = [...name];
      const itemToSlice = newSlice.slice(1,4); 
      setName(itemToSlice);
      setOutput(`slice: ${itemToSlice}`);
      break;

      case "splice()":
      const newSplice = [...name];
      const itemToSplice = newSplice.splice(1,3); 
      setName(newSplice);
      setOutput(`splice: ${itemToSplice}`);
      break;

    default:
      break;
  }
  };

  return (
    <>
      <div className="w-full mx-auto p-6 rounded-2xl shadow-lg border border-gray-200 bg-white from-white">
        <h1 className="text-2xl font-bold text-center">{title}</h1>
        <p className="border border-gray-300 bg- p-2 rounded-lg my-3 bg-indigo-900 text-white">{disc}</p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <label className="block">
            <span className="block font-semibold text-gray-700 dark:text-gray-300 mb-1">
              InputArr = {input}
            </span>

            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm dark:text-white"
              type="text"
              placeholder="Add a Value"
              value={name}
              onChange={handleNameChange}
            />
            {name.length === 0 && (<p className="text-red-500 text-sm font-medium">Items are Empty</p>) }
            
          </label>
          <button disabled={disablebtn}
            className={`${ disablebtn ? 'bg-indigo-300 ' : 'bg-indigo-900 hover:bg-indigo-900'} text-white w-full font-medium py-2 rounded-lg shadow-md transition`}
            type="submit"
          >
            {method} Submit
          </button> 
 
          {!output.length == 0 && <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm">
            <span className="font-bold text-gray-700 dark:text-gray-200 mt-4">
              Output:
            </span>
            <p className="text-indigo-500 break-words">{output}</p>
          </div>
}
        </form>
      </div>
    </>
  );
}

export default Compiler;
