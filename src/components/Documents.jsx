import React from "react";
import DataAxios from "./Api/DataAxios";
import DataFetch from "./Api/DataFetch";
import DataDelete from "./Api/DataDelete";
import PromosesData from "./Api/PromosesData";
import SignupForm from "./Promises/SignupForm";
import UserProfile from "./Promises/UserProfile";
import UniqueData from "./Promises/UniqueData";
import ParentForm from "./commonForm/ParentForm";
import ParentComponent from "./commoncomponents/ParentComponent";



function Documents() {
  //   try{
  // // console.log("I am inside a try")
  // console.log(age)
  //   }
  //   catch(error){
  // console.log("I am inside a catch", error)

  //   }

  //   finally{
  //     console.log("I will run everytime")

  //   }



  return (
    <>

         <ParentComponent/>
    <ParentForm/>
        <UniqueData/>
    <UserProfile/>
<SignupForm/>
 
      <h1 className="text-2xl font-bold">Documents</h1>

      <div className="bg-white dark:bg-gray-900 font-bold w-100">
        <h1 className="text-gray-900 dark:text-white">Charts are beautyful</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
          repellat.
        </p>
      </div>
  
      <PromosesData />
      {/* <DataDelete /> */}
      <DataAxios />
      {/* <DataFetch /> */}

 
    </>
  );
}

export default Documents;
