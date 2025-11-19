import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Background from "./pages/Background";
import "./App.css";

function App() {
  // Use /wss_podcast basename only in production (GitHub Pages), not in development
  const basename = process.env.NODE_ENV === 'production' ? '/wss_podcast' : '';

  return (
    <Router basename={basename}>
      <div className="app-container">
        <nav className="nav">
          <Link to="/" className="nav-link neon-hover">The Podcast</Link>
          <Link to="/background" className="nav-link neon-hover">Behind the Podcast</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/background" element={<Background />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
