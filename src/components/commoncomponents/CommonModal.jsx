import React from "react";
import DataTable from "react-data-table-component";

function CommonModal({ isOpen, onClose, title, data }) {
  if (!isOpen) return null;

  const columns = data
    ? Object.keys(data[0]).map((key) => ({
        name: key.charAt(0).toUpperCase() + key.slice(1),
        selector: (row) => row[key],
        // sortable: true,
      }))
    : [];

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg max-w-4xl w-full relative">
        {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}

        <DataTable
          columns={columns}
          data={data}
          pagination
          highlightOnHover
          responsive
        />

        <button
          onClick={onClose}
          className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default CommonModal;
