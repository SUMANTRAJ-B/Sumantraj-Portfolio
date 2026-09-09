import React from 'react';
import { personalData } from '../../data/portfolioData';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <section id="about" className="editorial-about-section" aria-label="About Sumantraj B">
      <div className="editorial-container">
        {/* Section Index Header */}
        <header className="editorial-section-header">
          <div className="editorial-index-row">
            <span className="tech-meta"><span className="tech-marker">01</span>ABOUT</span>
            <span className="tech-meta desktop-only">ENGINEERING IDENTITY &amp; EDUCATION</span>
          </div>
        </header>

        {/* Editorial Statement (Large Typography) */}
        <div className="about-statement-wrap">
          <h2 className="about-statement-text">
            I build systems at the intersection of{' '}
            <span className="accent-word">software</span>,{' '}
            <span className="accent-word">machine learning</span>,{' '}
            <span className="accent-word">computer vision</span>, and{' '}
            <span className="accent-word">hardware</span>.
          </h2>
        </div>

        {/* Editorial Information Columns */}
        <div className="about-details-grid">
          {/* Column 1: Status & Roles */}
          <div className="about-col">
            <div className="col-meta tech-meta">CURRENT STATUS</div>
            <p className="col-value-primary">{personalData.roleShort1}</p>
            <p className="col-value-secondary">{personalData.roleShort2}</p>

            <div className="col-meta tech-meta col-spacer">TARGET ROLES</div>
            <ul className="target-roles-list">
              {personalData.targetRoles.map((role) => (
                <li key={role}>
                  <span className="role-bullet">/</span>
                  <span>{role}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Education */}
          <div className="about-col">
            <div className="col-meta tech-meta">ACADEMIC BACKGROUND</div>
            <div className="education-entry">
              <h3 className="edu-degree">{personalData.education.college.degree}</h3>
              <p className="edu-institution">{personalData.education.college.institution}</p>
              <span className="edu-tag tech-meta">{personalData.education.college.graduation} · {personalData.education.college.cgpa}</span>
            </div>

            <div className="education-entry col-spacer-sm">
              <h4 className="edu-school">{personalData.education.school.institution}</h4>
              <p className="edu-details tech-meta">{personalData.education.school.details}</p>
            </div>
          </div>

          {/* Column 3: Location & Core Focus */}
          <div className="about-col">
            <div className="col-meta tech-meta">LOCATION</div>
            <p className="col-value-primary">{personalData.location}</p>
            <p className="col-value-secondary">12.12°N 78.15°E</p>

            <div className="col-meta tech-meta col-spacer">CORE INTERESTS</div>
            <ul className="interests-editorial-list">
              {personalData.interests.map((item) => (
                <li key={item} className="interest-item">
                  <span className="interest-bullet">+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
