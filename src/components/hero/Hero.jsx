import React, { useState, useEffect } from 'react';
import './Hero.css';

export default function Hero() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 14;
      const y = (e.clientY / innerHeight - 0.5) * 14;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="top" className="hero-editorial" aria-label="Introduction">
      {/* Subtle cursor-responsive coordinate crosshair */}
      <div
        className="hero-crosshair"
        style={{
          transform: `translate3d(${mouseOffset.x * 0.7}px, ${mouseOffset.y * 0.7}px, 0)`,
        }}
        aria-hidden="true"
      >
        <div className="crosshair-h" />
        <div className="crosshair-v" />
        <span className="crosshair-coord">12.12°N 78.15°E</span>
      </div>

      <div className="hero-container">
        {/* Top Editorial Index */}
        <div className="hero-meta-top">
          <div className="meta-col">
            <span className="tech-marker">00</span>
            <span className="tech-meta">PORTFOLIO // 2026</span>
          </div>
          <div className="meta-col desktop-only">
            <span className="tech-meta">DHARMAPURI, INDIA</span>
          </div>
        </div>

        {/* Hero Content Grid: Text & Info on Left, Editorial Portrait on Right */}
        <div className="hero-main-grid">
          <div className="hero-info-col">
            {/* Primary Identity Typography */}
            <div className="hero-headline-block">
              <h1 className="hero-name glitch-hover" data-text="SUMANTRAJ B">
                SUMANTRAJ B
              </h1>
              <div className="hero-role-row">
                <span className="role-tag">AI/ML Student</span>
                <span className="role-separator">|</span>
                <span className="role-tag">Aspiring AI Engineer</span>
              </div>
            </div>

            {/* Core Narrative Statement */}
            <div className="hero-statement-block">
              <p className="hero-statement">
                Building intelligent systems where machine learning, software, computer vision, and hardware meet.
              </p>
            </div>

            {/* Resume Actions Group */}
            <div className="hero-resume-actions">
              <span className="resume-label tech-meta">RESUME // OFFICIAL CV</span>
              <div className="resume-btn-row">
                <a
                  href="/assets/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-editorial btn-resume-view"
                  aria-label="View Sumantraj B Resume in new tab (PDF)"
                >
                  <span className="btn-bracket">[</span>
                  <span className="btn-text">VIEW RESUME</span>
                  <span className="btn-arrow">↗</span>
                  <span className="btn-bracket">]</span>
                </a>
                <a
                  href="/assets/resume.pdf"
                  download="Sumantraj_B_Resume.pdf"
                  className="btn-editorial btn-resume-download"
                  aria-label="Download Sumantraj B Resume (PDF)"
                >
                  <span className="btn-bracket">[</span>
                  <span className="btn-text">DOWNLOAD RESUME</span>
                  <span className="btn-arrow">↓</span>
                  <span className="btn-bracket">]</span>
                </a>
              </div>
            </div>

            {/* Action Triggers & Direct Profiles */}
            <div className="hero-actions-row">
              <div className="cta-group">
                <a href="#work" className="btn-editorial btn-primary">
                  <span className="btn-bracket">[</span>
                  <span className="btn-text">VIEW WORK</span>
                  <span className="btn-bracket">]</span>
                </a>
                <a href="#contact" className="btn-editorial btn-secondary">
                  <span className="btn-bracket">[</span>
                  <span className="btn-text">CONTACT</span>
                  <span className="btn-bracket">]</span>
                </a>
              </div>

              <div className="social-links-group">
                <a
                  href="https://github.com/SUMANTRAJ-B"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link"
                  aria-label="GitHub Profile (external link)"
                >
                  <span>GitHub</span>
                  <span className="link-arrow">↗</span>
                </a>
                <span className="link-divider">/</span>
                <a
                  href="https://www.linkedin.com/in/sumantraj-b-452b82312/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link"
                  aria-label="LinkedIn Profile (external link)"
                >
                  <span>LinkedIn</span>
                  <span className="link-arrow">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Editorial Portrait Column */}
          <div className="hero-portrait-col">
            <div className="portrait-frame">
              <div className="portrait-header">
                <span className="tech-meta">[ ID // SUMANTRAJ B ]</span>
                <span className="tech-status-dot" aria-hidden="true"></span>
              </div>
              <div className="portrait-image-wrapper">
                <img
                  src="/assets/profile.png"
                  alt="Sumantraj B — AI/ML Student | Aspiring AI Engineer"
                  className="portrait-image"
                  loading="eager"
                />
                {/* Minimalist technical corner markers */}
                <span className="corner-mark top-left">+</span>
                <span className="corner-mark top-right">+</span>
                <span className="corner-mark bottom-left">+</span>
                <span className="corner-mark bottom-right">+</span>
              </div>
              <div className="portrait-footer">
                <span className="tech-meta">KCE // B.TECH AI &amp; DS</span>
                <span className="tech-meta">EXP: 2028</span>
              </div>
            </div>
          </div>
        </div>

        {/* Opening Meta Footer (NexStudio-inspired scroll cue) */}
        <div className="hero-scroll-cue">
          <span className="tech-meta">SCROLL TO EXPLORE STORY</span>
          <span className="scroll-arrow" aria-hidden="true">↓</span>
        </div>
      </div>
    </section>
  );
}
