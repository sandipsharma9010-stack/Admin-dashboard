import React from "react";

function uniqueData() {
  const ans = new Promise((resolve, reject) => {
    let n = Math.floor(Math.random() * 10);

    if (n < 5) {
      return resolve();
    } else {
      return reject();
    }
  });

  async function checkNumber() {
    try {
      let reslut = await ans;
      console.log("Below");
    } catch (error) {
      console.log("Above");
    }
  }
  checkNumber();

  // ans.then(()=>{
  //     console.log("below")
  // })
  // .catch(()=>{
  //     console.log("above")
  // })

  return <></>;
}

export default uniqueData;
