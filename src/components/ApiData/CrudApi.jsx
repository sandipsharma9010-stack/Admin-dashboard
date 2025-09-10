import React, { useEffect, useState } from "react";
import axios from "axios";

function CrudApi() {
  const [posts, setPosts] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [updateTitle, setUpdateTitle] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);
  const [message, setMessage] = useState("");

  const apiUrl = "https://jsonplaceholder.typicode.com/posts";

  const fetchPosts = async () => {
    try {
      const response = await axios.get(apiUrl);
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const addPost = async () => {
    if (!newTitle.trim()) {
        console.log("newTitle data", !newTitle.trim())
      setMessage("Please enter a title");
      return;
    }
    try {
      const newPost = {
        title: newTitle,
        body: "This is a sample body",
        userId: 1,
      };
      const response = await axios.post(apiUrl, newPost);
      setMessage("Post added successfully!");
      setNewTitle("");
      fetchPosts();
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  const updatePost = async () => {
    if (!selectedPost) {
      setMessage("Please select a post to update");
      return;
    }
    if (!updateTitle.trim()) {
      setMessage("Please enter a new title");
      return;
    }
    try {
      const updatedPost = {
        ...selectedPost,
        title: updateTitle,
      };
      await axios.put(`${apiUrl}/${selectedPost.id}`, updatedPost);
      setMessage("Post updated successfully!");
      setSelectedPost(null);
      setUpdateTitle("");
      fetchPosts();
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };


  const deletePost = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      setMessage("Post deleted successfully!");

      setPosts(posts.filter((post) => post.id !== id));

      if (selectedPost && selectedPost.id === id) {
        setSelectedPost(null);
        setUpdateTitle("");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleSelectPost = (post) => {
    setSelectedPost(post);
    setUpdateTitle(post.title);
    setMessage("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Axios CRUD Example</h1>

      {message && <p style={{ color: "green" }}>{message}</p>}

      <div style={{ marginBottom: "20px" }}>
        <h2>Add Post</h2>
        <input
          className="border px-2 py-2 rounded"
          type="text"
          placeholder="Post Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button
          className="bg-blue-700 px-4 py-2 text-white m-2 rounded"
          onClick={addPost}
        >
          Add
        </button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2>Update Post</h2>
        {selectedPost ? (
          <div>
            <p>
              Selected Post: <strong>{selectedPost.title}</strong>
            </p>
            <input
              className="border px-2 py-2 rounded m-2"
              type="text"
              placeholder="New Title"
              value={updateTitle}
              onChange={(e) => setUpdateTitle(e.target.value)}
            />
            <button
              className="bg-green-700 px-4 py-2 text-white m-2 rounded"
              onClick={updatePost}
            >
              Update
            </button>
            <button
              className="bg-gray-500 px-4 py-2 text-white m-2 rounded"
              onClick={() => {
                setSelectedPost(null);
                setUpdateTitle("");
                setMessage("");
              }}
            >
              Cancel
            </button>
          </div>
        ) : (
          <p>Select a post below to edit</p>
        )}
      </div>

      <div>
        <h2>Posts List</h2>
        {posts.slice(0, 10).map((post) => (
          <div key={post.id} style={{ marginBottom: "10px" }}>
            <strong>{post.title}</strong>
            <button
              className="bg-green-700 px-4 py-2 text-white m-2 rounded"
              onClick={() => handleSelectPost(post)}
            >
              Edit
            </button>
            <button
              className="bg-red-700 px-4 py-2 text-white m-2 rounded"
              onClick={() => deletePost(post.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CrudApi;
