import React from "react";

const Modal = ({ show, onClose, children }) => {
  // if (!show) return null;

  return (
    <>
    { show &&
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-end">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            ❌
          </button>
          {children}
        </div>
      </div>
      }
    </>
  );
};

export default Modal;
