import React from "react";
import "./HeroBanner.css";

function HeroBanner() {
  return (
    <div className="hero">
      <div className="spotlight"></div>
      <div className="graffiti" style={{ top: "15%", left: "5%" }}>
        "Boy, boy, crazy boy"
      </div>
      <div className="graffiti" style={{ top: "70%", right: "8%", transform: "rotate(8deg)" }}>
        "Stay cool, boy"
      </div>
      <h1 className="hero-title snap-on-hover fade-up">
        WEST SIDE STORY<br />DECONSTRUCTED
      </h1>
      <p className="hero-sub fade-up">Anu • Danny • Daniel</p>
    </div>
  );
}

export default HeroBanner;
