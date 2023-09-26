import React from "react";
import {  useTranslation } from "react-i18next";
import { Link } from 'react-router-dom'

const Example = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-rows-2 md:grid-flow-col lg:grid-flow-col gap-5 sm:grid-flow-row xs:grid-flow-row">
      {t("buttonsData", { returnObjects: true }).map((buttonText, index) => (
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
