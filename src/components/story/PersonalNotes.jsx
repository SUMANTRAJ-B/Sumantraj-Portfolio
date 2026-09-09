import React from 'react';
import { personalData } from '../../data/portfolioData';
import './PersonalNotes.css';

export default function PersonalNotes() {
  const philosophy = personalData.personalStory.philosophy;

  return (
    <section id="philosophy" className="editorial-notes-section" aria-label="Personal Philosophy and Life Outside Technology">
      <div className="editorial-container">
        {/* Top Header */}
        <header className="editorial-section-header">
          <div className="editorial-index-row">
            <span className="tech-meta"><span className="tech-marker">05</span>PERSPECTIVE &amp; PHILOSOPHY</span>
            <span className="tech-meta desktop-only">HUMAN GROUNDING</span>
          </div>
        </header>

        {/* 2-Column Editorial Grid: Philosophy on Left, Outside Tech on Right */}
        <div className="notes-two-col-grid">
          {/* Column 1: Philosophy */}
          <div className="notes-col philosophy-block">
            <span className="tech-meta block-label">PERSONAL MINDSET</span>
            <blockquote className="philosophy-quote">
              "{philosophy.quote}"
            </blockquote>
            <p className="philosophy-paragraph">{philosophy.text}</p>
          </div>

          {/* Column 2: Life Outside Technology */}
          <div className="notes-col life-outside-block">
            <span className="tech-meta block-label">LIFE OUTSIDE TECH</span>
            <p className="life-intro">
              Engineering is central, but perspective comes from living outside the editor.
            </p>

            <div className="interests-pills-list">
              {personalData.lifeOutsideTech.map((item) => (
                <div key={item.name} className="life-item-row">
                  <span className="life-bullet">/</span>
                  <div className="life-text-wrap">
                    <span className="life-name">{item.name}</span>
                    <span className="life-note">{item.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
