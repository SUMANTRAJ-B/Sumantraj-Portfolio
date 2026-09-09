import React from 'react';
import './EngineeringJourney.css';

export default function EngineeringJourney() {
  const milestones = [
    {
      index: '01',
      domain: 'IoT & Embedded Hardware',
      status: 'FOUNDATION',
      isExploration: false,
      summary: 'Sensor interfacing, ESP32 microcontrollers, ADC sampling, and hardware-to-digital signal mapping.',
    },
    {
      index: '02',
      domain: 'Industrial AI Systems',
      status: 'PROJECT VALIDATED',
      isExploration: false,
      summary: 'Built multi-stage predictive safety intelligence with MQTT message brokers and Random Forest risk models.',
    },
    {
      index: '03',
      domain: 'Machine Learning Algorithms',
      status: 'CORE COMPETENCY',
      isExploration: false,
      summary: 'Data preprocessing, feature normalization, Scikit-learn pipelines, and classification evaluation.',
    },
    {
      index: '04',
      domain: 'Computer Vision Pipelines',
      status: 'PROJECT VALIDATED',
      isExploration: false,
      summary: 'Trained and tested MobileNetV2 transfer learning pipelines and OpenCV preprocessing across vehicle categories.',
    },
    {
      index: '05',
      domain: 'Edge AI / TinyML',
      status: 'CURRENT EXPLORATION',
      isExploration: true,
      summary: 'Quantizing neural network weights and porting lightweight inference directly onto constrained microcontrollers.',
    },
    {
      index: '06',
      domain: 'Computer Vision for Safety',
      status: 'CURRENT EXPLORATION',
      isExploration: true,
      summary: 'Researching real-time hazard identification, workplace boundary monitoring, and visual anomaly triggers.',
    },
    {
      index: '07',
      domain: 'Real LLM-Backed Agentic Systems',
      status: 'CURRENT EXPLORATION',
      isExploration: true,
      summary: 'Designing autonomous reasoning workflows where language models interface with deterministic tools and external APIs.',
    },
    {
      index: '08',
      domain: 'Holistic AI Engineering',
      status: 'TARGET HORIZON',
      isExploration: true,
      summary: 'Unifying embedded telemetry, computer vision, and software engineering into production-grade intelligent systems.',
    },
  ];

  return (
    <section id="journey" className="journey-section" aria-label="Engineering Journey and Frontiers">
      <div className="journey-container">
        {/* Section Header */}
        <div className="section-head">
          <div className="section-eyebrow">
            <span className="eyebrow-num">04</span>
            <span className="eyebrow-divider">//</span>
            <span className="eyebrow-label">ENGINEERING TRAJECTORY</span>
          </div>
          <h2 className="section-title">What I'm Exploring: The Journey</h2>
          <p className="section-sub">
            From raw hardware telemetry to modern agentic systems. Clearly distinguishing verified milestones from active research frontiers.
          </p>
        </div>

        {/* Vertical Timeline / Journey Path */}
        <div className="journey-timeline">
          <div className="timeline-axis" aria-hidden="true"></div>

          {milestones.map((m) => (
            <div
              key={m.index}
              className={`timeline-node ${m.isExploration ? 'is-exploration' : 'is-proven'}`}
            >
              <div className="node-marker" aria-hidden="true">
                <span className="node-marker-dot"></span>
              </div>

              <div className="node-content">
                <div className="node-header">
                  <span className="node-index mono-label">{m.index}</span>
                  <span className={`node-badge mono-label ${m.isExploration ? 'badge-exploration' : 'badge-proven'}`}>
                    {m.status}
                  </span>
                </div>

                <h3 className="node-title">{m.domain}</h3>
                <p className="node-summary">{m.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
