import React from 'react';
import { personalData } from '../../data/portfolioData';
import './JarvisFeature.css';

export default function JarvisFeature() {
  const jarvis = personalData.personalStory.jarvisProject;

  return (
    <section id="jarvis-thread" className="editorial-jarvis-section" aria-label="JARVIS Long-Term Project Thread">
      <div className="editorial-container">
        {/* Top Eyebrow Header */}
        <div className="jarvis-topline">
          <span className="tech-meta"><span className="tech-marker">★</span>{jarvis.eyebrow}</span>
          <span className="jarvis-status-tag tech-meta">{jarvis.status}</span>
        </div>

        {/* Feature Narrative Block */}
        <div className="jarvis-content-layout">
          <div className="jarvis-title-col">
            <h2 className="jarvis-main-title">{jarvis.title}</h2>
            <p className="jarvis-intro-statement">
              "{jarvis.intro}"
            </p>
          </div>

          <div className="jarvis-body-col">
            <p className="jarvis-text">{jarvis.text}</p>
            <div className="jarvis-focus-strip">
              <span className="focus-label tech-meta">GUIDING THOUGHT:</span>
              <p className="focus-detail">
                Not trying to simulate sci-fi miracles, but pursuing a genuinely reliable assistant that can observe, comprehend human context, and take real friction out of daily life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
