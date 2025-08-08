import React from "react";

function Demo() {
  const score = 100;
  const grade =
    score >= 90
      ? "A"
      : score >= 80
      ? "B"
      : score >= 70
      ? "C"
      : score >= 60
      ? "D"
      : "F";
  score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : score >= 60
    ? "D"
    : "F";



    const person = {
        firstName:"John",
        LastName:"Doe",
    }

    const car =['Brezza','BMW','Audi','Mercedes','Ferrari'];
    console.log(car)
  return (
    <>
      <h1>Hello</h1>
    </>
  );
}

export default Demo;
