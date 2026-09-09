import React from 'react';
import { personalData } from '../../data/portfolioData';
import './SketchContact.css';

export default function SketchContact({ onNavigate }) {
  const handleSwitchToDark = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/');
    } else {
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <footer id="sketch-contact" className="sketch-contact-section" aria-label="Contact & Closing">
      <div className="sketch-container">
        {/* Section Top Header */}
        <div className="sketch-section-header">
          <span className="hand-note">Fig 09. / Direct Communication</span>
          <span className="font-mono-tag">[ CONTACT ]</span>
        </div>

        {/* Closing Main */}
        <div className="sketch-contact-main">
          <span className="hand-note hand-note-red">✎ Open for AI/ML &amp; Software opportunities</span>
          <h2 className="sketch-contact-heading">
            Let's build something.
          </h2>

          {/* Email Box */}
          <div className="sketch-box email-sketch-box">
            <span className="font-mono-tag">DIRECT INQUIRY</span>
            <a
              href={`mailto:${personalData.email}`}
              className="sketch-email-link"
              aria-label={`Send email to ${personalData.email}`}
            >
              <span>{personalData.email}</span>
              <span className="sketch-arrow">↗</span>
            </a>
            <span className="hand-note">"Replies usually within 24 hours"</span>
          </div>

          {/* Secondary Resume Action Box */}
          <div className="sketch-box resume-sketch-box">
            <span className="font-mono-tag">[ OFFICIAL CURRICULUM VITAE ]</span>
            <div className="sketch-contact-resume-btns">
              <a
                href="/assets/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="sketch-btn sketch-btn-secondary"
                aria-label="View Resume PDF in new tab"
              >
                <span>VIEW RESUME</span>
                <span className="btn-arrow">↗</span>
              </a>
              <a
                href="/assets/resume.pdf"
                download="Sumantraj_B_Resume.pdf"
                className="sketch-btn sketch-btn-secondary"
                aria-label="Download Resume PDF"
              >
                <span>DOWNLOAD RESUME</span>
                <span className="btn-arrow">↓</span>
              </a>
            </div>
            <span className="hand-note" style={{ fontSize: '0.95rem', color: '#555' }}>
              ✎ Full academic, project &amp; internship details (PDF)
            </span>
          </div>

          {/* Profiles & Links */}
          <div className="sketch-contact-profiles">
            <div className="contact-links-list">
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="sketch-contact-social"
              >
                <span>LinkedIn Profile</span>
                <span>↗</span>
              </a>
              <span className="social-divider">/</span>
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="sketch-contact-social"
              >
                <span>GitHub Repositories</span>
                <span>↗</span>
              </a>
            </div>

            <div className="contact-switch-option">
              <a
                href="/"
                onClick={handleSwitchToDark}
                className="sketch-other-version-btn"
              >
                <span>SWITCH TO EDITORIAL DARK PORTFOLIO</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Hand-Drawn Footer Bottom */}
        <div className="sketch-footer-bottom">
          <div className="footer-signature">
            <span className="sig-name">{personalData.name}</span>
            <span className="sig-role font-mono-tag">{personalData.role}</span>
          </div>

          <a href="#sketch-top" className="sketch-back-to-top">
            <span className="font-mono-tag">BACK TO TOP</span>
            <span>↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
