import React from "react";

export default function App() {
  return (
    <div className="wrapper">
      {/* Subtle background ambient decorations */}
      <div className="bg-glow bg-glow-1" aria-hidden="true" />
      <div className="bg-glow bg-glow-2" aria-hidden="true" />

      <main className="card">
        {/* Top Status Tag */}
        <div className="status-badge">
          <span className="pulse-dot"></span>
          <span>Under Construction</span>
        </div>

        {/* Animated Visual Icon */}
        <div className="illustration-wrapper">
          <div className="animated-ring ring-outer"></div>
          <div className="animated-ring ring-inner"></div>
        </div>

        {/* Main Content */}
        <h1 className="main-title">Website Under Development</h1>

        <p className="description">
          We are currently working hard behind the scenes to build something
          exceptional. Our brand new website will be ready very soon!
        </p>

        {/* Progress Tracker */}
        <div className="progress-section">
          <div className="progress-info">
            <span className="progress-label">Launch Readiness</span>
            <span className="progress-percent">55%</span>
          </div>
          <div className="progress-track">
            <div className="progress-bar"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
