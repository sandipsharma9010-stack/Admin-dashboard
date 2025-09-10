
import React from 'react';

const NumberInput = ({ label, name, value, onChange, onBlur, error, touched,placeholder }) => (
  <div>
    <label className='block font-medium text-gray-700 mb-1'>{label}</label>
    <input className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
      type="number"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
    {touched && error && <div className='text-red-500'>{error}</div>}
  </div>
);

export default NumberInput;
