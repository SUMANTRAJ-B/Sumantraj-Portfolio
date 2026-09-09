import React, { useState } from 'react';
import { personalData } from '../../data/portfolioData';
import './SketchProjects.css';

export default function SketchProjects() {
  // Interactive scenario state for Project 01
  const [safetyScenario, setSafetyScenario] = useState('nominal');

  // Interactive category state for Project 02
  const [vehicleCategory, setVehicleCategory] = useState('ambulance');

  const safetyData = {
    nominal: {
      sensors: 'Temp: 41.2°C · Vib: 0.15g · Gas: 12ppm',
      esp: 'Analog ADC sampled ➔ JSON buffer',
      mqtt: 'PUB: factory/cell_01/stream',
      rfScore: 'Risk Index: 0.12',
      decision: 'NORMAL',
      decisionClass: 'hand-decision-normal',
      note: 'All sensor channels within normal operating envelope.',
    },
    caution: {
      sensors: 'Temp: 66.8°C · Vib: 0.82g · Gas: 44ppm',
      esp: 'Vibration anomaly flagged ➔ JSON buffer',
      mqtt: 'PUB: factory/cell_01/stream',
      rfScore: 'Risk Index: 0.62',
      decision: 'CAUTION',
      decisionClass: 'hand-decision-caution',
      note: 'Harmonic vibration variance detected. Maintenance alert.',
    },
    danger: {
      sensors: 'Temp: 94.5°C · Vib: 1.45g · Gas: 182ppm',
      esp: 'Thermal & gas limits breached ➔ Priority payload',
      mqtt: 'PUB: factory/cell_01/stream',
      rfScore: 'Risk Index: 0.95',
      decision: 'DANGER',
      decisionClass: 'hand-decision-danger',
      note: 'Critical heat and gas concentration. Safety trip triggered.',
    },
  };

  const vehicleData = {
    car: {
      name: 'CAR',
      frame: '224×224 RGB image matrix',
      cvPrep: 'Resized, normalized to [-1, 1]',
      mobilenet: 'Bottleneck feature vector (1280-D)',
      confidence: '95.8%',
      bars: [
        { label: 'Car', val: 95.8, isTop: true },
        { label: 'Truck', val: 2.1 },
        { label: 'Bus', val: 1.1 },
        { label: 'Ambulance', val: 0.6 },
        { label: 'Bike', val: 0.4 },
      ],
    },
    bike: {
      name: 'BIKE',
      frame: '224×224 RGB image matrix',
      cvPrep: 'Resized, normalized to [-1, 1]',
      mobilenet: 'Bottleneck feature vector (1280-D)',
      confidence: '98.2%',
      bars: [
        { label: 'Bike', val: 98.2, isTop: true },
        { label: 'Car', val: 1.0 },
        { label: 'Ambulance', val: 0.4 },
        { label: 'Truck', val: 0.2 },
        { label: 'Bus', val: 0.2 },
      ],
    },
    bus: {
      name: 'BUS',
      frame: '224×224 RGB image matrix',
      cvPrep: 'Resized, normalized to [-1, 1]',
      mobilenet: 'Bottleneck feature vector (1280-D)',
      confidence: '93.7%',
      bars: [
        { label: 'Bus', val: 93.7, isTop: true },
        { label: 'Truck', val: 3.8 },
        { label: 'Ambulance', val: 1.4 },
        { label: 'Car', val: 0.8 },
        { label: 'Bike', val: 0.3 },
      ],
    },
    truck: {
      name: 'TRUCK',
      frame: '224×224 RGB image matrix',
      cvPrep: 'Resized, normalized to [-1, 1]',
      mobilenet: 'Bottleneck feature vector (1280-D)',
      confidence: '94.1%',
      bars: [
        { label: 'Truck', val: 94.1, isTop: true },
        { label: 'Bus', val: 3.5 },
        { label: 'Car', val: 1.2 },
        { label: 'Ambulance', val: 0.9 },
        { label: 'Bike', val: 0.3 },
      ],
    },
    ambulance: {
      name: 'AMBULANCE',
      frame: '224×224 RGB image matrix',
      cvPrep: 'Resized, normalized to [-1, 1]',
      mobilenet: 'Bottleneck feature vector (1280-D)',
      confidence: '96.4%',
      bars: [
        { label: 'Ambulance', val: 96.4, isTop: true },
        { label: 'Truck', val: 1.9 },
        { label: 'Bus', val: 1.1 },
        { label: 'Car', val: 0.4 },
        { label: 'Bike', val: 0.2 },
      ],
    },
  };

  const p1 = personalData.projects[0];
  const p2 = personalData.projects[1];
  const activeSafety = safetyData[safetyScenario];
  const activeVehicle = vehicleData[vehicleCategory];

  return (
    <section id="sketch-work" className="sketch-projects-section" aria-label="Hand-Drawn Project Case Studies">
      <div className="sketch-container">
        {/* Section Header */}
        <div className="sketch-section-header">
          <span className="hand-note">Fig 05. / Illustrated Case Studies</span>
          <span className="font-mono-tag">[ SELECTED WORK ]</span>
        </div>

        <div className="sketch-work-title-wrap">
          <h2 className="sketch-work-title">Engineering Case Studies</h2>
          <p className="sketch-work-sub">
            Hand-drawn architecture breakdowns of the two core systems I contributed to.
          </p>
        </div>

        {/* ==============================================================
            PROJECT 01: Industrial Safety AI
            ============================================================== */}
        <article className="sketch-box sketch-project-study">
          {/* Topline */}
          <div className="study-topline">
            <span className="study-giant-num">01</span>
            <div className="study-top-meta">
              <span className="hand-note hand-note-red">Industrial IoT &amp; AI</span>
              <a
                href={p1.github}
                target="_blank"
                rel="noopener noreferrer"
                className="sketch-study-link"
              >
                <span>github.com/SUMANTRAJ-B/Industrial_safety_AI</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          <h3 className="study-title">{p1.title}</h3>
          <p className="study-desc">{p1.description}</p>

          {/* Hand-Drawn Flowchart Diagram */}
          <div className="hand-diagram-canvas">
            <div className="diagram-header-bar">
              <span className="hand-note" style={{ color: '#0055d4' }}>
                ✎ System Flowchart [SIMULATED DEMO]
              </span>
              <div className="scenario-pills-row">
                <button
                  type="button"
                  className={`sketch-pill-btn ${safetyScenario === 'nominal' ? 'is-selected' : ''}`}
                  onClick={() => setSafetyScenario('nominal')}
                >
                  01: Nominal
                </button>
                <button
                  type="button"
                  className={`sketch-pill-btn ${safetyScenario === 'caution' ? 'is-selected' : ''}`}
                  onClick={() => setSafetyScenario('caution')}
                >
                  02: Caution
                </button>
                <button
                  type="button"
                  className={`sketch-pill-btn ${safetyScenario === 'danger' ? 'is-selected' : ''}`}
                  onClick={() => setSafetyScenario('danger')}
                >
                  03: Danger
                </button>
              </div>
            </div>

            {/* Step-by-Step Flowchart Nodes */}
            <div className="hand-flowchart-steps">
              <div className="hand-node-box">
                <span className="node-step font-mono-tag">STEP 01</span>
                <span className="node-title">SENSORS</span>
                <span className="node-reading">{activeSafety.sensors}</span>
              </div>

              <div className="hand-arrow">
                <svg width="28" height="24" viewBox="0 0 28 24" fill="none">
                  <path d="M2 12 H 24 M16 4 L 24 12 L 16 20" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="hand-node-box">
                <span className="node-step font-mono-tag">STEP 02</span>
                <span className="node-title">ESP32 EDGE</span>
                <span className="node-reading">{activeSafety.esp}</span>
              </div>

              <div className="hand-arrow">
                <svg width="28" height="24" viewBox="0 0 28 24" fill="none">
                  <path d="M2 12 H 24 M16 4 L 24 12 L 16 20" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="hand-node-box">
                <span className="node-step font-mono-tag">STEP 03</span>
                <span className="node-title">MQTT BROKER</span>
                <span className="node-reading">{activeSafety.mqtt}</span>
              </div>

              <div className="hand-arrow">
                <svg width="28" height="24" viewBox="0 0 28 24" fill="none">
                  <path d="M2 12 H 24 M16 4 L 24 12 L 16 20" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="hand-node-box">
                <span className="node-step font-mono-tag">STEP 04</span>
                <span className="node-title">RANDOM FOREST</span>
                <span className="node-reading">{activeSafety.rfScore}</span>
              </div>

              <div className="hand-arrow">
                <svg width="28" height="24" viewBox="0 0 28 24" fill="none">
                  <path d="M2 12 H 24 M16 4 L 24 12 L 16 20" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className={`hand-node-box node-decision ${activeSafety.decisionClass}`}>
                <span className="node-step font-mono-tag">DECISION</span>
                <span className="decision-stamp">{activeSafety.decision}</span>
                <span className="node-reading">{activeSafety.note}</span>
              </div>
            </div>

            <div className="hand-disclaimer font-mono-tag">
              * SIMULATED DEMO ONLY. DEMONSTRATES ARCHITECTURE &amp; PIPELINE FLOW.
            </div>
          </div>

          {/* Project Details Footer */}
          <div className="study-footer-grid">
            <div className="study-col">
              <span className="font-mono-tag">TECHNOLOGIES</span>
              <p className="study-meta-value">{p1.technologies.join(' · ')}</p>
            </div>
            <div className="study-col">
              <span className="font-mono-tag">MY CONTRIBUTION</span>
              <p className="study-meta-value">{p1.contribution}</p>
            </div>
            <div className="study-col study-action-col">
              <a
                href={p1.github}
                target="_blank"
                rel="noopener noreferrer"
                className="sketch-btn sketch-btn-primary"
              >
                <span>VIEW REPOSITORY</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </article>

        {/* ==============================================================
            PROJECT 02: Vehicle Type Classification
            ============================================================== */}
        <article className="sketch-box sketch-project-study" style={{ marginTop: '4rem' }}>
          {/* Topline */}
          <div className="study-topline">
            <span className="study-giant-num">02</span>
            <div className="study-top-meta">
              <span className="hand-note hand-note-red">Computer Vision &amp; CNN</span>
              <a
                href={p2.github}
                target="_blank"
                rel="noopener noreferrer"
                className="sketch-study-link"
              >
                <span>github.com/SUMANTRAJ-B/Project-unknown</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          <h3 className="study-title">{p2.title}</h3>
          <p className="study-desc">{p2.description}</p>

          {/* Hand-Drawn Flowchart Diagram */}
          <div className="hand-diagram-canvas">
            <div className="diagram-header-bar">
              <span className="hand-note" style={{ color: '#0055d4' }}>
                ✎ Vision Pipeline [SIMULATED DEMO]
              </span>
              <div className="scenario-pills-row">
                {['car', 'bike', 'bus', 'truck', 'ambulance'].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`sketch-pill-btn ${vehicleCategory === cat ? 'is-selected' : ''}`}
                    onClick={() => setVehicleCategory(cat)}
                  >
                    {cat.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Step-by-Step Flowchart Nodes */}
            <div className="hand-flowchart-steps">
              <div className="hand-node-box">
                <span className="node-step font-mono-tag">STEP 01</span>
                <span className="node-title">INPUT IMAGE</span>
                <span className="node-reading">{activeVehicle.name} · {activeVehicle.frame}</span>
              </div>

              <div className="hand-arrow">
                <svg width="28" height="24" viewBox="0 0 28 24" fill="none">
                  <path d="M2 12 H 24 M16 4 L 24 12 L 16 20" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="hand-node-box">
                <span className="node-step font-mono-tag">STEP 02</span>
                <span className="node-title">OPENCV</span>
                <span className="node-reading">{activeVehicle.cvPrep}</span>
              </div>

              <div className="hand-arrow">
                <svg width="28" height="24" viewBox="0 0 28 24" fill="none">
                  <path d="M2 12 H 24 M16 4 L 24 12 L 16 20" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="hand-node-box">
                <span className="node-step font-mono-tag">STEP 03</span>
                <span className="node-title">MOBILENETV2</span>
                <span className="node-reading">{activeVehicle.mobilenet}</span>
              </div>

              <div className="hand-arrow">
                <svg width="28" height="24" viewBox="0 0 28 24" fill="none">
                  <path d="M2 12 H 24 M16 4 L 24 12 L 16 20" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="hand-node-box">
                <span className="node-step font-mono-tag">STEP 04</span>
                <span className="node-title">CLASSIFICATION</span>
                <span className="node-reading">Dense Softmax (5 classes)</span>
              </div>

              <div className="hand-arrow">
                <svg width="28" height="24" viewBox="0 0 28 24" fill="none">
                  <path d="M2 12 H 24 M16 4 L 24 12 L 16 20" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="hand-node-box node-decision hand-decision-normal">
                <span className="node-step font-mono-tag">CONFIDENCE</span>
                <span className="decision-stamp">{activeVehicle.confidence}</span>
                <div className="sketch-bars-list">
                  {activeVehicle.bars.map((bar) => (
                    <div key={bar.label} className="sketch-bar-item">
                      <span className="bar-lbl">{bar.label}</span>
                      <div className="bar-track-sketch">
                        <div className="bar-fill-sketch" style={{ width: `${bar.val}%` }} />
                      </div>
                      <span className="bar-val font-mono-tag">{bar.val}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="hand-disclaimer font-mono-tag">
              * SIMULATED DEMO ONLY. DEMONSTRATES CONVOLUTIONAL MODEL ARCHITECTURE.
            </div>
          </div>

          {/* Project Details Footer */}
          <div className="study-footer-grid">
            <div className="study-col">
              <span className="font-mono-tag">TECHNOLOGIES</span>
              <p className="study-meta-value">{p2.technologies.join(' · ')}</p>
            </div>
            <div className="study-col">
              <span className="font-mono-tag">MY CONTRIBUTION</span>
              <p className="study-meta-value">{p2.contribution}</p>
            </div>
            <div className="study-col study-action-col">
              <a
                href={p2.github}
                target="_blank"
                rel="noopener noreferrer"
                className="sketch-btn sketch-btn-primary"
              >
                <span>VIEW REPOSITORY</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
