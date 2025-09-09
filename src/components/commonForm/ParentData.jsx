// App.jsx
import React from 'react';
import CommonForm from './Commonform/CommonForm';

const ParentData = () => {
  const formFields = [
    { name: 'fullName', label: 'Full Name', type: 'text' },
    { name: 'age', label: 'Age', type: 'number' },
    { name: 'email', label: 'Email Address', type: 'email' },
    {
      name: 'gender',
      label: 'Gender',
      type: 'select',
      options: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' },
      ],
    },
  ];

  const initialValues = {
    fullName: '',
    age: '',
    email: '',
    gender: '',
  };

  const handleSubmit = (values) => {
    console.log('Form Submitted:', values);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Modular Form with Separate Field Components</h2>
      <CommonForm
        fields={formFields}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default ParentData;
