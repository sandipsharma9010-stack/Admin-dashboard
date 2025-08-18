import React from "react";
import MathCompiler from "./MathCompiler"


function MathPro() {
  return (
    <>
      <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
        <MathCompiler
          method="ABS"
          title="Abs"
          methodfun="abs()"
          disc="Method returns the absolute value of a number.."
          input="-5"
        />

        <MathCompiler
          method="MAX"
          title="Max"
          methodfun="max()"
          disc="Math object returns the largest of the numbers provided as input parameters."
          input="Mahadev"
        />

        <MathCompiler
          method="MIN"
          title="Min"
          methodfun="min()"
          disc="Math object returns the smallest of the numbers provided as input parameters."
          input="Mahadev"
        />
        <MathCompiler
          method="ROUND"
          title="Round"
          methodfun="round()"
          disc="This method rounds a number to the nearest integer."
          input="Mahadev"
        />

        <MathCompiler
          method="CEIL"
          title="Ceil"
          methodfun="ceil()"
          disc="number up to the nearest integer."
          input="Mahadev"
        />

        <MathCompiler
          method="FLOOR"
          title="Floor"
          methodfun="floor()"
          disc="This function rounds a number down to the nearest whole integer."
          input="Mahadev"
        />

        <MathCompiler
          method="TRUNC"
          title="Trunc"
          methodfun="trunc()"
          disc="method returns the integer part of the provided number."
          input="Mahadev"
        />
       
      </div>
    </>
  );
}

export default MathPro;
