import React from 'react';
import { Field } from 'formik';

const TextInput = ({ name, label }) => (
  <div style={{ marginBottom: '1rem' }}>
    <label htmlFor={name}>{label}</label><br />
    <Field type="text" name={name} placeholder={label} />
  </div>
);

export default TextInput;
