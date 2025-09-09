import React from 'react';
import { Field } from 'formik';

const SelectInput = ({ name, label, options }) => (
  <div style={{ marginBottom: '1rem' }}>
    <label htmlFor={name}>{label}</label><br />
    <Field as="select" name={name}>
      <option value="">Select {label}</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </Field>
  </div>
);

export default SelectInput;
