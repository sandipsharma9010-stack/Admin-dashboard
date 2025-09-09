import React from "react";

function TextArea({ label, name, value, onChange, onBlur, error, touched }) {
  return (
    <>
    <label className="block font-medium text-gray-700 mb-1">{label}</label>
      <textarea
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      ></textarea>

      {touched && error && <div className="text-red-500">{error}</div>}
    </>
  );
}

export default TextArea;
