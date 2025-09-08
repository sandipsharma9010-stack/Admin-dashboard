// components/PostList.js
import React from 'react';

const PostList = ({ apiData, loading, error}) => {
  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {apiData.slice(0, 5).map((post, id) => (
            <div>
          <li key={post.id}>Post Data is here: {post.title}</li>
          
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
