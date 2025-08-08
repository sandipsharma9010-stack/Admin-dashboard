import React from "react";
import PieChart from "./PieChart";
import BarCharts from "./BarCharts";
import LineCharts from "./LineCharts";

const CommanCharts = ({ height, width, type, Tab }) => {
  console.log(height, width);
  return (
    <>
      <div
        style={{
          height: { height },
          width: { width },
          backgroundColor: "#f9f9f9",
          borderRadius: "10px",
        }}
        className="p-4"
      >
        {Tab === "home" ? (
          <PieChart />
        ) : Tab === "profile" ? (
          <BarCharts />
        ) : Tab === "settings" ? (
          <LineCharts />
        ) : null}
      </div>
      {/* {

    Tab === "home" ?<PieChart height={height} width={width} /> : Tab === "profile" ? <BarCharts />
     : Tab === "settings" ? <LineCharts /> : null
    

    } */}

      {/* <PieChart name={name} height={height} width={width} />
   <h1>{type}</h1> */}
      {/* <h1>{name}:name sa</h1>
    <h1>Height:{height}</h1>
    <h1>Width:{width}</h1> */}
    </>
  );
};

export default CommanCharts;
