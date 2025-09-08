import React from 'react'

function PromisData() {

    let myPromise = new Promise((resolve, reject)=>{

        let x = 0
        if(x == 0){
            resolve("Data is succesfully zero")
        }
        else{
            reject("Error")
        }
    })

    myPromise
    .then((message)=>{
        console.log(message)
    })
    .catch((error)=>{
        console.log(error)
    })
  return (
    <>
    
    </>
  )
}

export default PromisData