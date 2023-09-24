import React from "react";
import Example from "./Example";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="flex space-y-2 flex-wrap w-full items-center justify-center p-4">
      <div>
        <Link to="/c">
          <button
            type="button"
            className="focus:outline-none text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            Ask AI
          </button>
        </Link>
      </div>
      <div className="w-full">
        <h1 className="text-xl my-5 font-semibold text-gray-800">
          Few examples to ask!
        </h1>
      </div>
      <div>
        <Example />
      </div>
      <Link className="flex justify-center w-full" to="/e">
        <h1 className="text-md font-medium text-gray-800">More Examples</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="my-auto w-5 h-4 text-gray-800"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            className="stroke-2"
            d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
          />
        </svg>
      </Link>
    </div>
  );
};

export default WelcomePage;