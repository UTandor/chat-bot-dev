import React, { useState, useEffect } from "react";
import useSpeechRecognitionHook from "../hooks/useSpeechRecognitionHook";
import { Link } from "react-router-dom";

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
              {isRecording ? "stop" : "keyboard_voice"}
            </i>
          </button>
          <p
            onClick={() => setShowModal(true)}
            className="font-medium text-blue-600 underline dark:text-blue-500 hover:cursor-pointer hover:no-underline"
          >
            Tips on better speech.
          </p>
          <Link to="/c">
            <button className="bg-green-500 mt-5 hover:bg-green-700  text-white font-semibold py-2 px-4 rounded-md">
              Chat Instead
            </button>
          </Link>

          <div className="flex flex-col">
            <h1 className="text-xl mb-2 font-semibold mt-10">What you said</h1>
            <p>{text}</p>
            {text ? (
              <Link to={`/c/${encodeURIComponent(text)}`}>
                <button type="button" className="mt-5 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">Continue</button>
              </Link>
            ) : (
              <p className="text-sm text-gray-500">
                Couldn't catch that. Can you try again?
              </p>
            )}
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h1 className="text-2xl mt-10 font-semibold">
            Voice Recognitzation not supported.
          </h1>
          <p className="text-lg">
            Please try using Chrome or Safari instead to use voice commands.
          </p>
        </React.Fragment>
      )}

      {showModal ? (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded-lg shadow-lg z-50 overflow-y-auto">
            <div className="modal-content py-4 text-center px-6">
              <h1 className="text-3xl font-semibold">
                Tips for a Great Experience
              </h1>
              <ul className="list-disc text-sm list-inside text-left mt-4">
                <li className="mb-2">Minimize background noise.</li>
                <li className="mb-2">Wait 3 seconds before starting.</li>
                <li className="mb-2">Speak clearly, at a moderate pace.</li>
                <li className="mb-2">Avoid background distortion.</li>
                <li className="mb-2">Use English for better results.</li>
              </ul>
              <p className="text-gray-600 text-sm mt-4">
                Following these tips will help you get the best results when
                using our service.
              </p>
            </div>
            <div className="modal-footer py-4 px-6">
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg mr-4"
                onClick={() => setShowModal(false)}
              >
                Close
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
