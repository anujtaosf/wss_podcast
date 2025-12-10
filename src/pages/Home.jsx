import React from "react";
import "./Home.css";
import HeroBanner from "../components/HeroBanner";
import EpisodeCardWithVideos from "../components/EpisodeCardWithVideos";

function Home() {
  return (
    <div className="home">
      <HeroBanner />

      <section className="section">
        <h2 className="section-title">Podcast Episodes</h2>
        <div className="episodes-grid">
          <EpisodeCardWithVideos
            title="Episode 1: Tony and Maria"
            description="description"
            audioSrc="/assets/Tony_and_Maria.m4a"
            video1961="https://www.youtube.com/embed/bxoC5Oyf_ss"
            video2021="https://www.youtube.com/embed/YWaVLMejkds"
          />
          <EpisodeCardWithVideos
            title="Episode 2: Anita Sexual Assault"
            description="description"
            audioSrc="/assets/Anita_Sexual_Assault.m4a"
            video1961="https://www.youtube.com/embed/SEZLANv0lDc"
            video2021="https://www.youtube.com/embed/A9tNCtyQx-I"
          />
          <EpisodeCardWithVideos
            title="Episode 3: Doc"
            description="description"
            audioSrc="/assets/Doc.m4a"
            video1961="https://www.youtube.com/embed/O-S7Sizo0vc"
            video2021="https://www.youtube.com/embed/-63IyGtJZMg"
          />
          <EpisodeCardWithVideos
            title="Episode 4: Masculinity in the Opening Scene"
            description="We break down how masculinity is performed through choreography in the opening sequence."
            audioSrc="/assets/Masculinity.m4a"
            video1961="https://www.youtube.com/embed/O-S7Sizo0vc"
            video2021="https://www.youtube.com/embed/-63IyGtJZMg"
          />
          <EpisodeCardWithVideos
            title="Episode 5: Tony and Riff"
            description="description"
            audioSrc="/assets/Tony_and_Riff.m4a"
            video1961="https://www.youtube.com/embed/bxoC5Oyf_ss"
            video2021="https://www.youtube.com/embed/YWaVLMejkds"
          />
          <EpisodeCardWithVideos
            title="Episode 6: Anybodys"
            description="description"
            audioSrc="/assets/Anybodys.m4a"
            video1961="https://www.youtube.com/embed/SEZLANv0lDc"
            video2021="https://www.youtube.com/embed/A9tNCtyQx-I"
          />
          <EpisodeCardWithVideos
            title="Episode 7: Immigrants"
            description="description"
            audioSrc="/assets/Immigrants.m4a"
            video1961="https://www.youtube.com/embed/O-S7Sizo0vc"
            video2021="https://www.youtube.com/embed/-63IyGtJZMg"
          />
          <EpisodeCardWithVideos
            title="Episode 8: When You're a Jet"
            description="description"
            audioSrc="/assets/When_you_a_Jet.m4a"
            video1961="https://www.youtube.com/embed/bxoC5Oyf_ss"
            video2021="https://www.youtube.com/embed/YWaVLMejkds"
          />
        </div>
      </section>

      <section className="section section-alt">
        <h2 className="section-title">Key Themes</h2>
        <div className="tags-container">
          <span className="topic-tag">Masculinity</span>
          <span className="topic-tag">Gender</span>
          <span className="topic-tag">Dancing</span>
          <span className="topic-tag">Snapping</span>
          <span className="topic-tag">Violence</span>
          <span className="topic-tag">Romance</span>
          <span className="topic-tag">Music</span>
          <span className="topic-tag">Power</span>
        </div>
      </section>
    </div>
  );
}

export default Home;
