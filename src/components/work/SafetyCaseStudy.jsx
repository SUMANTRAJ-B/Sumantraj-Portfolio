import React, { useState } from 'react';
import './WorkSection.css';

export default function SafetyCaseStudy() {
  const [activeScenario, setActiveScenario] = useState('nominal');

  const scenarios = {
    nominal: {
      tag: 'SCENARIO 01',
      title: 'Nominal Operations',
      sensorValues: 'Temp: 41.5°C · Vibration: 0.16g · Gas: 14ppm',
      espState: 'Data Buffer Packaged',
      mqttState: 'Topic: factory/telemetry/cell_01',
      mlEngine: 'Random Forest Risk Estimator',
      riskTier: 'NORMAL',
      riskTierClass: 'tier-normal',
      summary: 'Sensor telemetry within standard parameters. Machine operating normally.',
    },
    caution: {
      tag: 'SCENARIO 02',
      title: 'Caution Variance',
      sensorValues: 'Temp: 64.2°C · Vibration: 0.78g · Gas: 42ppm',
      espState: 'Harmonic Variance Detected',
      mqttState: 'Topic: factory/telemetry/cell_01',
      mlEngine: 'Random Forest Risk Estimator',
      riskTier: 'CAUTION',
      riskTierClass: 'tier-caution',
      summary: 'Mechanical vibration variance exceeded baseline. Preventive alert logged.',
    },
    danger: {
      tag: 'SCENARIO 03',
      title: 'Critical Threshold',
      sensorValues: 'Temp: 92.8°C · Vibration: 1.38g · Gas: 178ppm',
      espState: 'Thermal & Gas Threshold Exceeded',
      mqttState: 'Topic: factory/telemetry/cell_01',
      mlEngine: 'Random Forest Risk Estimator',
      riskTier: 'DANGER',
      riskTierClass: 'tier-danger',
      summary: 'High thermal buildup and gas release detected. Safety lockout trigger generated.',
    },
  };

  const current = scenarios[activeScenario];

  return (
    <article className="editorial-case-study" aria-label="Case Study 01: Industrial Safety AI">
      {/* Topline Bar */}
      <div className="case-study-topline">
        <span className="case-study-number">01</span>
        <a
          href="https://github.com/SUMANTRAJ-B/Industrial_safety_AI"
          target="_blank"
          rel="noopener noreferrer"
          className="case-study-domain"
          aria-label="GitHub Repository (external link)"
        >
          <span>github.com/SUMANTRAJ-B/Industrial_safety_AI</span>
          <span className="link-arrow">↗</span>
        </a>
      </div>

      {/* Main Title & Editorial Description */}
      <div className="case-study-heading">
        <h3 className="case-study-title">
          AI-Powered Industrial Safety Intelligence System
        </h3>
        <p className="case-study-summary">
          Predictive safety platform for industrial environments that combines machine and environment sensor data with machine-learning-based risk prediction.
        </p>
      </div>

      {/* Large Restrained Visual Area (Simulated Pipeline Flow) */}
      <div className="case-study-visual-area">
        <div className="visual-top-bar">
          <span className="tech-meta">[ SIMULATED DEMO ]</span>
          <div className="scenario-switcher">
            <button
              type="button"
              className={`scenario-pill ${activeScenario === 'nominal' ? 'is-active' : ''}`}
              onClick={() => setActiveScenario('nominal')}
            >
              01. Nominal
            </button>
            <button
              type="button"
              className={`scenario-pill ${activeScenario === 'caution' ? 'is-active' : ''}`}
              onClick={() => setActiveScenario('caution')}
            >
              02. Caution
            </button>
            <button
              type="button"
              className={`scenario-pill ${activeScenario === 'danger' ? 'is-active' : ''}`}
              onClick={() => setActiveScenario('danger')}
            >
              03. Danger
            </button>
          </div>
        </div>

        {/* Pipeline Architecture Flow */}
        <div className="editorial-pipeline-stages">
          <div className="stage-block">
            <div className="stage-tag tech-meta">STAGE 01</div>
            <div className="stage-name">SENSORS</div>
            <div className="stage-detail">{current.sensorValues}</div>
          </div>

          <div className="stage-arrow" aria-hidden="true">→</div>

          <div className="stage-block">
            <div className="stage-tag tech-meta">STAGE 02</div>
            <div className="stage-name">ESP32 EDGE</div>
            <div className="stage-detail">{current.espState}</div>
          </div>

          <div className="stage-arrow" aria-hidden="true">→</div>

          <div className="stage-block">
            <div className="stage-tag tech-meta">STAGE 03</div>
            <div className="stage-name">MQTT BROKER</div>
            <div className="stage-detail">{current.mqttState}</div>
          </div>

          <div className="stage-arrow" aria-hidden="true">→</div>

          <div className="stage-block">
            <div className="stage-tag tech-meta">STAGE 04</div>
            <div className="stage-name">AI / ML</div>
            <div className="stage-detail">{current.mlEngine}</div>
          </div>

          <div className="stage-arrow" aria-hidden="true">→</div>

          <div className={`stage-block stage-result ${current.riskTierClass}`}>
            <div className="stage-tag tech-meta">RISK PREDICTION</div>
            <div className="stage-name decision-text">{current.riskTier}</div>
            <div className="stage-detail">{current.summary}</div>
          </div>
        </div>

        <div className="visual-notice tech-meta">
          * DEMONSTRATION SIMULATION RUNNING LOCALLY. NO LIVE FACILITY HARDWARE IS ATTACHED.
        </div>
      </div>

      {/* Editorial Footer (Technologies & Contribution) */}
      <footer className="case-study-footer">
        <div className="footer-meta-col">
          <span className="footer-meta-label tech-meta">TECHNOLOGY</span>
          <p className="footer-meta-text">
            Python · ESP32 · MQTT · Paho · Mosquitto · Random Forest · HTML Dashboard
          </p>
        </div>

        <div className="footer-meta-col">
          <span className="footer-meta-label tech-meta">MY CONTRIBUTION</span>
          <p className="footer-meta-text">
            Main AI/ML role + hardware integration
          </p>
        </div>

        <div className="footer-meta-col footer-action-col">
          <a
            href="https://github.com/SUMANTRAJ-B/Industrial_safety_AI"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-case-study"
          >
            <span>VIEW PROJECT REPOSITORY</span>
            <span className="link-arrow">↗</span>
          </a>
        </div>
      </footer>
    </article>
  );
}
