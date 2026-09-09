import React from 'react';
import './DisciplinesSection.css';

export default function DisciplinesSection() {
  const pillars = [
    {
      num: '01',
      title: 'Machine Learning & Predictive Risk',
      description:
        'Architecting supervised modeling pipelines with Scikit-learn and Random Forest to detect mechanical variances and compute real-time safety thresholds.',
      tools: ['Python', 'Scikit-learn', 'Random Forest'],
    },
    {
      num: '02',
      title: 'Computer Vision & Deep Learning',
      description:
        'Implementing transfer learning architectures with MobileNetV2 and OpenCV to classify vehicle types and analyze multi-class imagery.',
      tools: ['TensorFlow', 'Keras', 'MobileNetV2', 'OpenCV'],
    },
    {
      num: '03',
      title: 'Industrial IoT & Embedded Hardware',
      description:
        'Interfacing physical sensors with ESP32 microcontrollers and packaging telemetry streams over lightweight MQTT broker infrastructure.',
      tools: ['ESP32', 'MQTT', 'Paho', 'Mosquitto'],
    },
    {
      num: '04',
      title: 'Software Engineering & Interfaces',
      description:
        'Writing clean, maintainable software and interactive test interfaces to inspect model predictions and data flows.',
      tools: ['Java', 'JavaScript', 'HTML', 'CSS', 'Streamlit', 'Git', 'GitHub'],
    },
  ];

  return (
    <section id="disciplines" className="disciplines-section" aria-label="What I Build">
      <div className="editorial-container">
        {/* Section Header */}
        <header className="editorial-section-header">
          <div className="editorial-index-row">
            <span className="tech-meta"><span className="tech-marker">02</span>WHAT I BUILD</span>
            <span className="tech-meta desktop-only">CAPABILITIES &amp; TOOLCHAIN</span>
          </div>
          <h2 className="editorial-section-title">Core Disciplines</h2>
          <p className="editorial-section-sub">
            The intersection of hardware transport, numerical modeling, and software engineering.
          </p>
        </header>

        {/* Editorial Pillars List */}
        <div className="disciplines-list">
          {pillars.map((p) => (
            <div key={p.num} className="discipline-row">
              <div className="discipline-num tech-meta">[{p.num}]</div>
              <div className="discipline-main">
                <h3 className="discipline-title">{p.title}</h3>
                <p className="discipline-desc">{p.description}</p>
              </div>
              <div className="discipline-tools">
                <span className="tools-label tech-meta">VERIFIED TOOLS:</span>
                <div className="tools-tags">
                  {p.tools.map((tool) => (
                    <span key={tool} className="tool-tag">{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
