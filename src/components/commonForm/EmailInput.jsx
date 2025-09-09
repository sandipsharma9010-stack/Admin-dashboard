import React from 'react';
import { Field } from 'formik';

const EmailInput = ({ name, label }) => (
  <div style={{ marginBottom: '1rem' }}>
    <label htmlFor={name}>{label}</label><br />
    <Field type="email" name={name} placeholder={label} />
  </div>
);

export default EmailInput;
