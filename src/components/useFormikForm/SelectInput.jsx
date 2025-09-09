import React from "react";

const SelectInput = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  touched,
  options,
}) => (
  <div>
    <label className="block font-medium text-gray-700 mb-1">{label}</label>
    <select
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    >
      <option value="">Select the option</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
    {touched && error && <div className="text-red-500">{error}</div>}
  </div>
);

export default SelectInput;
