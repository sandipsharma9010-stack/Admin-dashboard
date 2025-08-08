import React from "react";

const Drawer = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-end w-full h-full">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            <button 
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ❌
            </button>
            <h2 className="text-xl font-semibold mb-2">Right Panel</h2>
            <p>This is a drawer content area. You can place anything here.</p>
            {children}
          </div>
        </div>
      )}


    </>
  );
};

export default Drawer;
