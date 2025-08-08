import React from "react";
import ReactApexChart from "react-apexcharts";

const seriesData = {
  monthDataSeries1: {
    prices: [8100, 8120, 8140, 8130, 8120, 8110, 8105],
    dates: [
      "2023-07-01",
      "2023-07-02",
      "2023-07-03",
      "2023-07-04",
      "2023-07-05",
      "2023-07-06",
      "2023-07-07",
    ],
  },
};

const ApexChart = () => {
  const [state, setState] = React.useState({
    series: [
      {
        name: "STOCK ABC",
        data: seriesData.monthDataSeries1.prices,
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 0,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      // title: {
      //   text: "Fundamental Analysis of Stocks",
      //   align: "left",
      // },
      // subtitle: {
      //   text: "Price Movements",
      //   align: "left",
      // },
      // labels: seriesData.monthDataSeries1.dates,
      // xaxis: {
      //   type: "datetime",
      // },
      yaxis: {
        opposite: false,
      },
      legend: {
        show: false,
        // horizontalAlign: "left",
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="area"
          
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
