import React, { Component, useState } from "react";
import CommanCharts from "./CommanCharts";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", label: "Pie Chart" },
    { id: "profile", label: "Bar Chart" },
    { id: "settings", label: "Line Chart" },
    // { id: "legend", label: "Legend Chart" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <CommanCharts
            type="pie"
            width="68%"
            height="67%"
            Tab="home"
          />
        );

      case "profile":
        return (
          <CommanCharts type="bar" width="400px" height="400px" Tab="profile" />
        );
      case "settings":
        return (
          <CommanCharts type="setting" width="800px" height="800px" Tab="settings" />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-md ml-10">
      <div className="flex border-b border-gray-300 mt-5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2 text-center text-sm font-semibold transition-colors duration-300 ${
              activeTab === tab.id
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* design the chart card in using tailwind css  */}
      <div
        style={{ height: "600px", width: "600px" }}
        className="border-white m-10 mx-auto flex justify-center align-center"
      >
        {renderContent()}
      </div>
    </div>
  );
};

export default Tabs;
