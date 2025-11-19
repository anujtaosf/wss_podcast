import React from 'react';
import HoverVideo from './HoverVideo';
import './VideoCompare.css';

function VideoCompare({ video1961, video2021 }) {
  return (
    <div className="video-compare-container">
      <HoverVideo
        label="1961"
        embedUrl={video1961}
      />

      <HoverVideo
        label="2021"
        embedUrl={video2021}
      />
    </div>
  );
}

export default VideoCompare;
