import { useState, useEffect } from "react";

const useSpeechRecognition = () => {
  const [text, setText] = useState("Hello, how are you doing?");
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    if ("webkitSpeechRecognition" in window) {
      const newRecognition = new window.webkitSpeechRecognition();
      newRecognition.continuous = true;
      newRecognition.lang = "en-US";
      setRecognition(newRecognition);
    }
  }, []);
  useEffect(() => {
    if (!recognition) return;

    recognition.onresult = (e) => {
      console.log("onresult event: ", e);
      setText(e.results[0][0].transcript);
      recognition.stop();
      setIsListening(false);
    };

    recognition.onerror = (e) => {
      console.error("Recognition error: ", e.error);
      recognition.stop();
      setIsListening(false);
    };
  }, [recognition]);

  const startListening = () => {
    setText("");
    setIsListening(true);
    recognition.start();
  };

  const stopListening = () => {
    setIsListening(false);
    recognition.stop();
  };

  return {
    text,
    isListening,
    startListening,
    stopListening,
    hasRecognitionSupport: !!recognition,
  };
};

export default useSpeechRecognition;