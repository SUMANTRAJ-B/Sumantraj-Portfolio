import React from 'react';
import { personalData } from '../../data/portfolioData';
import './ContactSection.css';

export default function ContactSection() {
  return (
    <footer id="contact" className="contact-editorial-section" aria-label="Contact">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="editorial-index-row">
          <span className="tech-meta"><span className="tech-marker">05</span>CONTACT</span>
          <span className="tech-meta desktop-only">DIRECT INQUIRY</span>
        </div>

        {/* Large Statement */}
        <div className="contact-main">
          <span className="contact-eyebrow tech-meta">HAVE A ROLE OR PROJECT IN MIND?</span>
          <h2 className="contact-headline">
            Let's build something.
          </h2>

          {/* Direct Email Link */}
          <a
            href={`mailto:${personalData.email}`}
            className="contact-email-link"
            aria-label={`Send email to ${personalData.email}`}
          >
            <span className="email-address">{personalData.email}</span>
            <span className="email-arrow">↗</span>
          </a>

          {/* Secondary Resume Quick Actions */}
          <div className="contact-resume-row">
            <span className="tech-meta">RESUME // OFFICIAL CV:</span>
            <div className="contact-resume-links">
              <a
                href="/assets/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-resume-link"
                aria-label="View Resume PDF in new tab"
              >
                <span>[ VIEW RESUME ↗ ]</span>
              </a>
              <a
                href="/assets/resume.pdf"
                download="Sumantraj_B_Resume.pdf"
                className="contact-resume-link"
                aria-label="Download Resume PDF"
              >
                <span>[ DOWNLOAD RESUME ↓ ]</span>
              </a>
            </div>
          </div>

          {/* Social Profiles & Location */}
          <div className="contact-details-row">
            <div className="contact-links-group">
              <a
                href="https://www.linkedin.com/in/sumantraj-b-452b82312/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
              >
                <span>LinkedIn</span>
                <span className="link-arrow">↗</span>
              </a>
              <span className="link-divider">/</span>
              <a
                href="https://github.com/SUMANTRAJ-B"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
              >
                <span>GitHub</span>
                <span className="link-arrow">↗</span>
              </a>
            </div>

            <div className="contact-loc tech-meta">
              <span>DHARMAPURI, INDIA</span>
            </div>
          </div>
        </div>

        {/* Minimal Editorial Endplate */}
        <div className="contact-bottom-bar">
          <div className="bottom-brand">
            <span className="brand-title">SUMANTRAJ B</span>
            <span className="brand-role tech-meta">AI/ML STUDENT · ASPIRING AI ENGINEER</span>
          </div>

          <a href="#top" className="back-to-top tech-meta" aria-label="Back to top">
            <span>BACK TO TOP</span>
            <span>↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
