import React, { useState } from 'react';
import './CapabilityMap.css';

export default function CapabilityMap() {
  const [activeNode, setActiveNode] = useState('aiml');

  const capabilities = {
    aiml: {
      id: 'aiml',
      code: 'CAP_01',
      title: 'AI / Machine Learning',
      role: 'Core Inference & Risk Modeling',
      description:
        'Developing machine learning models for pattern recognition, classification, and real-time risk estimation using structured tabular data and deep learning architectures.',
      techStack: ['Python', 'TensorFlow', 'Keras', 'Scikit-learn', 'Random Forest'],
      connectedTo: ['Computer Vision', 'IoT / Edge'],
    },
    cv: {
      id: 'cv',
      code: 'CAP_02',
      title: 'Computer Vision',
      role: 'Visual Perception & Recognition',
      description:
        'Applying deep convolutional networks, transfer learning, and image preprocessing to recognize objects and classify vehicle types with high confidence.',
      techStack: ['OpenCV', 'MobileNetV2', 'Transfer Learning'],
      connectedTo: ['AI / ML', 'Software'],
    },
    iot: {
      id: 'iot',
      code: 'CAP_03',
      title: 'IoT / Edge',
      role: 'Physical Sensing & Transport',
      description:
        'Interfacing physical sensors with microcontrollers and transmitting real-time operational telemetry over lightweight MQTT message brokers.',
      techStack: ['ESP32', 'MQTT', 'Sensors / Embedded Hardware'],
      connectedTo: ['AI / ML', 'Software'],
    },
    software: {
      id: 'software',
      code: 'CAP_04',
      title: 'Software Engineering',
      role: 'Systems, Interfaces & Tooling',
      description:
        'Building reliable application logic, user dashboards, and development workflows to make intelligence pipelines accessible and maintainable.',
      techStack: ['Java', 'JavaScript', 'HTML', 'CSS', 'Git', 'GitHub', 'Streamlit'],
      connectedTo: ['Computer Vision', 'IoT / Edge'],
    },
  };

  const current = capabilities[activeNode];

  return (
    <section id="capability" className="capability-section" aria-label="Engineering Capability Network">
      <div className="capability-container">
        {/* Section Header */}
        <div className="section-head">
          <div className="section-eyebrow">
            <span className="eyebrow-num">02</span>
            <span className="eyebrow-divider">//</span>
            <span className="eyebrow-label">CAPABILITY TOPOLOGY</span>
          </div>
          <h2 className="section-title">How I Build: Engineering Network</h2>
          <p className="section-sub">
            Connected disciplines forming intelligent systems. Select a discipline node to inspect its verified technologies.
          </p>
        </div>

        {/* 4-Node Interactive Network */}
        <div className="network-layout">
          {/* Node Selector Grid */}
          <div className="nodes-grid" role="tablist" aria-label="Capability disciplines">
            {Object.values(capabilities).map((cap) => {
              const isActive = activeNode === cap.id;
              return (
                <button
                  key={cap.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`capability-node-btn ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveNode(cap.id)}
                >
                  <div className="node-head">
                    <span className="mono-label">{cap.code}</span>
                    <span className="node-signal-dot" aria-hidden="true"></span>
                  </div>
                  <h3 className="node-title">{cap.title}</h3>
                  <p className="node-role">{cap.role}</p>
                </button>
              );
            })}
          </div>

          {/* Active Node Inspector (Revealing Verified Technologies) */}
          <div className="node-inspector" role="tabpanel">
            <div className="inspector-head">
              <div>
                <span className="mono-label">INSPECTION NODE // {current.code}</span>
                <h3 className="inspector-title">{current.title}</h3>
              </div>
              <div className="connection-tags">
                <span className="mono-label">BRIDGED WITH:</span>
                <span className="mono-tag">{current.connectedTo.join(' + ')}</span>
              </div>
            </div>

            <p className="inspector-desc">{current.description}</p>

            <div className="tech-reveal-container">
              <span className="tech-reveal-label mono-label">VERIFIED TECHNOLOGIES:</span>
              <div className="tech-tags-list">
                {current.techStack.map((tech) => (
                  <div key={tech} className="verified-tech-chip">
                    <span className="tech-bullet">✓</span>
                    <span className="tech-name">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
