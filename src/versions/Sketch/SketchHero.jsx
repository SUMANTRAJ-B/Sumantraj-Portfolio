import React from 'react';
import { personalData } from '../../data/portfolioData';
import './SketchHero.css';

export default function SketchHero() {
  return (
    <section id="sketch-top" className="sketch-hero-section" aria-label="Sketch Hero">
      <div className="sketch-container">
        {/* Top Sketchbook Header Note */}
        <div className="sketch-hero-topline">
          <div className="sketch-folio-tag">
            <span className="hand-note">Fig 01. / Overview</span>
          </div>
          <div className="sketch-folio-loc">
            <span className="font-mono-tag">DHARMAPURI, INDIA [12.12°N 78.15°E]</span>
          </div>
        </div>

        {/* Center Grid: Typography & Actions on Left, Portrait Mount & Schematic on Right */}
        <div className="sketch-hero-grid">
          <div className="sketch-hero-main">
            <div className="sketch-eyebrow">
              <span className="sketch-pill-tag">AI/ML Student · Aspiring AI Engineer</span>
            </div>

            <h1 className="sketch-hero-name">
              SUMANTRAJ B
            </h1>

            <p className="sketch-hero-statement">
              "{personalData.statement}"
            </p>

            {/* Hand-Drawn Callout Note */}
            <div className="sketch-hand-callout">
              <svg className="curved-arrow" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M4 8C14 4 28 14 26 30M20 25L26 31L32 25" stroke="#0055d4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="hand-note">hardware meets ML models</span>
            </div>

            {/* Resume Actions Group */}
            <div className="sketch-resume-hero-group">
              <span className="hand-note hand-note-red" style={{ fontSize: '1.05rem' }}>
                ✎ Official Resume / CV:
              </span>
              <div className="sketch-resume-btns-row">
                <a
                  href="/assets/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sketch-btn sketch-btn-resume-view"
                  aria-label="View Resume PDF in new tab"
                >
                  <span>VIEW RESUME</span>
                  <span className="btn-arrow">↗</span>
                </a>
                <a
                  href="/assets/resume.pdf"
                  download="Sumantraj_B_Resume.pdf"
                  className="sketch-btn sketch-btn-resume-download"
                  aria-label="Download Resume PDF"
                >
                  <span>DOWNLOAD RESUME</span>
                  <span className="btn-arrow">↓</span>
                </a>
              </div>
            </div>

            {/* Primary Page Navigation Actions */}
            <div className="sketch-hero-actions">
              <a href="#sketch-work" className="sketch-btn sketch-btn-primary">
                <span>EXPLORE WORK</span>
                <span className="btn-arrow">↓</span>
              </a>
              <a href="#sketch-contact" className="sketch-btn sketch-btn-secondary">
                <span>GET IN TOUCH</span>
                <span className="btn-arrow">→</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="sketch-social-row">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="sketch-link"
              >
                <span>GitHub</span>
                <span>↗</span>
              </a>
              <span className="sketch-link-divider">·</span>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="sketch-link"
              >
                <span>LinkedIn</span>
                <span>↗</span>
              </a>
              <span className="sketch-link-divider">·</span>
              <a
                href={`mailto:${personalData.email}`}
                className="sketch-link"
              >
                <span>Email</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Mounted Portrait Photo Card & Engineering Schematic */}
          <div className="sketch-hero-art">
            {/* Mounted Portrait Photo Card */}
            <div className="sketch-photo-mount">
              <div className="photo-tape-top" aria-hidden="true"></div>
              <div className="photo-inner-frame">
                <img
                  src="/assets/profile.png"
                  alt="Sumantraj B — AI/ML Student | Aspiring AI Engineer"
                  className="sketch-photo-img"
                  loading="eager"
                />
              </div>
              <div className="photo-caption-row">
                <span className="font-mono-tag">[ FIG 01.A // PORTRAIT ]</span>
                <span className="hand-note hand-note-red">✎ Sumantraj B</span>
              </div>
            </div>

            {/* Schematic Canvas Board */}
            <div className="sketch-canvas-board" aria-hidden="true">
              <svg className="schematic-svg" viewBox="0 0 380 340" fill="none">
                {/* Microcontroller ESP32 Doodle */}
                <rect x="30" y="40" width="90" height="110" rx="6" stroke="#141414" strokeWidth="2" fill="#ffffff" />
                <rect x="42" y="55" width="66" height="50" rx="3" stroke="#141414" strokeWidth="1.5" strokeDasharray="3 3" fill="#faf7f2" />
                <text x="50" y="84" fontFamily="JetBrains Mono" fontSize="9" fontWeight="600" fill="#141414">ESP32</text>
                <text x="50" y="96" fontFamily="JetBrains Mono" fontSize="7" fill="#555555">IoT CORE</text>
                {/* Pins */}
                <line x1="20" y1="55" x2="30" y2="55" stroke="#141414" strokeWidth="2" />
                <line x1="20" y1="75" x2="30" y2="75" stroke="#141414" strokeWidth="2" />
                <line x1="20" y1="95" x2="30" y2="95" stroke="#141414" strokeWidth="2" />
                <line x1="20" y1="115" x2="30" y2="115" stroke="#141414" strokeWidth="2" />
                <line x1="20" y1="135" x2="30" y2="135" stroke="#141414" strokeWidth="2" />

                {/* Connecting Bus Line */}
                <path d="M120 95 C 160 95, 170 120, 200 120" stroke="#0055d4" strokeWidth="2" strokeDasharray="5 3" />
                <text x="135" y="85" fontFamily="Caveat" fontSize="16" fill="#0055d4">MQTT pub/sub</text>

                {/* Neural Net Nodes Doodle */}
                <g transform="translate(200, 50)">
                  {/* Layer 1 */}
                  <circle cx="20" cy="30" r="10" stroke="#141414" strokeWidth="2" fill="#ffffff" />
                  <circle cx="20" cy="70" r="10" stroke="#141414" strokeWidth="2" fill="#ffffff" />
                  <circle cx="20" cy="110" r="10" stroke="#141414" strokeWidth="2" fill="#ffffff" />

                  {/* Layer 2 */}
                  <circle cx="80" cy="45" r="10" stroke="#141414" strokeWidth="2" fill="#ffffff" />
                  <circle cx="80" cy="95" r="10" stroke="#141414" strokeWidth="2" fill="#ffffff" />

                  {/* Output Node */}
                  <circle cx="140" cy="70" r="12" stroke="#d93829" strokeWidth="2.5" fill="#fff" />
                  <text x="135" y="74" fontFamily="JetBrains Mono" fontSize="9" fill="#d93829">ŷ</text>

                  {/* Interconnections */}
                  <line x1="30" y1="30" x2="70" y2="45" stroke="#555555" strokeWidth="1" />
                  <line x1="30" y1="30" x2="70" y2="95" stroke="#555555" strokeWidth="1" />
                  <line x1="30" y1="70" x2="70" y2="45" stroke="#555555" strokeWidth="1" />
                  <line x1="30" y1="70" x2="70" y2="95" stroke="#555555" strokeWidth="1" />
                  <line x1="30" y1="110" x2="70" y2="45" stroke="#555555" strokeWidth="1" />
                  <line x1="30" y1="110" x2="70" y2="95" stroke="#555555" strokeWidth="1" />
                  <line x1="90" y1="45" x2="128" y2="70" stroke="#555555" strokeWidth="1.2" />
                  <line x1="90" y1="95" x2="128" y2="70" stroke="#555555" strokeWidth="1.2" />

                  <text x="45" y="145" fontFamily="Caveat" fontSize="15" fill="#141414">neural weights</text>
                </g>

                {/* Computer Vision Frame Box at bottom */}
                <g transform="translate(50, 200)">
                  <rect x="0" y="0" width="130" height="90" rx="4" stroke="#141414" strokeWidth="1.75" strokeDasharray="4 2" fill="#ffffff" />
                  <circle cx="65" cy="45" r="22" stroke="#141414" strokeWidth="1.5" />
                  <circle cx="65" cy="45" r="12" stroke="#0055d4" strokeWidth="2" fill="#faf7f2" />
                  {/* Bounding box corners */}
                  <path d="M12 14 H22 M12 14 V24" stroke="#d93829" strokeWidth="2" />
                  <path d="M118 14 H108 M118 14 V24" stroke="#d93829" strokeWidth="2" />
                  <path d="M12 76 H22 M12 76 V66" stroke="#d93829" strokeWidth="2" />
                  <path d="M118 76 H108 M118 76 V66" stroke="#d93829" strokeWidth="2" />
                  <text x="15" y="105" fontFamily="JetBrains Mono" fontSize="8" fill="#555555">CV // MobileNetV2</text>
                </g>

                {/* Handwritten Annotation Note */}
                <g transform="translate(210, 230)">
                  <path d="M0 25 C 20 10, 40 15, 60 5" stroke="#555555" strokeWidth="1" />
                  <text x="0" y="0" fontFamily="Caveat" fontSize="18" fill="#d93829">predictive risk</text>
                  <text x="0" y="18" fontFamily="Caveat" fontSize="18" fill="#d93829">&amp; classification</text>
                </g>
              </svg>

              <div className="sketch-caption">
                <span className="caption-star">★</span>
                <span className="caption-text">Physical Sensor Data ➔ Edge Processing ➔ Deep Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
