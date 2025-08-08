import React from "react";

function Pra() {
  return (
    <>
      <div className="bg-yellow-500">Hello Everyone</div>

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-sm text-center">
          <h2 class="text-2xl font-bold text-green-800 mb-2">Pro Plan</h2>
          <p className="text-gray-600 leading-relaxed mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            architecto alias neque placeat explicabo saepe! Ad, culpa? Hic sed
            laboriosam est illo, excepturi quis ipsum. Iusto architecto sunt
            numquam autem?
          </p>
          <div className="text-4xl font-bold text-blue-500">
            999 <span className="text-sm text-gray-500">/mo</span>
          </div>
          <ul className="list-disc list-inside text-left mt-4 text-gray-500">
            <li>Unlimited Projets</li>
            <li>100 GB Storage</li>
            <li>Priority Support</li>
          </ul>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-5 transition duration-300 ease-in-out hover:bg-blue-600">
            Get Stared
          </button>
        </div>
      </div>
    </>
  );
}

export default Pra;
