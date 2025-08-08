import React, { useState } from "react";
import DataTable from "react-data-table-component";

const Tables = () => {
  const [filterText, setFilterText] = useState("");

  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Year",
      selector: (row) => row.year,
      sortable: true,
    },
  ];

  const data = [
    { id: 1, title: "Beetlejuice", year: "1999" },
    { id: 2, title: "Sanjay", year: "2000" },
    { id: 3, title: "Sandeep sharma", year: "2000" },
    { id: 4, title: "Sandy", year: "2000" },
    { id: 5, title: "Kalu", year: "2000" },
    { id: 6, title: "JK Famous", year: "2000" },
    { id: 7, title: "Kalu", year: "2000" },
    { id: 8, title: "JK Famous", year: "2000" },
    { id: 9, title: "Kalu", year: "2000" },
    { id: 10, title: "JK Famous", year: "2000" },
    { id: 11, title: "Kalu", year: "2000" },
    { id: 12, title: "JK Famous", year: "2000" },
    { id: 13, title: "Kalu", year: "2000" },
    { id: 14, title: "JK Famous", year: "2000" },
    { id: 15, title: "Kalu", year: "2000" },
    { id: 16, title: "JK Famous", year: "2000" },
    { id: 17, title: "Kalu", year: "2000" },
    { id: 18, title: "JK Famous", year: "2000" },
    { id: 19, title: "Kalu", year: "2000" },
    { id: 20, title: "JK Famous", year: "2000" },
    { id: 21, title: "Kalu", year: "2000" },
    { id: 22, title: "JK Famous", year: "2000" },
    { id: 23, title: "Kalu", year: "2000" },
    { id: 24, title: "JK Famous", year: "2000" },
    { id: 25, title: "Kalu", year: "2000" },
    { id: 26, title: "JK Famous", year: "2000" },
    { id: 27, title: "Kalu", year: "2000" },
    { id: 28, title: "JK Famous", year: "2000" },
  ];

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  const filteredData = data.filter((item) => {
    return (
      item.title.toLowerCase().includes(filterText.toLowerCase()) ||
      item.year.toLowerCase().includes(filterText.toLowerCase())
    );
  });

  const handleRowClick = (row, event) => {
    console.log("Row clicked:", row);
  };

  return (
    <>
      <div className="shadow-xl rounded-lg p-4 bg-white">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Apple Customer Data</h2>
          <input
            className="border border-gray-500 p-2 rounded-xl w-64"
            type="text"
            placeholder="Search your items"
            value={filterText}
            onChange={handleFilterChange}
          />
        </div>

        <DataTable
          columns={columns}
          data={filteredData}
          selectableRows
          pagination
          highlightOnHover
          fixedHeader
          onRowClicked={handleRowClick}
        />
      </div>
    </>
  );
};

export default Tables;
