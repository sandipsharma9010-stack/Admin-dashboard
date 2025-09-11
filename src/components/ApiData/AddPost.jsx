import React, { useState } from "react";
import axios from "axios";

function AddPost() {
  const [formData, setFormData] = useState({ title: "", body: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData
      );
      console.log("Post Created:", response.data);
    } catch (error) {
      console.log("Error Creating Post:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          className="w-50 border"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Body:</label>
        <textarea
          className="w-50 border"
          name="body"
          value={formData.body}
          onChange={handleChange}
        ></textarea>
        <br />
        <button className="bg-blue-600 px-2 py-2 rounded" type="submit">
          {" "}
          Add Post
        </button>
      </form>
    </>
  );
}

export default AddPost;
