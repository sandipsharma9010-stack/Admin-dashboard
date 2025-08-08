import React from "react";
import Child from "Child";

function Parent() {
  const parentData = "parent data";
  return (
    <>
      <Child data={parentData} />
    </>
  );
}

export default Parent;
