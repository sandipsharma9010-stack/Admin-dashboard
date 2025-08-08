import React, { useState } from "react";
import "../App.css";



function Pagination() {
  return (
    <>
      <div className="pagination">
        <a className="font-bold-md"  href="#">&laquo; Previous</a>
        <a class="active" href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a className="font-bold-md" href="#">Next &raquo; </a>
      </div>
    </>
  );
}

export default Pagination;
