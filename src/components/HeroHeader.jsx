import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HeroHeader = () => {
  const { t, i18n } = useTranslation(); // Access the translation function and i18n instance
  const [showModal, setShowModal] = React.useState(false);
  const languages = [
    "English",
    "Urdu",
    "Punjabi",
    "Sindhi",
    "Balochi",
    "Pashto"
  ];
  const homeIcon = {
    fontSize: "36px",
    marginBottom: "0.75rem",
    color: "#444",
  };
  const settingsIcon = {
    fontSize: "26px",
    marginBottom: "0.5rem",
  };

  return (
    <>
      <div className="flex items-center bg-gray-100 justify-center">
        <div className="text-center items-center p-5">
          <Link to="/">
            <div className="flex justify-center items-center space-x-2">
              <i className="material-icons" style={homeIcon}>
                home
              </i>
              <h1 className="text-4xl hover:cursor-pointer font-bold mb-4">
    {t('aiAssistantName')}
                  </h1>
            </div>
          </Link>
          <p className="text-xl font-medium text-gray-500 mb-4">
            {t('aiAssistantDescription')}
          </p>
          <div className="flex items-center justify-center">
            <button
              type="button"
              className="text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-3 py-1.5 mr-2 mb-2"
              data-modal-target="popup-modal"
              data-modal-toggle="popup-modal"
              onClick={() => setShowModal(true)}
            >
              {t("languages")} {/* Translate the button label */}
            </button>
            <i
              className="material-icons hover:cursor-pointer"
              style={settingsIcon}
              onClick={() => setShowModal(true)}
            >
              settings
            </i>
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-2xl font-semibold">
                          {t("languages")}
                        </h3>
                        <button
                          className="p-1 ml-auto bg-solid border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-2xl block outline-none focus:outline-none"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="black"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="grid md:grid-cols-5 sm:grid-cols-4 xs:grid-cols-3  grid-rows-2  p-6 flex-auto">
                        {languages.map((item, index) => (
                          <button
                            key={index}
                            type="button"
                            className="text-blue-900 bg-white border border-gray-500 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-sm px-6 py-1.5 mr-2 mb-2"
                            onClick={() => {
                              // Change the language when a language button is clicked
                              i18n.changeLanguage(item.toLowerCase().substring(0, 2));
                              setShowModal(false); // Close the modal
                            }}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroHeader;
