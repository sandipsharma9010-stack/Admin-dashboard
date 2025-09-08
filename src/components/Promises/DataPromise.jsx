import React from "react";
import SumAdd from "./SumAdd";

function DataPromise() {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let san = "sandeep";
      if (san == "sandeep") {
        resolve("Data is here");
      } else {
        reject("Data is not found");
      }
    }, 2000);
  });

  myPromise
  .then((message) => {
    console.log(message);
  })

  .catch((error) => {
       console.log(error);
      });

 
  return(
    
    <>
    
    <SumAdd/>
    
    </>
);
}

export default DataPromise;
