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
            title="Episode 1: Tonight, Tonight: Star-Crossed Love Across the Divide"
            audioSrc={`${process.env.PUBLIC_URL}/assets/Tony_and_Maria.mp3`}
            video1961="https://www.youtube.com/embed/bxoC5Oyf_ss"
            video2021="https://www.youtube.com/embed/YWaVLMejkds"
          />
          <EpisodeCardWithVideos
            title="Episode 2: Full Circle: From Victim to Protector"
            audioSrc={`${process.env.PUBLIC_URL}/assets/Anita_Sexual_Assault.mp3`}
            video1961="https://www.youtube.com/embed/SEZLANv0lDc"
            video2021="https://www.youtube.com/embed/A9tNCtyQx-I"
          />
          <EpisodeCardWithVideos
            title="Episode 3: Rita's Return: From Anita to Valentina"
            audioSrc={`${process.env.PUBLIC_URL}/assets/Doc.mp3`}
            video1961="https://www.youtube.com/embed/O-S7Sizo0vc"
            video2021="https://www.youtube.com/embed/-63IyGtJZMg"
          />
          <EpisodeCardWithVideos
            title="Episode 4: Snaps and Swagger: Choreographing Toxic Masculinity"
            audioSrc={`${process.env.PUBLIC_URL}/assets/Masculinity.mp3`}
            video1961="https://www.youtube.com/embed/O-S7Sizo0vc"
            video2021="https://www.youtube.com/embed/-63IyGtJZMg"
          />
          <EpisodeCardWithVideos
            title="Episode 5: Womb to Tomb, Sperm to Worm: The Queer Heart of West Side Story"
            audioSrc={`${process.env.PUBLIC_URL}/assets/Tony_and_Riff.mp3`}
            video1961="https://www.youtube.com/embed/bxoC5Oyf_ss"
            video2021="https://www.youtube.com/embed/YWaVLMejkds"
          />
          <EpisodeCardWithVideos
            title="Episode 6: Buddy Boy: Anybodys and Trans Visibility Across Decades"
            audioSrc={`${process.env.PUBLIC_URL}/assets/Anybodys.mp3`}
            video1961="https://www.youtube.com/embed/SEZLANv0lDc"
            video2021="https://www.youtube.com/embed/A9tNCtyQx-I"
          />
          <EpisodeCardWithVideos
            title="Episode 7: PR vs NY: Whose Streets, Whose Dreams?"
            audioSrc={`${process.env.PUBLIC_URL}/assets/Immigrants.mp3`}
            video1961="https://www.youtube.com/embed/O-S7Sizo0vc"
            video2021="https://www.youtube.com/embed/-63IyGtJZMg"
          />
          <EpisodeCardWithVideos
            title="Episode 8: From Your First Cigarette: Brotherhood, Loyalty, and Tribalism"
            audioSrc={`${process.env.PUBLIC_URL}/assets/When_you_a_Jet.mp3`}
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
