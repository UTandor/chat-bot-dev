import React, { useState, useEffect } from "react";

function PlayPauseTTS({ textToSpeak }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const utterance = new SpeechSynthesisUtterance(textToSpeak);

  useEffect(() => {
    utterance.onend = () => {
      setIsPlaying(false);
    };

    if (isPlaying) {
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    } else {
      window.speechSynthesis.cancel();
    }
  }, [isPlaying, utterance]);

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <button onClick={togglePlayback} className="text-gray-600">{isPlaying ? (<div className="material-icons">pause</div>) : (<div className="material-icons">volume_up</div>)}</button>
    </div>
  );
}

export default PlayPauseTTS;
