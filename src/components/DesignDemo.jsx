import React,{useState} from "react";
import useCounter from "./useCounter";
import HigherCmp from "./HigherCmp";
const DesignDemo = () => {

  // const { count, increment, decrement, reset } = useCounter(0)
  

    // let count = 0; 
    // const intervalId = setInterval(() => {

    //     count++;
    //     console.log(count)

    //     if(count === 5){
    //         clearInterval(intervalId)
    //     } 
    //   console.log("sandeep");
    // }, 1000);

  return (
    <>
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

          <HigherCmp/>

    </>
  );
};
export default DesignDemo;
