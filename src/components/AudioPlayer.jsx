import React, { useState } from "react";

function AudioPlayer({ src }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={`audio-wrapper ${playing ? "playing" : ""}`}>
      <audio
        controls
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src={src} type="audio/mp3" />
        Your browser does not support audio.
      </audio>
    </div>
  );
}

export default AudioPlayer;
