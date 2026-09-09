import React, { useEffect } from 'react';
import SketchNav from './SketchNav';
import SketchHero from './SketchHero';
import SketchAbout from './SketchAbout';
import SketchStory from './SketchStory';
import SketchSkills from './SketchSkills';
import SketchProjects from './SketchProjects';
import SketchJarvis from './SketchJarvis';
import SketchPhilosophy from './SketchPhilosophy';
import SketchExploration from './SketchExploration';
import SketchContact from './SketchContact';
import './SketchPortfolio.css';

export default function SketchPortfolio({ onNavigate }) {
  useEffect(() => {
    // Add sketch-mode marker to document body for background/text handling
    document.body.classList.add('route-sketch');
    window.scrollTo(0, 0);

    return () => {
      document.body.classList.remove('route-sketch');
    };
  }, []);

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
    <div className="sketch-portfolio-root">
      {/* Subtle Floating Switcher back to Version 1 */}
      <div className="sketch-version-switch">
        <a
          href="/"
          onClick={handleSwitchToDark}
          className="sketch-switch-link"
          aria-label="Switch back to editorial dark version"
        >
          <span className="hand-note" style={{ color: '#0055d4' }}>[V1]</span>
          <span>VIEW OTHER VERSION</span>
          <span>↗</span>
        </a>
      </div>

      {/* Navigation */}
      <SketchNav onNavigate={onNavigate} />

      {/* Main Illustrated Journey */}
      <main id="sketch-main" className="sketch-main-content">
        <SketchHero />
        <SketchAbout />
        <SketchStory />
        <SketchSkills />
        <SketchProjects />
        <SketchJarvis />
        <SketchPhilosophy />
        <SketchExploration />
        <SketchContact onNavigate={onNavigate} />
      </main>
    </div>
  );
}
