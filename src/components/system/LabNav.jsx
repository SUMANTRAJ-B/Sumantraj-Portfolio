import React, { useState, useEffect } from 'react';
import './LabNav.css';

export default function LabNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const navItems = [
    { label: '01 // IDENTITY', href: '#identity' },
    { label: '02 // CAPABILITY MAP', href: '#capability' },
    { label: '03 // SYSTEM PIPELINES', href: '#projects' },
    { label: '04 // JOURNEY', href: '#journey' },
    { label: '05 // CONTACT', href: '#contact' },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={`lab-nav-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="lab-nav-bar">
        <a href="#hero" className="lab-brand" aria-label="Sumantraj B — Intelligence Lab">
          <span className="brand-accent">SB</span>
          <span className="brand-divider">//</span>
          <span className="brand-title">INTELLIGENCE LAB</span>
        </a>

        {/* Desktop Quick Jump Links */}
        <nav className="desktop-menu" aria-label="Section Navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="desktop-link">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile/Compact Index Button */}
        <button
          type="button"
          className="menu-trigger-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="nav-overlay"
          aria-label={isOpen ? 'Close navigation index' : 'Open navigation index'}
        >
          <span className="trigger-label">INDEX</span>
          <span className="trigger-dot" aria-hidden="true"></span>
        </button>
      </div>

      {/* Slide-down / Overlay Index for Mobile / Focused Browsing */}
      <div
        id="nav-overlay"
        className={`nav-overlay ${isOpen ? 'is-open' : ''}`}
        aria-hidden={!isOpen}
      >
        <div className="overlay-inner">
          <div className="overlay-meta">
            <span className="mono-label">SYSTEM DIRECTORY</span>
            <button
              type="button"
              className="overlay-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close directory"
            >
              CLOSE [✕]
            </button>
          </div>
          <ul className="overlay-list">
            {navItems.map((item, index) => (
              <li key={item.href} className="overlay-item">
                <a
                  href={item.href}
                  className="overlay-link"
                  onClick={handleNavClick}
                  tabIndex={isOpen ? 0 : -1}
                >
                  <span className="overlay-index">{`0${index + 1}`}</span>
                  <span className="overlay-text">{item.label.split('// ')[1]}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
