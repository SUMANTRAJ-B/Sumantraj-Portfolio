import React from 'react';
import Navbar from '../../components/navigation/Navbar';
import Hero from '../../components/hero/Hero';
import AboutSection from '../../components/about/AboutSection';
import StorySection from '../../components/story/StorySection';
import DisciplinesSection from '../../components/disciplines/DisciplinesSection';
import WorkSection from '../../components/work/WorkSection';
import JarvisFeature from '../../components/story/JarvisFeature';
import PersonalNotes from '../../components/story/PersonalNotes';
import JourneySection from '../../components/journey/JourneySection';
import ContactSection from '../../components/contact/ContactSection';
import './CurrentPortfolio.css';

export default function CurrentPortfolio({ onNavigate }) {
  const handleSwitchToMain = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/');
    } else {
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <div className="current-portfolio-root">
      {/* Subtle Switch to Other Version Banner */}
      <div className="version-switch-banner">
        <a
          href="/"
          onClick={handleSwitchToMain}
          className="version-switch-link"
          aria-label="Switch to main version of portfolio"
        >
          <span className="switch-text">VIEW OTHER VERSION</span>
          <span className="switch-arrow">↗</span>
        </a>
      </div>

      {/* Subtle Editorial Grid Background */}
      <div className="editorial-grid-bg" aria-hidden="true" />

      {/* Subtle Hairline Vertical Guide Lines */}
      <div className="editorial-guide-lines" aria-hidden="true">
        <div className="guide-line-left" />
        <div className="guide-line-right" />
      </div>

      {/* Minimal Understated Navigation */}
      <Navbar />

      {/* Scroll-Driven Editorial Narrative */}
      <main id="main-content" className="portfolio-main">
        {/* 00. INTRODUCTION */}
        <Hero />

        {/* 01. ABOUT ME & EDUCATION */}
        <AboutSection />

        {/* 02. WHERE IT STARTED (Origins & Motivation) */}
        <StorySection />

        {/* 03. WHAT I BUILD (Disciplines & Verified Tools) */}
        <DisciplinesSection />

        {/* 04. SELECTED WORK (Centerpiece Case Studies) */}
        <WorkSection />

        {/* 05. THE UNFINISHED THREAD (JARVIS / Benzi) */}
        <JarvisFeature />

        {/* 06. PERSPECTIVE & PHILOSOPHY (Life outside tech & Mindset) */}
        <PersonalNotes />

        {/* 07. TECHNICAL JOURNEY & EVOLUTION (Trajectory & Current Exploration) */}
        <JourneySection />

        {/* 08. CONTACT (Let's Build Something) */}
        <ContactSection />
      </main>
    </div>
  );
}
