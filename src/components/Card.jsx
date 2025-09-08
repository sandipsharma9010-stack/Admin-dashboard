import React from "react";
import { HiArrowUp, HiArrowDown } from "react-icons/hi";

const Card = ({ value, title, description, per, img1 }) => {
  return (
    <>
      <div className="rounded-2xl border border-gray-200 px-6 pb-5 pt-6 bg-white dark:border-gray-800 dark:bg:white-300">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10">
            <img src={img1} alt="" />
          </div>
          <div>
            <h3 className="text-base font-semibold">{value}</h3>
            <span className="text-gray-500 font-normal">{title}</span>
          </div>
        </div>

        <div className="flex justify-between items-end">
          <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
            ${description}
          </h4>

          <span
            className={`inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-sm
            ${
              per>11
                ? "bg-[#E6F4EA] text-[#3F925B]"
                : "bg-[#FDEAEA] text-[#D93025]"
            }`}
          >
            { per>11 ? (
              <HiArrowUp className="w-4 h-4" />
            ) : (
              <HiArrowDown className="w-4 h-4" />
            )}
            <span>{per}%</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;
