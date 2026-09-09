import React, { useState } from 'react';
import './IdentityMatrix.css';

export default function IdentityMatrix() {
  const [activeTab, setActiveTab] = useState('focus');

  const matrixData = {
    focus: {
      tag: 'STATUS :: ACTIVE EXPLORATION',
      title: 'Bridging Neural Models with Real-World Physical Systems',
      description:
        'My work focuses on the intersection of machine learning, computer vision, and industrial telemetry. I prioritize building complete end-to-end intelligent pipelines — from raw sensor feeds and embedded microcontrollers to trained predictive risk models.',
      highlights: [
        { label: 'Embedded & Edge AI', desc: 'Running machine learning close to data sources with low latency.' },
        { label: 'Computer Vision', desc: 'Automated vehicle recognition and visual safety classification.' },
        { label: 'Systems Engineering', desc: 'Clean, reliable software pipelines integrating MQTT and Python engines.' },
      ],
    },
    roles: {
      tag: 'OBJECTIVE :: CAREER TRAJECTORY',
      title: 'Target Engineering Roles',
      description:
        'Actively preparing for engineering roles where I can contribute to intelligent systems and scalable software infrastructure.',
      highlights: [
        {
          label: 'AI / ML Engineer',
          desc: 'Designing, training, and validating machine learning models, computer vision systems, and predictive risk engines.',
        },
        {
          label: 'Software Engineer',
          desc: 'Building robust data pipelines, hardware-software interfaces, backend communication protocols, and full-stack utilities.',
        },
      ],
    },
    interests: {
      tag: 'EXPLORATION :: CURRENT RESEARCH',
      title: 'Technical Curiosity & Frontiers',
      description:
        'Continuously experimenting with modern paradigms to make intelligent software more autonomous, efficient, and embedded.',
      highlights: [
        { label: 'Edge AI / TinyML', desc: 'Deploying quantized neural networks onto constrained hardware like ESP32.' },
        { label: 'Vision for Safety', desc: 'Automated hazard detection, anomaly recognition, and safety workflows.' },
        { label: 'Agentic AI Systems', desc: 'Exploring real LLM-backed autonomous agents that interface with external tools.' },
      ],
    },
  };

  const current = matrixData[activeTab];

  return (
    <section id="identity" className="identity-section" aria-label="Identity Matrix">
      <div className="identity-container">
        {/* Section Header */}
        <div className="section-head">
          <div className="section-eyebrow">
            <span className="eyebrow-num">01</span>
            <span className="eyebrow-divider">//</span>
            <span className="eyebrow-label">IDENTITY MATRIX</span>
          </div>
          <h2 className="section-title">Who I Am &amp; What I Build</h2>
          <p className="section-sub">
            Exploring intelligent software where algorithms interact with sensors, frames, and embedded logic.
          </p>
        </div>

        {/* Interactive Matrix Selector */}
        <div className="matrix-wrapper">
          <div className="matrix-tabs" role="tablist" aria-label="Identity inspection tabs">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'focus'}
              className={`matrix-tab-btn ${activeTab === 'focus' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('focus')}
            >
              <span className="tab-indicator" aria-hidden="true"></span>
              <span className="tab-title">CURRENT FOCUS</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'roles'}
              className={`matrix-tab-btn ${activeTab === 'roles' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('roles')}
            >
              <span className="tab-indicator" aria-hidden="true"></span>
              <span className="tab-title">TARGET ROLES</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'interests'}
              className={`matrix-tab-btn ${activeTab === 'interests' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('interests')}
            >
              <span className="tab-indicator" aria-hidden="true"></span>
              <span className="tab-title">INTERESTS &amp; FRONTIERS</span>
            </button>
          </div>

          {/* Active Inspection Panel */}
          <div className="matrix-content-panel" role="tabpanel">
            <div className="panel-header">
              <span className="mono-tag">{current.tag}</span>
              <span className="panel-coord mono-label">NODE: 01_{activeTab.toUpperCase()}</span>
            </div>

            <h3 className="panel-heading">{current.title}</h3>
            <p className="panel-body">{current.description}</p>

            <div className="panel-highlights">
              {current.highlights.map((item) => (
                <div key={item.label} className="highlight-item">
                  <div className="highlight-label-row">
                    <span className="highlight-bullet">▸</span>
                    <h4 className="highlight-label">{item.label}</h4>
                  </div>
                  <p className="highlight-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
