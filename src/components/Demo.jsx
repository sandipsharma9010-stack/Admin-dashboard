import React from "react";

function Demo() {
  const score = 100;
  const grade =
    score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
  score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : score >= 60
    ? "D"
    : "F";



    const person = {
        firstName:"John",
        LastName:"Doe",
    }

    const car =['Brezza','BMW','Audi','Mercedes','Ferrari'];
    console.log(car)
  return (
    <>
      <h1>Hello</h1>
    </>
  );
}

export default Demo;




import React, { useState, useEffect } from 'react';
import FormComponent from './FormComponent';

const TaskData = () => {
  // State to manage form inputs
  const [form, setForm] = useState({ name: '', address: '', age: '' });

  // State to store all submitted data
  const [data, setData] = useState([]);

  // State to track if editing an entry (null = not editing)
  const [editIndex, setEditIndex] = useState(null);

  // Load data from localStorage when component mounts
  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  // Save updated data to localStorage
  const updateLocalStorage = (newData) => {
    localStorage.setItem('userData', JSON.stringify(newData));
  };

  // Handle input field changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission (add or update)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!form.name || !form.address || !form.age) {
      alert('All fields are required.');
      return;
    }

    let updatedData;

    if (editIndex !== null) {
      // Update existing entry
      updatedData = [...data];
      updatedData[editIndex] = form;
      setEditIndex(null);
    } else {
      // Add new entry
      updatedData = [...data, form];
    }

    setData(updatedData);
    updateLocalStorage(updatedData);

    // Reset form
    setForm({ name: '', address: '', age: '' });
  };

  // Populate form for editing
  const handleEdit = (index) => {
    setForm(data[index]);
    setEditIndex(index);
  };

  // Delete entry
  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
    updateLocalStorage(updatedData);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>React CRUD with LocalStorage</h2>

      {/* Form Component */}
      <FormComponent
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        editIndex={editIndex}
      />

      {/* Data List */}
      <ul>
        {data.map((item, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <strong>Name:</strong> {item.name} | <strong>Address:</strong> {item.address} | <strong>Age:</strong> {item.age}
            <br />
            <button onClick={() => handleEdit(index)} style={{ marginRight: '10px' }}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskData;





	


