import React from 'react';

const UserList = ({ data, handleEdit, handleDelete }) => {
  return (
    <div className="mt-8 px-4">
      <h3 className="text-xl font-semibold mb-4">User List</h3>
      {data.length === 0 ? (
        <p className="text-gray-500">No records available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b border-gray-300">Name</th>
                <th className="py-2 px-4 border-b border-gray-300">Address</th>
                <th className="py-2 px-4 border-b border-gray-300">Age</th>
                <th className="py-2 px-4 border-b border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((entry, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b border-gray-300">{entry.name}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{entry.address}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{entry.age}</td>
                  <td className="py-2 px-4 border-b border-gray-300 space-x-2">
                    <button
                      onClick={() => handleEdit(index)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserList;
