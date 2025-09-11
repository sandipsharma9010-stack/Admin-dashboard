import React, { useState, useEffect } from 'react';
import FormComponent from './FormComponent';
import UserList from './UserList';

const TaskData = () => {
  const [form, setForm] = useState({ name: '', address: '', age: '' });
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  console.log(editIndex)

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (storedData) {
      setData(storedData);
    }
  }, []);

  const updateLocalStorage = (newData) => {
    localStorage.setItem('userData', JSON.stringify(newData));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.address || !form.age) {
      alert("All fields are required.");
      return;
    }

    let newData;
    if (editIndex !== null) {
      newData = [...data];
      newData[editIndex] = form;
      setEditIndex(null);
      
    } else {
      newData = [...data, form];
    }

    setData(newData);
    updateLocalStorage(newData);
    setForm({ name: '', address: '', age: '' });
  };

  const handleEdit = (index) => {
    setForm(data[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
    updateLocalStorage(newData);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>React CRUD with LocalStorage</h2>
      <FormComponent
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        editIndex={editIndex}
      />
      <UserList
        data={data}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default TaskData;
