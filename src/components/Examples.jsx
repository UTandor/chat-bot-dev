import React from "react";
import { Link } from "react-router-dom";

const Examples = () => {
  return (
    <div className="flex space-y-2 flex-wrap w-full items-center justify-center p-4">
      <div>
        <Link to="/chat">
          <button
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Ask AI
          </button>
        </Link>

        <Link to="/chat">
          <button
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Text AI
          </button>
        </Link>
      </div>
      <div className="w-full">
        <h1 className="text-xl my-5 font-semibold">Few examples to ask!</h1>
      </div>
      <div>
        <Example />
      </div>
      <Link className="flex justify-center w-full" to="/">
        <h1 className="text-md font-medium">Less Examples</h1>
        
      </Link>
    </div>
  );
};

const Example = () => {

  const buttonsData = [
    "What are the major crops grown in Pakistan?",
    "How can farmers mitigate the impact of water scarcity in Pakistani agriculture?",
    "What are the recommended organic farming practices in Pakistan?",
    "Could you provide information on crop rotation techniques in Pakistani farming?",
    "What are the common diseases affecting wheat crops in Pakistan, and how can they be managed?",
    "What is the role of government policies in supporting agriculture in Pakistan?",
    "Can you explain the benefits of using drip irrigation in Pakistani farming?",
    "What are the key challenges faced by small-scale farmers in Pakistan?",
    "Are there any new technologies or innovations in Pakistani agriculture that farmers should be aware of?",
  ];
  
  return (
    <div className="grid grid-rows-3 md:grid-flow-col lg:grid-flow-col gap-5 sm:grid-flow-row xs:grid-flow-row">
      {buttonsData.map((buttonText, index) => (
        <Link
          key={index}
          type="button"
          to={`/chat/${buttonText}`}
          className="py-2 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          {buttonText}
        </Link>
      ))}
    </div>
  );
};

export default Examples;
