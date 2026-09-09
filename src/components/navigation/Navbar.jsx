import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'ORIGINS', href: '#origins' },
    { label: 'DISCIPLINES', href: '#disciplines' },
    { label: 'WORK', href: '#work' },
    { label: 'JARVIS', href: '#jarvis-thread' },
    { label: 'PHILOSOPHY', href: '#philosophy' },
    { label: 'JOURNEY', href: '#journey' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className={`portfolio-nav ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-container">
        {/* Simple Personal Brand */}
        <a href="#top" className="nav-brand glitch-hover" aria-label="Sumantraj B — Top">
          <span className="brand-primary">SUMANTRAJ B</span>
        </a>

        {/* Minimal Navigation Links */}
        <nav className="nav-menu desktop-only" aria-label="Primary Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.label} className="nav-item">
                <a href={link.href} className="nav-link">
                  <span className="link-hover-marker">/</span>
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          className="mobile-trigger mobile-only"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="trigger-text">{menuOpen ? '[ CLOSE ]' : '[ MENU ]'}</span>
        </button>
      </div>

      {/* Subtle Scroll Progress Traveler Line */}
      <div
        className="nav-scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Minimal Mobile Drawer */}
      <div className={`mobile-nav-drawer ${menuOpen ? 'is-open' : ''}`}>
        <ul className="mobile-list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
