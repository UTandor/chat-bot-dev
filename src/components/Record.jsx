import React, { useState, useEffect } from "react";
import useSpeechRecognitionHook from "../hooks/useSpeechRecognitionHook";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook

const Record = () => {
  const iconStyle = {
    fontSize: "32px",
    color: "white",
  };

  const {
    text,
    startListening,
    stopListening,
    isListening,
    hasRecognitionSupport,
  } = useSpeechRecognitionHook();

  const [showModal, setShowModal] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [buttonColor, setButtonColor] = useState("bg-blue-500");

  useEffect(() => {
    let interval;

    if (isRecording) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRecording]);

  const startRecording = () => {
    setIsRecording(true);
    startListening(); // Call the function to start listening
  };

  const stopRecording = () => {
    setIsRecording(false);
    setButtonColor("bg-blue-500");
    stopListening(); // Call the function to stop listening
  };

  // Use the useTranslation hook to access translations
  const { t } = useTranslation();

  return (
    <div className="flex justify-center space-y-3 flex-col items-center h-screen mb-40">
      {hasRecognitionSupport ? (
        <React.Fragment>
          <p className="text-2xl mt-4">{`${Math.floor(timer / 60)
            .toString()
            .padStart(2, "0")}:${(timer % 60).toString().padStart(2, "0")}`}</p>
          <button
            className={`${buttonColor} hover:bg-blue-600 text-white font-semibold p-10 xs:p-10 sm:p-10 rounded-full shadow-lg`}
            onClick={isRecording ? stopRecording : startRecording}
          >
            <i className="material-icons" style={iconStyle}>
              {isRecording ? t("stopRecordingButton") : "keyboard_voice"}
            </i>
          </button>
          <p
            onClick={() => setShowModal(true)}
            className="font-medium text-blue-600 underline dark:text-blue-500 hover:cursor-pointer hover:no-underline"
          >
            {t("tipsLink")}
          </p>

          <div className="flex flex-col">
            <h1 className="text-xl mb-2 font-semibold mt-10">
              {t("whatYouSaidLabel")}
            </h1>
            <p>{text}</p>
            {text ? (
              <Link to={`/c/${encodeURIComponent(text)}`}>
                <button type="button" className="mt-5 py-2 px-3 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"><i className="material-icons" style={{fontSize:'32px'}}>arrow_right_alt</i></button>
              </Link>
            ) : (
              <p className="text-sm text-gray-500">
                {t("tryAgainMessage")}
              </p>
            )}
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h1 className="text-2xl mt-10 font-semibold">
            {t("voiceNotSupportedTitle")}
          </h1>
          <p className="text-lg">
            {t("voiceNotSupportedMessage")}
          </p>
        </React.Fragment>
      )}

      {showModal ? (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded-lg shadow-lg z-50 overflow-y-auto">
            <div className="modal-content py-4 text-center px-6">
              <h1 className="text-3xl font-semibold">
                {t("tipsModalTitle")}
              </h1>
              <ul className="list-disc text-sm list-inside text-left mt-4">
                {t("tipsList", { returnObjects: true }).map((tip, index) => (
                  <li key={index} className="mb-2">{tip}</li>
                ))}
              </ul>
              <p className="text-gray-600 text-sm mt-4">
                {t("tipsModalDescription")}
              </p>
            </div>
            <div className="modal-footer py-4 px-6">
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg mr-4"
                onClick={() => setShowModal(false)}
              >
                {t("closeButton")}
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {showModal ? (
        <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
      ) : null}
    </div>
  );
};

export default Record;