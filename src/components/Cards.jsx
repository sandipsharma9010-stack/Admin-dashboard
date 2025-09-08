import React from "react";
import Profiles from "./Profiles";

function Cards() {


  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-6 my-8">
        {Profiles?.map((profile, index) => (
            <div className="bg-white rounded-lg shadow-lg p-4">
          <img
            className="w-20 h-20 rounded-full mx-auto"
            src={profile.image}
            alt="Profile"
          />
          <div className="mt-4">
            <h3 className="text-lg font-medium text-black">
              {profile.name}
            </h3>
            <p className="text-gray-500">
              {profile.description}
            </p>
          </div>
        </div>
        ))}
      </div>



    </>
  );
}

export default Cards;
