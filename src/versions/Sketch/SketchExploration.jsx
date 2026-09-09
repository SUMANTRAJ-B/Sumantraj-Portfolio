import React from 'react';
import { personalData } from '../../data/portfolioData';
import './SketchExploration.css';

export default function SketchExploration() {
  return (
    <section id="sketch-exploration" className="sketch-exploration-section" aria-label="Current Technical Exploration">
      <div className="sketch-container">
        {/* Section Header */}
        <div className="sketch-section-header">
          <span className="hand-note">Fig 08. / Active Research</span>
          <span className="font-mono-tag">[ SKETCHBOOK LOGS ]</span>
        </div>

        <div className="exploration-intro">
          <h2 className="exploration-headline">Currently Exploring</h2>
          <p className="exploration-sub">
            Ongoing experiments and technical frontiers outside of completed milestones.
          </p>
        </div>

        {/* 3 Illustrated Sketch Cards */}
        <div className="exploration-cards-grid">
          {personalData.explorations.map((item) => (
            <div key={item.number} className="sketch-box exploration-card">
              <div className="exp-card-head">
                <span className="font-mono-tag">[LOG 0{item.number}]</span>
                <span className="hand-note hand-note-red">active</span>
              </div>

              <h3 className="exp-card-title">{item.title}</h3>
              <p className="exp-card-desc">{item.description}</p>

              <div className="exp-card-bottom">
                <span className="sketch-pill-tag">RESEARCH NOTES</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
