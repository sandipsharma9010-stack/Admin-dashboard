import React from 'react';
import withApiData from './withApiData';

const PostList = ({ apiData, loading, error }) => {
  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Post List</h2>
      <ul>
        {apiData.slice(0, 10).map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default withApiData(PostList);
