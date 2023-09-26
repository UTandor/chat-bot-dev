import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation

const Examples = () => {
  const { t } = useTranslation(); // Access the translation function
  const buttonsDataExamples = t("buttonsDataExamples", { returnObjects: true }); // Get translated buttonsDataExamples

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
              className="px-5 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white"
            >
              <i className="material-icons">keyboard</i>
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-xl my-5 font-semibold">{t('welcomePageTitle')}</h1>
      </div>
      <div>
        <Example buttonsDataExamples={buttonsDataExamples} /> {/* Pass translated buttonsDataExamples */}
      </div>
      <Link className="flex justify-center w-full" to="/">
        <h1 className="text-md font-medium">{t('lessExamples')}</h1>
      </Link>
    </div>
  );
};

const Example = ({ buttonsDataExamples }) => {
  return (
    <div className="grid grid-rows-3 md:grid-flow-col lg:grid-flow-col gap-5 sm:grid-flow-row xs:grid-flow-row">
      {buttonsDataExamples.map((buttonText, index) => (
        <Link
          key={index}
          type="button"
          to={`/c/${buttonText}`}
          className="py-2 px-5 mr-2 mb-2 text-sm font-medium items-center text-gray-800 focus:outline-none rounded-lg border border-gray-300 hover:bg-gray-200 hover:text-blue-700 focus:ring-4 focus:ring-gray-300"
        >
          {buttonText}
        </Link>
      ))}
    </div>
  );
};

export default Examples;