import React, { useState, useEffect } from "react";
import axios from "axios";

function DataDelete() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setData(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      console.log("Post deleted:", id);
      setData((prevData) => prevData.filter((post) => post.id !== id));
    } catch (error) {
      console.log("Error deleting post:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2>Posts:</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id} className="mb-2">
            {post.title}
            <button
              className="ml-4 bg-indigo-500 text-white px-2 py-1 rounded"
              onClick={() => deletePost(post.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default DataDelete;
