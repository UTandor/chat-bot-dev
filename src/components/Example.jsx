import React from "react";
import { Link } from "react-router-dom";

const buttonsData = [
  "How to improve soil condition?",
  "What are the most effective methods for pest control on cabbage?",
  "What is the best time to plant okra in Pakistan?",
  "What are the most effective methods for pest control on mango tree?",
];

const Example = () => {
  return (
    <div className="grid grid-rows-2 md:grid-flow-col lg:grid-flow-col gap-5 sm:grid-flow-row xs:grid-flow-row">
      {buttonsData.map((buttonText, index) => (
        <Link
          key={index}
          to={`/c/${buttonText}`}
          className="py-2 px-5 mr-2 mb-2 text-sm font-medium text-gray-800 focus:outline-none rounded-lg border border-gray-300 hover:bg-gray-200 hover:text-blue-700 focus:ring-4 focus:ring-gray-300"
        >
          {buttonText}
        </Link>
      ))}
    </div>
  );
};

export default Example;