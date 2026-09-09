import React from 'react';
import SafetyCaseStudy from './SafetyCaseStudy';
import VehicleCaseStudy from './VehicleCaseStudy';
import './WorkSection.css';

export default function WorkSection() {
  return (
    <section id="work" className="work-editorial-section" aria-label="Selected Work">
      <div className="editorial-container">
        {/* Section Header */}
        <header className="editorial-section-header">
          <div className="editorial-index-row">
            <span className="tech-meta"><span className="tech-marker">03</span>SELECTED WORK</span>
            <span className="tech-meta">02 CASE STUDIES</span>
          </div>
          <h2 className="editorial-section-title">Featured Systems</h2>
          <p className="editorial-section-sub">
            In-depth architecture case studies spanning industrial IoT telemetry, machine learning risk engines, and computer vision classification.
          </p>
        </header>

        {/* Case Studies Container */}
        <div className="case-studies-list">
          {/* Project 01 */}
          <SafetyCaseStudy />

          {/* Project 02 */}
          <VehicleCaseStudy />
        </div>
      </div>
    </section>
  );
}
