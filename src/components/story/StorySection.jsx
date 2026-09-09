import React from 'react';
import { personalData } from '../../data/portfolioData';
import './StorySection.css';

export default function StorySection() {
  const story = personalData.personalStory;

  const chapters = [
    {
      marker: '01',
      tag: 'CHILDHOOD',
      title: story.childhood.title,
      text: story.childhood.text,
    },
    {
      marker: '02',
      tag: 'FIRST CODE',
      title: story.earlyInterests.title,
      text: story.earlyInterests.text,
    },
    {
      marker: '03',
      tag: 'THE SPARK',
      title: story.aiOrigin.title,
      text: story.aiOrigin.text,
    },
    {
      marker: '04',
      tag: 'HARDWARE FUSION',
      title: story.fromSoftwareToHardware.title,
      text: story.fromSoftwareToHardware.text,
    },
  ];

  return (
    <section id="origins" className="editorial-story-section" aria-label="Origins and Personal Story">
      <div className="editorial-container">
        {/* Section Header */}
        <header className="editorial-section-header">
          <div className="editorial-index-row">
            <span className="tech-meta"><span className="tech-marker">02</span>WHERE IT STARTED</span>
            <span className="tech-meta desktop-only">ORIGINS &amp; EVOLUTION</span>
          </div>
          <h2 className="editorial-section-title">From Curiosity to Code</h2>
          <p className="editorial-section-sub">
            Not a calculated corporate ladder, but a sequence of curiosities, unexpected opportunities, and things I wanted to figure out.
          </p>
        </header>

        {/* Narrative Chapters Grid */}
        <div className="story-chapters-grid">
          {chapters.map((chap) => (
            <article key={chap.marker} className="story-chapter-card">
              <div className="chapter-topline">
                <span className="chapter-marker tech-meta">[{chap.marker}]</span>
                <span className="chapter-tag tech-meta">{chap.tag}</span>
              </div>
              <h3 className="chapter-title">{chap.title}</h3>
              <p className="chapter-text">{chap.text}</p>
            </article>
          ))}
        </div>

        {/* Motivation Pull-Quote */}
        <div className="story-motivation-callout">
          <span className="tech-meta callout-label">RECURRING MOTIVATION</span>
          <blockquote className="motivation-quote">
            "{story.motivation.quote}"
          </blockquote>
          <p className="motivation-subtext">{story.motivation.text}</p>
        </div>
      </div>
    </section>
  );
}
