import React, { useState } from "react";

const PostForm = ({ apiData, loading, error, createItem }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
//   console.log(title, 'Hello Title')

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !body) return;

    const newPost = { title, body, userId: 1 };
    await createItem(newPost);

    setTitle("");
    setBody("");
  };

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Posts</h2>

      {/* Create Post Form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Add Post
        </button>
      </form>

      {/* Post List */}
      <ul className="space-y-2">
        {apiData.map((post) => (
          <li key={post.id} className="border p-3 rounded">
            <h3 className="font-semibold">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostForm;
