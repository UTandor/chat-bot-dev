import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation
import i18next from "i18next";

const ChatPage = () => {
  const { t } = useTranslation();

  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const { msg } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputMessage.trim() !== "") {
      const newUserMessage = {
        message: inputMessage,
        isUser: true,
      };

      setMessages([...messages, newUserMessage]);
      setInputMessage("");

      // Call the function to process the user message
      processMessageToChatGpt(inputMessage);
    }
  };

  useEffect(() => {
    if (msg) {
      const newUserMessage = {
        message: msg,
        isUser: true,
      };

      setMessages([...messages, newUserMessage]);

      // Call the function to process the received message
      processMessageToChatGpt(msg);
    }
  }, [msg]);

  async function processMessageToChatGpt(message) {
    const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
    const apiUrl = "https://api.openai.com/v1/chat/completions"; // Replace with your API endpoint

    const requestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "ou're an AI agricultural assistant for Sarfraz's project, created by Usman Tanveer. Max response: 300 tokens, aim for brevity",
        },
        {
          role: "user",
          content: message + `. Please respond in ${i18next.language} alphabet, if not then respond in urdu alphabet`,
        },
      ],
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch AI response.");
      }

      const responseData = await response.json();

      // Update AI response based on the API response
      const aiResponse = responseData.choices[0].message.content;

      // Create a new AI response message object
      const aiMessage = {
        message: aiResponse,
        isUser: false,
      };

      // Use the functional update form of setMessages to ensure the latest state
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error("Error processing AI response:", error);
    }
  }

  return (
    <>
      <div className="flex flex-col h-full overflow-x-auto">
        <div className="flex flex-col h-full">
          <div className="grid grid-cols-12 gap-y-2">
            {messages.map((message, index) =>
              message.isUser ? (
                <div
                  key={index}
                  className="col-start-6 col-end-13 p-3 rounded-lg"
                >
                  <div className="flex items-center justify-start flex-row-reverse">
                    <div className="flex items-center  justify-center h-10 w-10 rounded-full bg-indigo-400 text-white flex-shrink-0">
                      U
                    </div>
                    <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 w=32 shadow rounded-xl">
                      <div>{message.message}</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  key={index}
                  className="col-start-1 col-end-8 p-3 rounded-lg"
                >
                  <div className="flex flex-row items-center">
                    <div className="flex items-center justify-center h-10 text-left text-white w-10 rounded-full bg-indigo-500 flex-shrink-0">
                      A
                    </div>

                    <div className="relative ml-3 text-sm bg-white py-2 px-5 shadow rounded-xl">
                      <div>{message.message}</div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center h-16 rounded-xl bg-white w-3/4 self-center mb-4 px-4 py-5">
        <div>
          <Link to="/r">
            <button className="flex items-center justify-center text-gray-600 hover:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />{" "}
                <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />{" "}
              </svg>
            </button>
          </Link>
        </div>
        <div className="flex-grow ml-4">
          <div className="relative w-full">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder={t("messagePlaceholder")} // Get translated placeholder
                className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
              />
            </form>
          </div>
        </div>
        <div className="ml-4">
          <button
            onClick={handleSubmit}
            className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-3 py-1 flex-shrink-0"
          >
            <span className="py-2 px=2">
              <svg
                className="w-4 h-4 transform rotate-45 -mt-px"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                ></path>
              </svg>
            </span>
          </button>
        </div>
        <div className="ml-2">
          <Link to="/">
            <button className="flex items-center justify-center text-gray-600 hover:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ChatPage;
