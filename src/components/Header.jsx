import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [showModal, setShowModal] = React.useState(false);
  const languages = [
    "English",
    "Urdu",
    "Punjabi",
    "Siraiki",
    "Hindi",
    "Sindhi",
    "Japaneese",
    "Gujrati",
  ];
  return (
    <>
      <div className="flex items-center bg-gray-100 justify-center p-2">
        <div className="text-center items-center p-5">
          <h1 className="text-3xl font-bold mb-4">ChatAI</h1>
          <p className="text-lg font-semibold mb-4">
            AI Agriculture Assistant for Pakistan!
          </p>
          <div className="flex items-center justify-center">
            <button
              type="button"
              className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              data-modal-target="popup-modal"
              data-modal-toggle="popup-modal"
              onClick={() => setShowModal(true)}
            >
              English
            </button>
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">Modal Title</h3>
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
                          <Link
                            key={index}
                            type="button"
                            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-2.5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            to={`/chat/Greet me in ${item}`}
                          >
                            {item}
                          </Link>
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
export default Header;
