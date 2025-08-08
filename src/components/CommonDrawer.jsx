import React from "react";
import { HiX } from "react-icons/hi";

const CommonDrawer = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center px-4 py-3 border-b shadow-sm">
        <h2 className="text-lg font-semibold">Right Panel</h2>
        <HiX
          className="w-6 h-6 text-gray-700 cursor-pointer"
          onClick={onClose}
        />
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-600">
          This is the offcanvas drawer content. You can place settings,
          notifications, or anything else here.
        </p>
      </div>
    </div>
  );
};

export default CommonDrawer;
