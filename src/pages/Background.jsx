import React from "react";
import HostCard from "../components/HostCard";
import "./Background.css";
import anuProfile from "../assets/anu_profile_ww.JPG";
import dannyProfile from "../assets/danny_profile.jpg";
import danielProfile from "../assets/daniel_prof.jpg";

function Background() {
  return (
    <div className="background-page">
      <div className="page-hero">
        <h1 className="page-title fade-up">Meet Your Hosts</h1>
      </div>

      <section className="section">
        <div className="host-grid">
          <HostCard
            name="Anuhea Tao"
            bio="*Placeholder*."
            image={anuProfile}
          />
          <HostCard
            name="Daniel Soden"
            bio="*Placeholder*."
            image={dannyProfile}
          />
          <HostCard
            name="Daniel Bernstein"
            bio="*Placeholder*."
            image={danielProfile}
          />
        </div>
      </section>

      <section className="section section-alt">
        <h2 className="page-title">Credits & Bibliography</h2>
        <div className="credits">
          <div className="credits-section">
            <h3 className="credits-heading">Films</h3>
            <p><em>West Side Story</em> (1961)</p>
            <p>Directed by Robert Wise and Jerome Robbins</p>
            <p style={{ marginTop: '1rem' }}><em>West Side Story</em> (2021)</p>
            <p>Directed by Steven Spielberg</p>
          </div>

          <div className="credits-section">
            <h3 className="credits-heading">Clips Referenced</h3>
            <ul>
              <li>YouTube placeholder clip 1</li>
              <li>YouTube placeholder clip 2</li>
              <li>YouTube placeholder clip 3</li>
            </ul>
          </div>

          <div className="credits-section">
            <h3 className="credits-heading">Bibliography</h3>
            <ul>
              <li>Placeholder source</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Background;
