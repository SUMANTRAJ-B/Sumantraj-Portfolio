import React from 'react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Site Footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">SUMANTRAJ B</span>
            <p className="footer-tagline">AI/ML Student &amp; Aspiring AI Engineer</p>
          </div>

          <div className="footer-links">
            <a
              href="https://github.com/SUMANTRAJ-B"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="GitHub Profile (opens in new tab)"
            >
              GitHub
            </a>
            <span className="footer-sep" aria-hidden="true">/</span>
            <a
              href="https://www.linkedin.com/in/sumantraj-b-452b82312/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="LinkedIn Profile (opens in new tab)"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {currentYear} Sumantraj B. All rights reserved.
          </p>
          <div className="footer-engine">
            <span className="engine-indicator"></span>
            <span>Portfolio Baseline v1.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
