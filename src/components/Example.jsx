import React from "react";

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
        <button
          key={index}
          type="button"
          className="py-2 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          {buttonText}
        </button>
      ))}
    </div>
  );
};

export default Example;