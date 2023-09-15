import React from "react";

const WelcomePage = () => {
  return (
    <div className="flex space-y-2 flex-wrap w-full items-center justify-center p-4">
      <div>
        <a
          type="button"
          class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          href="/chat"
        >
          Ask AI
        </a>

        <a
          type="button"
          class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          href="/chat"
        >
          Text AI
        </a>
      </div>
      <div class="w-full">
        <h1 className="text-xl my-5 font-semibold">Few examples to ask!</h1>
      </div>
      <div className="">
        <div class="grid grid-rows-2 md:grid-flow-col lg:grid-flow-col gap-5 sm:grid-flow-row xs:grid-flow-row">
          <button
            type="button"
            class="py-2 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            How to improve soil condition?
          </button>
          <button
            type="button"
            class="py-2 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            What are the most effective methods for pest control on cabbage?
          </button>
          <button
            type="button"
            class="py-2 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            What is the best time to plant okra in Pakistan?
          </button>
          <button
            type="button"
            class="py-2 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            What are the most effective methods for pest control on mango tree?
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
