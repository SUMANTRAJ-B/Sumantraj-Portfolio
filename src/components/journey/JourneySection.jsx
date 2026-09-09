import React from 'react';
import { personalData } from '../../data/portfolioData';
import './JourneySection.css';

export default function JourneySection() {
  const steps = personalData.journeyTimeline;
  const explorations = personalData.explorations;

  return (
    <section id="journey" className="journey-editorial-section" aria-label="Technical Journey and Current Exploration">
      <div className="editorial-container">
        {/* Section Header */}
        <header className="editorial-section-header">
          <div className="editorial-index-row">
            <span className="tech-meta"><span className="tech-marker">06</span>EVOLUTION &amp; HORIZONS</span>
            <span className="tech-meta desktop-only">AUTHENTIC PATHWAY</span>
          </div>
          <h2 className="editorial-section-title">The Engineering Trajectory</h2>
          <p className="editorial-section-sub">
            Not a calculated corporate ladder, but an organic chain of curiosity, hands-on experiments, and unexpected discoveries.
          </p>
        </header>

        {/* 10-Step Sequential Path */}
        <div className="trajectory-strip-container">
          <span className="tech-meta strip-heading">HOW THE PIECES CONNECTED</span>
          <div className="trajectory-flow-list">
            {steps.map((s, index) => (
              <div key={s.num} className="trajectory-step-card">
                <div className="step-num-row">
                  <span className="step-num tech-meta">[{s.num}]</span>
                  {index < steps.length - 1 && <span className="step-arrow-line">→</span>}
                </div>
                <h4 className="step-title">{s.title}</h4>
                <p className="step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Current Exploration Rows */}
        <div className="exploration-sub-header">
          <span className="tech-meta"><span className="tech-marker">▶</span>CURRENTLY EXPLORING</span>
        </div>

        <div className="exploration-list">
          {explorations.map((item) => (
            <div key={item.number} className="exploration-row">
              <div className="exploration-top">
                <span className="exploration-num tech-meta">[{item.number}]</span>
                <span className="exploration-status tech-meta">{item.status}</span>
              </div>
              <h3 className="exploration-title">{item.title}</h3>
              <p className="exploration-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
