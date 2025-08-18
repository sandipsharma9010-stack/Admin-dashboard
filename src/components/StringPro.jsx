import React from "react";
import StringCompiler from "./StringCompiler";

function StringPro() {
  return (
    <>
      <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
        <StringCompiler
          method="LENGTH"
          title="Length"
          methodfun="length()"
          disc="The length property returns the length of a string."
          input="Mahadev"
        />
        <StringCompiler
          method="AT"
          title="At"
          methodfun="at()"
          disc="allowing for more flexible access to elements within arrays and characters within strings."
          input="Mahadev"
        />
        <StringCompiler
          method="CONCAT"
          title="Concat"
          methodfun="concat()"
          disc="joins two or more strings or arrays."
          input="Mahadev"
        />

         <StringCompiler
          method="SLICE"
          title="Slice"
          methodfun="slice()"
          disc="method returns selected elements in a new array."
          input="Mahadev"
        />


        <StringCompiler
          method="TOUPPERCASE"
          title="toUpperCase"
          methodfun="touppercase()"
          disc="returns the value of the string converted to uppercase."
          input="Mahadev"
        />
        <StringCompiler
          method="TOLOWERCASE"
          title="toLowerCase"
          methodfun="tolowercase()"
          disc="returns the value of the string converted to lowercase."
          input="Mahadev"
        />

        <StringCompiler
          method="REPLACE"
          title="replace"
          methodfun="replace()"
          disc="returns a new string with one, some, or all matches of a pattern replaced by a replacement ."
          input="Mahadev"
        />

        <StringCompiler
          method="PADSTART"
          title="padstart"
          methodfun="padstart()"
          disc="pads this string with a given string (repeated and/or truncated, if needed) so that the resulting string has a given length."
          input="Mahadev"
        />
      </div>
    </>
  );
}

export default StringPro;
