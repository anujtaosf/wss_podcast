import React from "react";
import "./Home.css";
import HeroBanner from "../components/HeroBanner";
import EpisodeCard from "../components/EpisodeCard";

function Home() {
  return (
    <div className="home">
      <HeroBanner />

      <section className="section">
        <h2 className="section-title">Podcast Episodes</h2>
        <div className="episodes-grid">
          <EpisodeCard
            title="Episode 1: Tonight, Tonight: Star-Crossed Love Across the Divide"
            audioSrc={`${process.env.PUBLIC_URL}/assets/Tony_and_Maria.mp3`}
          />
          <EpisodeCard
            title="Episode 2: From Victim to Protector: Rita's relationship with Anita's sexual assault"
            audioSrc={`${process.env.PUBLIC_URL}/assets/Anita_Sexual_Assault.mp3`}
          />
          <EpisodeCard
            title="Episode 3: Casting Doc"
            audioSrc={`${process.env.PUBLIC_URL}/assets/Doc.mp3`}
          />
          <EpisodeCard
            title="Episode 4: Snaps and Swagger: Choreographing Toxic Masculinity"
            audioSrc={`${process.env.PUBLIC_URL}/assets/Masculinity.mp3`}
          />
          <EpisodeCard
            title="Episode 5: Womb to Tomb, Sperm to Worm: The Queer Heart of West Side Story"
            audioSrc={`${process.env.PUBLIC_URL}/assets/Tony_and_Riff.mp3`}
          />
          <EpisodeCard
            title="Episode 6: Buddy Boy: Anybodys and Trans Visibility Across Decades"
            audioSrc={`${process.env.PUBLIC_URL}/assets/Anybodys.mp3`}
          />
          <EpisodeCard
            title="Episode 7: PR vs NY: Whose Streets, Whose Dreams?"
            audioSrc={`${process.env.PUBLIC_URL}/assets/Immigrants.mp3`}
          />
          <EpisodeCard
            title="Episode 8: From Your First Cigarette: Brotherhood, Loyalty, and Tribalism"
            audioSrc={`${process.env.PUBLIC_URL}/assets/When_you_a_Jet.mp3`}
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
