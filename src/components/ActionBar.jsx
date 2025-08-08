import Modal from "./Modal";
import React, { useState } from "react";
import { FiSearch, FiPlusSquare, FiTrash2, FiCopy } from "react-icons/fi";
import Pagination from "./Pagination";

const ActionBar = ({ onDataSend, onInputChange }) => {
  const [inputData, setInputData] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSendData = () => {
    onDataSend("action data is here for create");
    setIsModalOpen(true);
  };

  const handleInputChange = (event) => {
    setInputData(event.target.value);
  };

  const handleInputClick = () => {
    onInputChange(inputData);
  };

  const handleDeleteClick = () => {
    setInputData("");
    onInputChange("");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* ActionBar Container */}
      <div className="flex flex-wrap items-center gap-4 p-4 px-6 md:px-10 my-5 justify-between">
        {/* Search Input Box */}
        <div className="flex items-center bg-white rounded-md shadow-md px-2 py-1 flex-grow max-w-xs">
          <FiSearch className="text-gray-900 mr-2" />
          <input
            type="text"
            placeholder="Enter Text"
            value={inputData}
            onChange={handleInputChange}
            className="w-full focus:outline-none text-gray-700 placeholder-gray-400 px-2"
          />
        </div>

        {/* Search Button */}
        <button
          onClick={handleInputClick}
          className="bg-[#2D8BBA] text-white px-4 py-2 rounded-md hover:bg-[#256f91] transition whitespace-nowrap"
        >
          Search
        </button>

        {/* Create, Delete, Duplicate, Pagination */}
        <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start">
          <button
            onClick={handleSendData}
            className="flex items-center gap-1 bg-gray-800 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-700 transition whitespace-nowrap"
          >
            <FiPlusSquare size={16} />
            Create
          </button>

          <button
            onClick={handleDeleteClick}
            className="flex items-center gap-1 bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-500 transition whitespace-nowrap"
          >
            <FiTrash2 size={16} />
            Delete
          </button>

          <button
            className="flex items-center gap-1 bg-sky-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-sky-400 transition whitespace-nowrap"
          >
            <FiCopy size={16} />
            Duplicate
          </button>

          {/* Pagination Component */}
          <div className="whitespace-nowrap">
            <Pagination />
          </div>
        </div>
      </div>

      {/* Modal for Create */}
      <Modal show={isModalOpen} onClose={closeModal} size="xl">
        <div className="bg-white p-4">
          <p className="text-gray-600">Please Enter Your Details</p>

          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none text-gray-700 placeholder-gray-400 mt-4"
          />
          <input
            type="text"
            placeholder="Enter Your Email"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none text-gray-700 placeholder-gray-400 mt-4"
          />
          <input
            type="text"
            placeholder="Enter Your Password"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none text-gray-700 placeholder-gray-400 mt-4"
          />

          <button className="bg-blue-500 flex items-center mx-auto text-white px-4 py-2 rounded-md mt-5 transition duration-300 ease-in-out hover:bg-blue-600">
            Submit
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ActionBar;
