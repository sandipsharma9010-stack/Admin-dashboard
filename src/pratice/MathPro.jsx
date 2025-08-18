import React from 'react'

function MathPro() {

// math abs method give the positive value
let dataab = Math.abs(-10)
console.log(dataab);

let numbers = [-2, 4, -7, 3];
let positiveNumbers = numbers.map(num => Math.abs(num));
console.log(positiveNumbers); 


let a = 10;
let b = 25;
let combine = Math.abs(a - b)
console.log(combine); 


// math round method give the round value  value (4.6)= 5 , (4.4)= 4


let rnd = Math.round(4.3)
console.log(rnd); 

let rnd1 = Math.round(4.7)
console.log(rnd1); 


let rnd2 = Math.round(-4.3)
console.log(rnd2); 


let price = 99.99;
let taxRate = 0.07; 
let total = price * (1 + taxRate); 
console.log(Math.round(total)); 


// trunc method give the integer value

let trc = Math.trunc(4.9)
console.log(trc); 

let trc1 = Math.trunc(-4.9)
console.log(trc1); 

let trc2 = Math.trunc("4.9")
console.log(trc2); 



// Math max methos give the max value from the array

let mx = [2,45,67,54,55];
let dmax = Math.max(...mx);
console.log(dmax, "Max value is here");


let mx1 = Math.max(2,45,67,54,55);
console.log(mx1)

let mx2 = mx.reduce((a, b)=> Math.max(a, b))
console.log(mx2)


// Math max methos give the min value from the array


let min = [2,45,67,54,55];
let dmin = Math.min(...min);
console.log(dmin, "Max value is here");


let min1 = Math.min(2,45,67,54,55);
console.log(min1)

let min2 = mx.reduce((a, b)=> Math.min(a, b))
console.log(min2)




// math POW method give the power value


const pw = Math.pow(2, 2);
console.log(pw)

const pw1 = Math.pow(-2, -2);
console.log(pw1)



  return (
   <>
   <h1>abs value {dataab}</h1>
   <h4>{positiveNumbers}</h4>
   <h4>{combine}</h4>
    <h4>{rnd}</h4>
    <h4>{rnd1}</h4>
    <h4>{rnd2}</h4>
    <h4>{total}</h4>
    <h4>{trc}</h4>
    <h4>{trc1}</h4>
     <h4>{trc2}</h4>
     <h4>{dmax}</h4>
     <h4>{mx1}</h4>
      <h4>{mx2}</h4>
       <h4>{dmin}</h4>
        <h4>{min1}</h4>
         <h4>{min2}</h4>
         <h4>{pw}</h4>
          <h4>{pw1}</h4>
          
   </>
  )
}

export default MathPro