import React from "react";
import Card from "./Card";
import LineCharts from "./LineCharts";
import BarCharts from "./BarCharts";
import DataTable from "react-data-table-component";
import Tables from "./Tables";
import apple from "./assets/images/apple-logo.svg";
import paypay from "./assets/images/paypay-logo.svg";

function Team() {
  const products = [
    {
      id: 1,
      name: "Apple, Inc",
      title: "Apple, Inc",
      description: 1232.0,
      per: 12.01,
      img: "src/components/assets/images/apple-logo.svg",
    },
    {
      id: 2,
      name: "Paypal, Inc",
      title: "Paypal, Inc",
      description: 965.0,
      per: 9.05,
      img: "src/components/assets/images/paypay-logo.svg",
    },
    {
      id: 3,
      name: "Tesla, Inc",
      title: "Tesla, Inc",
      description: 1232.0,
      per: 11.01,
      img: "src/components/assets/images/tesla-logo.svg",
    },
    {
      id: 4,
      name: "Amazon.com, Inc",
      title: "Amazon.com, Inc",
      description: 2567.0,
      per: 11.01,
      img: "src/components/assets/images/amazon-logo.svg",
    },
  ];
  return (
    <>
      {/* <GraphCards/> */}
      <div className="grid gap-2 grid-cols-1 md:grid-cols-1 xl:grid-cols-2">
        <div className="grid gap-2 grid-cols-2 md:grid-cols-1 xl:grid-cols-2 p-0 m-0 ">
          {products?.map((items, id) => {
            return (
              <Card
                key={id}
                value={items?.name}
                title={items?.title}
                description={items?.description}
                per={items?.per}
                img1={items.img}
              />
            );
          })}
        </div>

        <div className="grid grid-cols-1 card border border-gray-200 dark:border-gray-800 gap-2 p-3 m-0 shadow-xl">
          <h2 className="font-medium">Line Chart</h2>
          <LineCharts />
        </div>
      </div>
      <div className="grid grid-cols-1 card p-4 mt-6 shadow-xl border border-gray-200 dark:border-gray-800">
        <h2 className="font-medium">Line Chart</h2>
        <BarCharts />
      </div>

      <div className="grid grid-cols-1 mt-5">
        <Tables />
      </div>
    </>
  );
}

export default Team;
