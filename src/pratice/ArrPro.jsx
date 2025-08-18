import { elements } from "chart.js";
import React, { useState } from "react";
import Compiler from "./Compiler";

function ArrPro() {
  // give the array length

//   const arr = [1, 2, 3, 4, 5, 6, 7];
//   const arr1 = arr.length;

//   const names = ["Alice", "Bob", "Charlie"];
//   for (let i = 0; i < names.length; i++) {
//     console.log(`Hello, ${names[i]}!`);
//   }

//   let stack = [];
//   stack.push("First");
//   stack.push("Second");
//   console.log("Stack length after pushes:", stack.length);

//   //   toString method convert the array into string

//   let num = [1, 2, 3];
//   let strNum = num.toString();
//   console.log(strNum);
//   console.log(typeof strNum);

//   const fruits = ["Banana", "Orange", "Apple", "Mango"];
//   const strNum1 = fruits.toString();
//   console.log(strNum1);

//   // at method give the index value form the array

//   let numAt = [1, 2, 3, 5, 6, 7];
//   let numArr = numAt.at(2);
//   let numArr2 = numAt.at(-1);
//   console.log(numArr, numArr2, "At method");

//   const greeting = "Hello Sandeep";
//   const greet = greeting.at(4);
//   console.log(greet)

//   // join method give the space and we can any symbol using join method

//   const js = ["Banana", "Orange", "Apple", "Mango"];
//   const jsn = js.join(" * ");
//   console.log(jsn);

//   let s = "kumar";
//   let s1 = s.split("").reverse().join("");
//   console.log(s1);

//   const characters = ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"];

//   const chr = characters.join("");
//   console.log(chr);

//   //   pop method remove the last elements from the array
//   const pp = ["Banana", "Orange", "Apple", "Mango"];

//   const pp1 = pp.pop();
//   console.log(pp1);

//   let users = [
//     { id: 1, name: "Ana" },
//     { id: 2, name: "Ben" },
//   ];

//   let lastUser = users.pop();
//   console.log(lastUser);
//   console.log(users);

//   let msg = ["msg1", "msg2"];

//   if (msg.length > 0) {
//     let latest = msg.pop();
//     console.log("deleted:", latest);
//   }

//   //   push method add the last elements into the array
//   const arrItem = ["Banana", "Orange", "Apple", "Mango"];

//   const ps1 = arrItem.push("kiwi");
//   console.log(arrItem);

//   let msp = ["msg1", "msg2"];

//   if (msg.length > 0) {
//     let latest = msp.push("sandeep");
//     console.log("added:", latest);
//   }
//   console.log(msp);

//   let evenNumber = [];
//   for (let i = 2; i <= 10; i += 2) {
//     evenNumber.push(i);
//   }
//   console.log(evenNumber);

//   // shift methid remove the first element from the array
//   const ss = ["Banana", "Orange", "Apple", "Mango"];
//   const ss1 = ss.shift();
//   console.log(ss);

//   let mss = ["msg1", "msg2"];

//   if (mss.length > 0) {
//     let latest = mss.shift();
//     console.log("deleted:", mss);
//   }

//   let queue = ["job1", "job2"];

//   if (queue.length > 0) {
//     let current = queue.shift();
//     console.log("Handling", queue);
//   } else {
//     console.log("Queue is empty");
//   }

//   //   unshift method add the elements in a first
//   const pss = ["Banana", "Orange", "Apple", "Mango"];
//   const pss1 = pss.unshift("kiwi");
//   console.log(pss);



//   let pus = ["msg1", "msg2"];

//   if (pus.length > 0) {
//     let latest = pus.unshift("msg0");
//     console.log("added:", pus);
//   }




//   let queue1 = ["job1", "job2"];

//   if (queue1.length > 0) {
//     let current = queue1.unshift("jobreact");
//     console.log("job Added", queue1);
//   } else {
//     console.log("Queue is empty");
//   }



//   let con = [1,2,3,4,5,6,7,8,];
//   let con2 = [45,67,89,65,43];

//   let combine = con.concat(con2);
//   console.log(combine)


//   const part1 = "welcome";
//   const part2 = "to";
//   const part3 = "Javascript";

//   const sentence = part1.concat(" ", part2, " ", part3);
//   console.log(sentence)

// const [array, setArray] = useState([1,2,3,4,5])

//   const handlePop =(value)=>{
//       const newArray = [...array, value];
//       newArray.pop()
//       setArray(newArray)

//   }

  return (
    <>
    <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
  <Compiler method="POP" title="Pop" methodfun="pop()" disc = "Removes the last element" input= "Itme1,Item2,Itme3,Itme4"/>
  <Compiler method="PUSH" title="Push"  methodfun="push()" disc = "Add the last element" input= "Itme1,Item2,Itme3,Itme4"/>
  <Compiler method="SHIFT" title="Shift" methodfun="shift()" disc = "Removes the first element" input= "Itme1,Item2,Itme3,Itme4"/>
  <Compiler method="UNSHIFT" title="UnShift" methodfun="unshift()" disc = "Add the first element" input= "Itme1,Item2,Itme3,Itme4"/>
  <Compiler method="CONCAT" title="Concat" methodfun="concat()" disc = "joins two or more strings or arrays" input= "Itme1,Item2,Itme3,Itme4" />
  <Compiler method="FLAT" title="Flat" methodfun="flat()" disc = "concatenates sub-array elements" input= "Itme1,Item2,Itme3,Itme4 [item5, [item6]]" />
  <Compiler method="SLICE" title="Slice" methodfun="slice()" disc = "returns selected elements in a new array" input= "Itme1,Item2,Itme3,Itme4"/>
   <Compiler method="SPLICE" title="Splice" methodfun="splice()" disc = "used to remove, replace or insert items starting at a chosen index" input= "Itme1,Item2,Itme3,Itme4"/>
</div>




      {/* <h4>{arr1} </h4>
      <h4>{stack}</h4>
      <h4>{strNum}</h4>
      <h4>{strNum1}</h4>
      <h4>{numArr}</h4>
      <h4>{greet}</h4>
      <h4>{jsn}</h4>
      <h4>{s1}</h4>
      <h4>{chr}</h4>
      <h4>{pp}</h4>
      <h4>{msg}</h4>
      <h4>{ps}</h4>
      <h4>{msp}</h4>
      <h4>{evenNumber}</h4>
      <h4>{ss}</h4>
      <h4>{mss}</h4>
      <h4>{queue}</h4>
      <h4>{pss}</h4>
      <h4>{pus}</h4>
      <h4>{queue1}</h4>
      <h4>{combine}</h4>
      <h4>{sentence}</h4> */}

    </>
  );
}

export default ArrPro;
