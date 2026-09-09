import React from 'react';
import { personalData } from '../../data/portfolioData';
import './SketchAbout.css';

export default function SketchAbout() {
  const edu = personalData.education;

  return (
    <section id="sketch-about" className="sketch-about-section" aria-label="About Sumantraj B">
      <div className="sketch-container">
        {/* Editorial Section Top Header */}
        <div className="sketch-section-header">
          <span className="hand-note">Fig 02. / Profile &amp; Education</span>
          <span className="font-mono-tag">[ ABOUT THE ENGINEER ]</span>
        </div>

        {/* Large Statement with Hand-Drawn Highlights */}
        <div className="sketch-statement-box">
          <h2 className="sketch-about-statement">
            I build systems at the intersection of{' '}
            <span className="sketch-highlight">software</span>,{' '}
            <span className="sketch-highlight">machine learning</span>,{' '}
            <span className="sketch-highlight">computer vision</span>, and{' '}
            <span className="sketch-highlight">hardware</span>.
          </h2>
          <div className="hand-side-annotation">
            <span className="hand-note hand-note-red">✎ "not just software on screen, but systems that assist in real life"</span>
          </div>
        </div>

        {/* 3 Illustrated Sketch Cards / Columns */}
        <div className="sketch-about-columns">
          {/* Card 1: Status & Roles */}
          <div className="sketch-box about-sketch-card">
            <div className="card-top-tape"></div>
            <span className="font-mono-tag">CURRENT TRAJECTORY</span>
            <h3 className="card-heading">{personalData.roleShort1}</h3>
            <p className="card-sub">{personalData.roleShort2}</p>

            <div className="divider-doodle">
              <svg width="100%" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M2 4 Q 50 1, 100 4 T 198 4" stroke="#141414" strokeWidth="1.2" fill="none" />
              </svg>
            </div>

            <span className="font-mono-tag">TARGET ROLES</span>
            <ul className="sketch-check-list">
              {personalData.targetRoles.map((role) => (
                <li key={role}>
                  <span className="check-box">[✓]</span>
                  <span className="role-name">{role}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Education */}
          <div className="sketch-box about-sketch-card">
            <div className="card-top-tape"></div>
            <span className="font-mono-tag">ACADEMIC PATHWAY</span>
            <h3 className="card-heading">{edu.college.degree}</h3>
            <p className="card-sub">{edu.college.institution}</p>
            <span className="hand-note" style={{ color: '#0055d4', fontSize: '1.1rem' }}>
              {edu.college.graduation} · {edu.college.cgpa}
            </span>

            <div className="divider-doodle">
              <svg width="100%" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M2 4 Q 50 7, 100 4 T 198 4" stroke="#141414" strokeWidth="1.2" fill="none" />
              </svg>
            </div>

            <span className="font-mono-tag">PREVIOUS SCHOOLING</span>
            <p className="card-school-name">{edu.school.institution}</p>
            <span className="font-mono-tag" style={{ color: '#555' }}>{edu.school.details}</span>
          </div>

          {/* Card 3: Location & Mindset */}
          <div className="sketch-box about-sketch-card">
            <div className="card-top-tape"></div>
            <span className="font-mono-tag">BASE LOCATION</span>
            <h3 className="card-heading">{personalData.location}</h3>
            <p className="card-sub">India [12.12°N 78.15°E]</p>

            <div className="divider-doodle">
              <svg width="100%" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M2 4 Q 50 7, 100 4 T 198 4" stroke="#141414" strokeWidth="1.2" fill="none" />
              </svg>
            </div>

            <span className="font-mono-tag">STARTING PRINCIPLE</span>
            <p className="sketch-philosophy-text">
              "Entered college with an open mind and no rigid expectations—ready to explore where curiosity led."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
