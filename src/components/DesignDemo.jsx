import React, { useState } from "react";
import useCounter from "./useCounter";
import HigherCmp from "./HigherCmp";
const DesignDemo = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  // let counts = 0;
  // const intervalId = setInterval(() => {

  //     counts++;
  //     console.log(count)

  //     if(counts === 5){
  //         clearInterval(intervalId)
  //     }
  //   console.log("sandeep");
  // }, 1000);

  let counters = 0;
  const setid = setInterval(() => {
    counters++;
    // console.log(counters);
    if (counters === 5) {
      clearInterval(setid);
    }
    // console.log("sharma");
  }, 1000);

  // function greet(name){
  //   console.log(`Hello, ${name}`);
  // }
  // setTimeout(greet, 5000, "Alice")

  //

  function x() {
    for (let i = 1; i <= 10; i++) {
      setTimeout(() => {
        console.log(i);
      },  i * 1000);
    }

    console.log("learn");
  }
  x();

  return (
    <>
      <HigherCmp />
      <div className="flex justify-stretch items-end h-100 md:flex-row p-10 border border-gray-400 gap-4 rounded">
        <div className="bg-purple-500 p-5 order-last flex justify-center item-center">
          <p>1</p>
        </div>
        <div className="bg-purple-500 p-5 order-2">
          <p>2</p>
        </div>
        <div className="bg-purple-500 p-5">
          <p>3</p>
        </div>
        <div className="bg-purple-500 p-5 order-first">
          <p>4</p>
        </div>
      </div>

      <p>{count}</p>
      <div className="gap-5">
        <button className="bg-sky-500 p-2" onClick={increment}>
          Increment
        </button>
        <button className="bg-gray-500 p-2" onClick={decrement}>
          Decrement
        </button>
        <button className="bg-gray-500 p-2" onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
};
export default DesignDemo;
