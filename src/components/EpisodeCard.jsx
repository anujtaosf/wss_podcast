import React from "react";
import AudioPlayer from "./AudioPlayer";

function EpisodeCard({ title, description, audioSrc, thumbnail }) {
  return (
    <div className="episode-card neon-hover">
      <div className="episode-content">
        {thumbnail && (
          <div className="episode-thumbnail">
            <img src={thumbnail} alt={title} />
          </div>
        )}
        <div className="episode-text">
          <h3 className="episode-title">{title}</h3>
          {description && <p className="episode-description">{description}</p>}
          <AudioPlayer src={audioSrc} />
        </div>
      </div>
    </div>
  );
}

export default EpisodeCard;
