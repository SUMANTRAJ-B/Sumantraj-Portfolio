import React, { useState } from 'react';
import './SketchNav.css';

export default function SketchNav({ onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'ABOUT', href: '#sketch-about' },
    { label: 'NOTEBOOK', href: '#sketch-story' },
    { label: 'SKILLS', href: '#sketch-skills' },
    { label: 'WORK', href: '#sketch-work' },
    { label: 'JARVIS', href: '#sketch-jarvis' },
    { label: 'PHILOSOPHY', href: '#sketch-philosophy' },
    { label: 'EXPLORATION', href: '#sketch-exploration' },
    { label: 'CONTACT', href: '#sketch-contact' },
  ];

  const handleSwitchToOther = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/sketch');
    } else {
      window.history.pushState({}, '', '/sketch');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <header className="sketch-nav-header">
      <div className="sketch-nav-container">
        {/* Brand */}
        <a href="#sketch-top" className="sketch-nav-brand">
          <span className="brand-sketch-name">SUMANTRAJ B</span>
          <span className="brand-sketch-doodle" aria-hidden="true">
            <svg width="42" height="12" viewBox="0 0 42 12" fill="none">
              <path d="M2 9C12 3 28 4 40 8" stroke="#0055d4" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="sketch-nav-links desktop-only" aria-label="Sketch Navigation">
          <ul className="sketch-nav-list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="sketch-nav-item">
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Switch Link & Mobile Trigger */}
        <div className="sketch-nav-right">
          <a
            href="/sketch"
            onClick={handleSwitchToOther}
            className="sketch-other-version-btn desktop-only"
            aria-label="View other version of portfolio"
          >
            <span>VIEW OTHER VERSION</span>
            <span className="sketch-arrow">↗</span>
          </a>

          <button
            type="button"
            className="sketch-mobile-trigger mobile-only"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            {mobileOpen ? '[ CLOSE ]' : '[ MENU ]'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="sketch-mobile-drawer">
          <ul className="sketch-mobile-list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="sketch-mobile-item"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/sketch"
                onClick={(e) => {
                  setMobileOpen(false);
                  handleSwitchToOther(e);
                }}
                className="sketch-mobile-item switch-item"
              >
                VIEW OTHER VERSION ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
