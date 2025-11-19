import React from 'react';
import EpisodeCard from './EpisodeCard';
import VideoCompare from './VideoCompare';

function EpisodeCardWithVideos({ title, description, audioSrc, video1961, video2021 }) {
  return (
    <div className="episode-with-videos">
      <EpisodeCard
        title={title}
        description={description}
        audioSrc={audioSrc}
      />

      <VideoCompare
        video1961={video1961}
        video2021={video2021}
      />
    </div>
  );
}

export default EpisodeCardWithVideos;
