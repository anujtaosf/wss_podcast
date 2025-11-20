import React, { useEffect } from "react";
import "./Community.css";

function Community() {
  useEffect(() => {
    // Load the Hyvor Talk script ONCE
    const script = document.createElement("script");
    script.src = "https://talk.hyvor.com/embed/embed.js";
    script.type = "module";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Optional cleanup:
      // document.body.removeChild(script)
    };
  }, []);

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
            {/* Hyvor Talk Web Component */}
            <hyvor-talk-comments
              website-id="14538"
              page-id="community"
            ></hyvor-talk-comments>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Community;
