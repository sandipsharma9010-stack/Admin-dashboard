// components/UserList.js
import React from 'react';

const UserList = ({ apiData, loading, error }) => {
    // console.log(apiData,"check the api data")
  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {apiData.map((user) => (
            
          <li key={user.id}>USer List data here: {user.title}</li>
          
        ))}
      </ul>
    </div>
  );
};

export default UserList;
