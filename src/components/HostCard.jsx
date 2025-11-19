import React from "react";

function HostCard({ name, bio, image }) {
  return (
    <div className="host-card">
      <div className="host-img-placeholder">
        {image ? (
          <img src={image} alt={name} />
        ) : (
          <div className="placeholder-icon">🎭</div>
        )}
      </div>
      <h3 className="host-name">{name}</h3>
      <p className="host-bio">{bio}</p>
    </div>
  );
}

export default HostCard;
