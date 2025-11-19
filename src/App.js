import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Background from "./pages/Background";
import Community from "./pages/Community";
import "./App.css";

function App() {
  // Use /wss_podcast basename only in production (GitHub Pages), not in development
  const basename = process.env.NODE_ENV === 'production' ? '/wss_podcast' : '';

  return (
    <Router basename={basename}>
      <div className="app-container">
        <nav className="nav">
          <Link to="/wss_podcast" className="nav-link neon-hover">The Podcast</Link>
          <Link to="/background" className="nav-link neon-hover">Behind the Podcast</Link>
          <Link to="/community" className="nav-link neon-hover">Community</Link>
        </nav>
        <Routes>
          <Route path="/wss_podcast" element={<Home />} />
          <Route path="/background" element={<Background />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
