import React from 'react';
import { Field } from 'formik';

const NumberInput = ({ name, label }) => (
  <div style={{ marginBottom: '1rem' }}>
    <label htmlFor={name}>{label}</label><br />
    <Field type="number" name={name} placeholder={label} />
  </div>
);

export default NumberInput;
