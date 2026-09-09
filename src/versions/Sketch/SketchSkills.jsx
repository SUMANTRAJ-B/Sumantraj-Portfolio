import React from 'react';
import { personalData } from '../../data/portfolioData';
import './SketchSkills.css';

export default function SketchSkills() {
  const skillBranches = [
    {
      group: 'MACHINE LEARNING CORE',
      color: '#0055d4',
      doodleNote: 'predictive models & tabular algorithms',
      items: ['Python', 'Scikit-learn', 'Random Forest', 'TensorFlow', 'Keras'],
    },
    {
      group: 'COMPUTER VISION',
      color: '#d93829',
      doodleNote: 'transfer learning & image feature vectors',
      items: ['OpenCV', 'MobileNetV2'],
    },
    {
      group: 'INDUSTRIAL IoT & HARDWARE',
      color: '#141414',
      doodleNote: 'physical sensing, microcontrollers, message broker',
      items: ['ESP32', 'MQTT', 'Paho', 'Mosquitto'],
    },
    {
      group: 'SOFTWARE & SYSTEM TOOLS',
      color: '#555555',
      doodleNote: 'interface logic, version control & backends',
      items: ['Java', 'JavaScript', 'HTML', 'CSS', 'Streamlit', 'Git', 'GitHub'],
    },
  ];

  return (
    <section id="sketch-skills" className="sketch-skills-section" aria-label="Engineering Schematic Skills">
      <div className="sketch-container">
        {/* Header */}
        <div className="sketch-section-header">
          <span className="hand-note">Fig 04. / Engineering Schematic</span>
          <span className="font-mono-tag">[ VERIFIED TECHNOLOGIES ]</span>
        </div>

        <div className="sketch-skills-intro">
          <h2 className="sketch-skills-title">System Toolchain Schematic</h2>
          <p className="sketch-skills-sub">
            Only technologies with hands-on codebase and hardware integration experience.
          </p>
        </div>

        {/* Schematic Grid of Branches */}
        <div className="schematic-branches-grid">
          {skillBranches.map((branch, index) => (
            <div key={branch.group} className="sketch-box schematic-branch-box">
              <div className="branch-header">
                <span className="branch-index font-mono-tag">[NODE 0{index + 1}]</span>
                <span className="hand-note branch-doodle-text" style={{ color: branch.color }}>
                  {branch.doodleNote}
                </span>
              </div>

              <h3 className="branch-title">{branch.group}</h3>

              <div className="branch-wire-divider">
                <svg width="100%" height="12" viewBox="0 0 240 12" fill="none">
                  <path d="M0 6 H 240" stroke="#141414" strokeWidth="1.5" strokeDasharray="6 3" />
                  <circle cx="120" cy="6" r="3" fill={branch.color} stroke="#141414" strokeWidth="1" />
                </svg>
              </div>

              <div className="branch-tags-list">
                {branch.items.map((tech) => (
                  <span key={tech} className="sketch-tech-pill">
                    <span className="pill-dot" style={{ backgroundColor: branch.color }} />
                    <span className="pill-name">{tech}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Handwritten Notation */}
        <div className="schematic-footer-note">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M4 16 C 12 12, 20 20, 28 8 M20 8 H 28 V 16" stroke="#0055d4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="hand-note">
            "All components tied together by Python pipelines and standard networking protocols."
          </span>
        </div>
      </div>
    </section>
  );
}
