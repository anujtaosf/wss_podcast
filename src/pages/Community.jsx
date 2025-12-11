import React from "react";
import { DiscussionEmbed } from "disqus-react";
import "./Community.css";

function Community() {
  const disqusShortname = "wss-podcast-community";
  const disqusConfig = {
    url: "https://anujtaosf.github.io/wss_podcast/community",
    identifier: "community",
    title: "West Side Story Deconstructed - Community Discussion"
  };

  return (
    <div className="community-page">
      <div className="page-hero">
        <h1 className="page-title fade-up">Community Discussion</h1>
      </div>

      <section className="section">
        <div className="community-container">
          <p className="community-sub">
            Share your thoughts on our podcast! What do you agree with? What would you debate us on?
          </p>

          <div className="community-widget-wrapper">
            <DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Community;
