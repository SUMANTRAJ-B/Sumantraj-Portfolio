import React from 'react';
import { personalData } from '../../data/portfolioData';
import './SketchStory.css';

export default function SketchStory() {
  const story = personalData.personalStory;

  return (
    <section id="sketch-story" className="sketch-story-section" aria-label="Where It Started - Notebook Story">
      <div className="sketch-container">
        {/* Top Header */}
        <div className="sketch-section-header">
          <span className="hand-note">Fig 03. / Engineering Notebook</span>
          <span className="font-mono-tag">[ WHERE IT STARTED ]</span>
        </div>

        <div className="sketch-story-headline-wrap">
          <h2 className="sketch-story-headline">The Origin Story</h2>
          <p className="sketch-story-sub">
            Not a premeditated master plan, but an organic chain of curiosity, hands-on messing around, and unexpected opportunities.
          </p>
        </div>

        {/* Illustrated Notebook Entries */}
        <div className="sketch-notebook-grid">
          {/* Entry 01: Taking Things Apart */}
          <div className="sketch-box notebook-entry">
            <div className="entry-header">
              <span className="font-mono-tag">01 / CHILDHOOD</span>
              <span className="hand-note hand-note-red">quiet &amp; curious</span>
            </div>
            <h3 className="entry-title">{story.childhood.title}</h3>
            <p className="entry-text">{story.childhood.text}</p>
            <div className="entry-doodle-area">
              <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
                {/* Little gear / gadget doodle */}
                <circle cx="30" cy="20" r="10" stroke="#141414" strokeWidth="1.5" strokeDasharray="3 2" />
                <path d="M45 20 H 65 M58 14 L 65 20 L 58 26" stroke="#0055d4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="75" y="10" width="30" height="20" rx="3" stroke="#141414" strokeWidth="1.5" />
                <circle cx="85" cy="20" r="2" fill="#d93829" />
              </svg>
              <span className="hand-note" style={{ fontSize: '1.05rem', color: '#555' }}>
                "taking things apart to see how they worked"
              </span>
            </div>
          </div>

          {/* Entry 02: Python & Chatbot */}
          <div className="sketch-box notebook-entry">
            <div className="entry-header">
              <span className="font-mono-tag">02 / FIRST CODE</span>
              <span className="hand-note" style={{ color: '#0055d4' }}>school experiments</span>
            </div>
            <h3 className="entry-title">{story.earlyInterests.title}</h3>
            <p className="entry-text">{story.earlyInterests.text}</p>
            <div className="entry-doodle-area">
              <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
                {/* Chatbot bubble doodle */}
                <rect x="10" y="8" width="45" height="24" rx="4" stroke="#141414" strokeWidth="1.5" fill="#fff" />
                <path d="M18 32 L 24 32 L 20 37 Z" fill="#141414" />
                <text x="18" y="24" fontFamily="JetBrains Mono" fontSize="8" fill="#0055d4">&gt; Hello</text>
                <path d="M65 20 H 85 M78 14 L 85 20 L 78 26" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="102" cy="20" r="10" stroke="#d93829" strokeWidth="1.5" />
              </svg>
              <span className="hand-note" style={{ fontSize: '1.05rem', color: '#555' }}>
                "first moment: I actually like building things"
              </span>
            </div>
          </div>

          {/* Entry 03: The Spark (Iron Man / JARVIS) */}
          <div className="sketch-box notebook-entry">
            <div className="entry-header">
              <span className="font-mono-tag">03 / THE SPARK</span>
              <span className="hand-note hand-note-red">Iron Man / JARVIS</span>
            </div>
            <h3 className="entry-title">{story.aiOrigin.title}</h3>
            <p className="entry-text">{story.aiOrigin.text}</p>
            <div className="entry-doodle-area">
              <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
                {/* Arc reactor / assistant node doodle */}
                <circle cx="30" cy="20" r="12" stroke="#0055d4" strokeWidth="1.5" />
                <circle cx="30" cy="20" r="6" stroke="#0055d4" strokeWidth="1.5" strokeDasharray="2 2" />
                <path d="M50 20 H 75 M68 14 L 75 20 L 68 26" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <text x="82" y="24" fontFamily="Caveat" fontSize="16" fill="#0055d4">AI assistant</text>
              </svg>
              <span className="hand-note" style={{ fontSize: '1.05rem', color: '#555' }}>
                "a system that can understand &amp; assist"
              </span>
            </div>
          </div>

          {/* Entry 04: Software to Hardware */}
          <div className="sketch-box notebook-entry">
            <div className="entry-header">
              <span className="font-mono-tag">04 / HARDWARE LEAP</span>
              <span className="hand-note" style={{ color: '#0055d4' }}>out of nowhere, by luck</span>
            </div>
            <h3 className="entry-title">{story.fromSoftwareToHardware.title}</h3>
            <p className="entry-text">{story.fromSoftwareToHardware.text}</p>
            <div className="entry-doodle-area">
              <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
                {/* Sensor probe to microcontroller doodle */}
                <rect x="10" y="10" width="30" height="20" rx="3" stroke="#141414" strokeWidth="1.5" />
                <text x="14" y="23" fontFamily="JetBrains Mono" fontSize="6">ESP32</text>
                <path d="M45 20 C 60 12, 70 28, 85 20" stroke="#0055d4" strokeWidth="1.5" />
                <circle cx="95" cy="20" r="6" stroke="#d93829" strokeWidth="1.5" />
              </svg>
              <span className="hand-note" style={{ fontSize: '1.05rem', color: '#555' }}>
                "Software + AI + Hardware"
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Handwritten Motivation Quote */}
        <div className="sketch-motivation-notebook">
          <span className="hand-note hand-note-red" style={{ fontSize: '1.5rem' }}>
            ✎ Core Motivation:
          </span>
          <p className="motivation-hand-quote">
            "{story.motivation.quote}"
          </p>
          <p className="motivation-hand-sub">
            {story.motivation.text}
          </p>
        </div>
      </div>
    </section>
  );
}
