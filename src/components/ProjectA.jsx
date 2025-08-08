import React, { useState } from "react";
import ActionBar from "./ActionBar";
import Tables from "./Tables";

function ProjectA() {
  const [data, setData] = useState("Team");
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
  

// Callback function take the data form the child component
  const handleChildData = (newData) => {
    setData(newData);
  };

// Callback function take the data value form the child component
  const handleInputChange = (event) => {
    setInputValue(event);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-amber-300">{data}</h2>
      <h3>{inputValue}</h3>
      <ActionBar
        onDataSend={handleChildData}
        onInputChange={handleInputChange}
      />
      <Tables/>
    </div>
  );
}

export default ProjectA;
