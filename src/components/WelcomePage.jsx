import React from "react";
import Example from "./Example";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation

const WelcomePage = () => {
  const { t } = useTranslation(); // Access the translation function

  return (
    <div className="flex space-y-2 flex-wrap w-full items-center justify-center p-4">
      <div>
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <Link to="/r">
            <button
              type="button"
              className="px-5 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white"
            >
              <i className="material-icons">mic</i>
            </button>
          </Link>

          <Link to="/c">
            <button
              type="button"
              className="px-5 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white "
            >
              <i className="material-icons">keyboard</i>
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-xl my-5 font-semibold text-gray-800">
          {t("welcomePageTitle")} {/* Translate the title */}
        </h1>
      </div>
      <div>
        <Example />
      </div>
      <Link className="flex justify-center w-full" to="/e">
        <h1 className="text-md font-medium text-gray-800">
          {t("moreExamples")} {/* Translate the link text */}
        </h1>
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