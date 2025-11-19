import React, { useRef } from 'react';
import './HoverVideo.css';

function HoverVideo({ embedUrl, label }) {
  const iframeRef = useRef();

  // YouTube autoplay URL builder
  const makeAutoplayUrl = () =>
    embedUrl + "?autoplay=1&mute=1&controls=1";

  const makePausedUrl = () =>
    embedUrl + "?autoplay=0&mute=0";

  function handleMouseEnter() {
    iframeRef.current.src = makeAutoplayUrl();
  }

  function handleMouseLeave() {
    iframeRef.current.src = makePausedUrl();
  }

  return (
    <div
      className="hover-video"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="video-label">{label}</div>

      <iframe
        ref={iframeRef}
        src={makePausedUrl()}
        title={label}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
}

export default HoverVideo;
