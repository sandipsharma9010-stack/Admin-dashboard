import React from "react";

function EvenOdd() {
  let checkEven = new Promise((resolve, reject) => {
    let number = 4;
    if (number % 2 === 0) {
      resolve("The number is Even");
    } else reject("The number is odd!");
  });
  checkEven
    .then((message) => console.log(message))
    .catch((error) => console.error(error));
  return(
     <>
     <h1> Hello Promises</h1>
     </>
     )
}

export default EvenOdd;
