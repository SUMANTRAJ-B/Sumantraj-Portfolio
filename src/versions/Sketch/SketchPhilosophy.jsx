import React from 'react';
import { personalData } from '../../data/portfolioData';
import './SketchPhilosophy.css';

export default function SketchPhilosophy() {
  const philosophy = personalData.personalStory.philosophy;
  const lifeOutsideTech = personalData.lifeOutsideTech;

  return (
    <section id="sketch-philosophy" className="sketch-philosophy-section" aria-label="Philosophy & Life Outside Technology">
      <div className="sketch-container">
        {/* Section Header */}
        <div className="sketch-section-header">
          <span className="hand-note">Fig 07. / Personal Notes</span>
          <span className="font-mono-tag">[ PHILOSOPHY &amp; INTERESTS ]</span>
        </div>

        <div className="sketch-notes-grid">
          {/* Card 1: Personal Philosophy */}
          <div className="sketch-box philosophy-card">
            <div className="card-top-tape"></div>
            <div className="card-header-line">
              <span className="font-mono-tag">[ PERSPECTIVE ]</span>
              <span className="hand-note hand-note-red">mindset</span>
            </div>

            <h3 className="card-heading">{philosophy.title}</h3>

            <div className="philosophy-handwritten-block">
              <p className="philosophy-big-quote">
                "{philosophy.quote}"
              </p>
            </div>

            <p className="philosophy-body-text">{philosophy.text}</p>

            <div className="philosophy-footer-annotation">
              <span className="hand-note" style={{ fontSize: '1.05rem', color: '#555' }}>
                ✎ Not about status or titles — just building what's genuinely needed.
              </span>
            </div>
          </div>

          {/* Card 2: Life Outside Tech */}
          <div className="sketch-box interests-card">
            <div className="card-top-tape"></div>
            <div className="card-header-line">
              <span className="font-mono-tag">[ BEYOND CODE ]</span>
              <span className="hand-note" style={{ color: '#0055d4' }}>keeping perspective</span>
            </div>

            <h3 className="card-heading">Life Outside Technology</h3>
            <p className="interests-lead">
              Technology is what I build, but curiosity extends into other spaces. Keeping these interests simple and grounded keeps thinking fresh.
            </p>

            <div className="interests-sketches-list">
              {/* Photography */}
              <div className="interest-sketch-item">
                <div className="interest-doodle">
                  <svg width="40" height="32" viewBox="0 0 40 32" fill="none">
                    <rect x="2" y="8" width="36" height="22" rx="3" stroke="#141414" strokeWidth="1.5" />
                    <circle cx="20" cy="19" r="6" stroke="#0055d4" strokeWidth="1.5" />
                    <rect x="14" y="4" width="12" height="4" rx="1" stroke="#141414" strokeWidth="1.2" />
                    <circle cx="9" cy="13" r="1.5" fill="#d93829" />
                  </svg>
                </div>
                <div className="interest-details">
                  <div className="interest-title-row">
                    <span className="interest-name">Photography</span>
                    <span className="hand-note hand-note-red" style={{ fontSize: '0.95rem' }}>* an unusual interest</span>
                  </div>
                  <p className="interest-note">Observing frames, compositions, and natural lighting in ordinary scenes.</p>
                </div>
              </div>

              {/* Movies */}
              <div className="interest-sketch-item">
                <div className="interest-doodle">
                  <svg width="40" height="32" viewBox="0 0 40 32" fill="none">
                    <rect x="4" y="6" width="32" height="20" rx="2" stroke="#141414" strokeWidth="1.5" />
                    <polygon points="17,11 25,16 17,21" fill="#0055d4" />
                  </svg>
                </div>
                <div className="interest-details">
                  <span className="interest-name">Movies</span>
                  <p className="interest-note">Appreciating storytelling, pacing, and visual cinematography.</p>
                </div>
              </div>

              {/* Music */}
              <div className="interest-sketch-item">
                <div className="interest-doodle">
                  <svg width="40" height="32" viewBox="0 0 40 32" fill="none">
                    <circle cx="12" cy="22" r="4" stroke="#141414" strokeWidth="1.5" />
                    <circle cx="28" cy="19" r="4" stroke="#141414" strokeWidth="1.5" />
                    <path d="M16 22 V 10 H 32 V 19" stroke="#141414" strokeWidth="1.5" />
                    <path d="M16 14 H 32" stroke="#0055d4" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="interest-details">
                  <span className="interest-name">Music</span>
                  <p className="interest-note">Background rhythms during long problem-solving and coding sessions.</p>
                </div>
              </div>

              {/* Travelling */}
              <div className="interest-sketch-item">
                <div className="interest-doodle">
                  <svg width="40" height="32" viewBox="0 0 40 32" fill="none">
                    <circle cx="20" cy="16" r="12" stroke="#141414" strokeWidth="1.5" strokeDasharray="3 2" />
                    <polygon points="20,7 24,16 20,25 16,16" stroke="#d93829" strokeWidth="1.2" fill="rgba(217,56,41,0.2)" />
                  </svg>
                </div>
                <div className="interest-details">
                  <span className="interest-name">Travelling</span>
                  <p className="interest-note">Experiencing new places, long roads, and fresh perspectives.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
