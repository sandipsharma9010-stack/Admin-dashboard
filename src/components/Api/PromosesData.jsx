import React from "react";

function PromosesData() {
  let myPromise = new Promise((resolve, reject) => {
    let success = 10;
    if (success > 5) {
      // resolve("Data successfully fetched!");
    } else {
      reject("Failed to fetch data.");
    }
  });
  myPromise
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
    })

    .finally(() => {
      // console.log("Promise operation completed.");
    });

  return (
    <>
      <h1>Promises</h1>
    </>
  );
}

export default PromosesData;
