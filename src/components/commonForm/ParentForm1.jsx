// App.jsx
import React from 'react';
import CommonForm from './components/CommonForm';

const ParentForm1 = () => {
  const formFields = [
    { name: 'username', label: 'Username', type: 'text' },
    { name: 'age', label: 'Age', type: 'number' },
    { name: 'email', label: 'Email Address', type: 'email' },
    {
      name: 'role',
      label: 'Role',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
        { label: 'Guest', value: 'guest' },
      ],
    },
  ];

  const initialValues = {
    username: '',
    age: '',
    email: '',
    role: '',
  };

  const handleFormSubmit = (values) => {
    console.log('Form submitted with:', values);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Dynamic Form</h2>
      <CommonForm
        fields={formFields}
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default ParentForm1;
