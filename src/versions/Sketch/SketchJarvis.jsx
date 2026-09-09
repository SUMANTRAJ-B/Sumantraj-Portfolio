import React from 'react';
import { personalData } from '../../data/portfolioData';
import './SketchJarvis.css';

export default function SketchJarvis() {
  const jarvis = personalData.personalStory.jarvisProject;

  const explorationFocus = [
    'Genuinely useful assistant capabilities (not exaggerated sci-fi claims)',
    'Natural voice & contextual interaction loops',
    'Local integration with desktop tasks & hardware signals',
    'Continuous iteration as understanding of Agentic AI deepens',
  ];

  const groundingNote =
    'I do not claim AGI or futuristic capabilities that are not built. It remains an active, honest engineering exploration that anchors why I build.';

  return (
    <section id="sketch-jarvis" className="sketch-jarvis-section" aria-label="JARVIS Long-Term Project Thread">
      <div className="sketch-container">
        {/* Section Header */}
        <div className="sketch-section-header">
          <span className="hand-note">Fig 06. / Unfinished Exploration</span>
          <span className="font-mono-tag">[ LONG-TERM THREAD ]</span>
        </div>

        {/* Blueprint Box */}
        <div className="sketch-box jarvis-blueprint-box">
          {/* Top Tape */}
          <div className="card-top-tape"></div>

          <div className="jarvis-blueprint-header">
            <div>
              <span className="font-mono-tag" style={{ color: '#d93829' }}>
                {jarvis?.status || 'LONG-TERM THREAD / IN PROGRESS'}
              </span>
              <h2 className="jarvis-blueprint-title">{jarvis?.title || 'JARVIS / Benzi'}</h2>
              <p className="jarvis-blueprint-sub">The Ongoing Personal AI Assistant Project</p>
            </div>
            <div className="jarvis-tape-stamp">
              <span className="hand-note hand-note-red" style={{ fontSize: '1.25rem' }}>
                * Not a standard card
              </span>
            </div>
          </div>

          {/* Lead Quote */}
          <div className="jarvis-quote-banner">
            <span className="hand-quote-symbol">“</span>
            <p className="jarvis-hand-quote">{jarvis?.intro}</p>
          </div>

          {/* Two Columns: Schematic + Reality */}
          <div className="jarvis-content-grid">
            <div className="jarvis-schematic-col">
              <span className="hand-note" style={{ color: '#0055d4' }}>
                ✎ System Architecture Sketch (Benzi)
              </span>

              {/* Hand-drawn style SVG architecture diagram */}
              <div className="jarvis-diagram-wrap">
                <svg viewBox="0 0 380 200" className="jarvis-svg" fill="none">
                  {/* Node 1: Input */}
                  <rect x="15" y="70" width="85" height="50" rx="3" stroke="#141414" strokeWidth="1.5" fill="#faf7f2" />
                  <text x="25" y="92" fontFamily="JetBrains Mono" fontSize="9" fill="#141414">INPUT LAYER</text>
                  <text x="25" y="106" fontFamily="Inter" fontSize="8" fill="#555">Voice / Context</text>

                  {/* Arrow 1 */}
                  <path d="M100 95 H 135 M128 90 L 135 95 L 128 100" stroke="#0055d4" strokeWidth="1.5" />

                  {/* Node 2: Core Assistant Loop */}
                  <rect x="135" y="55" width="110" height="80" rx="4" stroke="#0055d4" strokeWidth="2" strokeDasharray="4 2" fill="#fff" />
                  <text x="145" y="80" fontFamily="JetBrains Mono" fontSize="9" fontWeight="bold" fill="#0055d4">BENZI CORE</text>
                  <text x="145" y="96" fontFamily="Inter" fontSize="8" fill="#141414">Context Tracking</text>
                  <text x="145" y="110" fontFamily="Inter" fontSize="8" fill="#141414">Local Agent Loop</text>
                  <text x="145" y="124" fontFamily="Inter" fontSize="8" fill="#555">Hardware Trigger</text>

                  {/* Arrow 2 */}
                  <path d="M245 95 H 280 M273 90 L 280 95 L 273 100" stroke="#0055d4" strokeWidth="1.5" />

                  {/* Node 3: Output */}
                  <rect x="280" y="70" width="85" height="50" rx="3" stroke="#141414" strokeWidth="1.5" fill="#faf7f2" />
                  <text x="290" y="92" fontFamily="JetBrains Mono" fontSize="9" fill="#141414">EXECUTION</text>
                  <text x="290" y="106" fontFamily="Inter" fontSize="8" fill="#555">Assistive Action</text>

                  {/* Handwritten annotations on diagram */}
                  <path d="M190 40 L 190 55" stroke="#d93829" strokeWidth="1" strokeDasharray="2 2" />
                  <text x="140" y="32" fontFamily="Caveat" fontSize="14" fill="#d93829">unfolding iteratively</text>

                  <path d="M190 145 L 190 160" stroke="#555" strokeWidth="1" strokeDasharray="2 2" />
                  <text x="135" y="175" fontFamily="Caveat" fontSize="13" fill="#555">sensors + desktop</text>
                </svg>
              </div>

              <div className="jarvis-hand-annotation">
                <span className="hand-note hand-note-red">
                  * Note: Still a personal work-in-progress. Not presented as a finished product.
                </span>
              </div>
            </div>

            <div className="jarvis-narrative-col">
              <p className="jarvis-concept-para">{jarvis?.text}</p>

              <div className="jarvis-focus-points">
                <span className="font-mono-tag">[ EXPLORATION FOCUS ]</span>
                <ul className="jarvis-list">
                  {explorationFocus.map((item, idx) => (
                    <li key={idx} className="jarvis-list-item">
                      <span className="item-bullet">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="jarvis-grounding-box">
                <p className="grounding-text">
                  <strong style={{ color: '#141414' }}>Reality check:</strong> {groundingNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
