import React, { useState } from 'react';
import './IndustrialSafetyPipeline.css';

export default function IndustrialSafetyPipeline() {
  const [scenario, setScenario] = useState('nominal'); // nominal | caution | danger

  const scenarios = {
    nominal: {
      label: 'SIMULATED: NOMINAL OPERATIONS',
      sensors: { temp: '42.1 °C', vib: '0.18 g', gas: '12 ppm' },
      esp32: 'PAYLOAD PACKED (JSON)',
      mqtt: 'PUB: factory/cell_04/telemetry',
      modelInput: '3-axis vector normalized',
      riskScore: '0.12',
      status: 'NORMAL',
      statusClass: 'status-normal',
      summary: 'All telemetry metrics within standard operating bounds. Machine health optimal.',
    },
    caution: {
      label: 'SIMULATED: ELEVATED VIBRATION',
      sensors: { temp: '68.4 °C', vib: '0.84 g', gas: '45 ppm' },
      esp32: 'PAYLOAD PACKED (JSON)',
      mqtt: 'PUB: factory/cell_04/telemetry',
      modelInput: 'Vibration anomaly detected',
      riskScore: '0.64',
      status: 'CAUTION',
      statusClass: 'status-caution',
      summary: 'Mechanical vibration variance exceeded baseline. Preventive inspection flagged.',
    },
    danger: {
      label: 'SIMULATED: CRITICAL HEAT & GAS',
      sensors: { temp: '94.2 °C', vib: '1.42 g', gas: '185 ppm' },
      esp32: 'PAYLOAD PACKED (JSON)',
      mqtt: 'PUB: factory/cell_04/telemetry',
      modelInput: 'Critical threshold breach',
      riskScore: '0.94',
      status: 'DANGER',
      statusClass: 'status-danger',
      summary: 'High thermal buildup and gas release detected. Safety lockout trigger generated.',
    },
  };

  const current = scenarios[scenario];

  return (
    <div className="project-experience-block">
      {/* Project Overview Header */}
      <div className="project-header">
        <div className="project-meta-row">
          <span className="mono-label">PROJECT 01 // INDUSTRIAL INTELLIGENCE</span>
          <span className="sim-badge mono-label">[SIMULATED TELEMETRY DEMO]</span>
        </div>

        <h3 className="project-title">AI-Powered Industrial Safety Intelligence System</h3>

        <p className="project-description">
          Predictive safety platform for industrial environments using machine and environmental sensor data with a Random Forest risk model.
        </p>

        {/* Authentic Project Context & Contribution */}
        <div className="project-provenance">
          <div className="provenance-item">
            <span className="mono-label">MY CONTRIBUTION:</span>
            <p className="provenance-text">
              Worked on the main AI/ML components and contributed to hardware integration, including sensor data processing, machine-learning-based risk prediction, and the intelligent safety pipeline.
            </p>
          </div>
          <div className="provenance-item">
            <span className="mono-label">CONTEXT:</span>
            <p className="provenance-text">Industrial IoT &amp; AI internship/team project.</p>
          </div>
        </div>

        {/* Technologies Chip Row */}
        <div className="project-tech-row">
          {['Python', 'ESP32', 'MQTT', 'Paho', 'Mosquitto', 'Random Forest', 'HTML Dashboard'].map((tech) => (
            <span key={tech} className="mono-tag">{tech}</span>
          ))}
          <a
            href="https://github.com/SUMANTRAJ-B/Industrial_safety_AI"
            target="_blank"
            rel="noopener noreferrer"
            className="project-repo-link mono-label"
          >
            VIEW REPO ↗
          </a>
        </div>
      </div>

      {/* Interactive Pipeline Architecture Diagram */}
      <div className="pipeline-experience">
        <div className="pipeline-controls">
          <span className="mono-label">TEST SIMULATED ENVIRONMENT SCENARIOS:</span>
          <div className="scenario-btn-group">
            <button
              type="button"
              className={`scenario-btn ${scenario === 'nominal' ? 'is-active' : ''}`}
              onClick={() => setScenario('nominal')}
            >
              01. Nominal State
            </button>
            <button
              type="button"
              className={`scenario-btn ${scenario === 'caution' ? 'is-active' : ''}`}
              onClick={() => setScenario('caution')}
            >
              02. Caution Variance
            </button>
            <button
              type="button"
              className={`scenario-btn ${scenario === 'danger' ? 'is-active' : ''}`}
              onClick={() => setScenario('danger')}
            >
              03. Critical Alert
            </button>
          </div>
        </div>

        {/* Pipeline Stage Trace */}
        <div className="pipeline-flow-diagram" aria-label="Sensor to risk decision pipeline flow">
          {/* Stage 1: Sensors */}
          <div className="pipeline-stage">
            <div className="stage-head">
              <span className="mono-label">STAGE 01</span>
              <span className="stage-name">SENSORS</span>
            </div>
            <div className="stage-payload">
              <div className="telemetry-line">
                <span className="param">TEMP:</span> <span className="val">{current.sensors.temp}</span>
              </div>
              <div className="telemetry-line">
                <span className="param">VIB:</span> <span className="val">{current.sensors.vib}</span>
              </div>
              <div className="telemetry-line">
                <span className="param">GAS:</span> <span className="val">{current.sensors.gas}</span>
              </div>
            </div>
          </div>

          <div className="pipeline-connector" aria-hidden="true">
            <span className="signal-arrow">→</span>
          </div>

          {/* Stage 2: ESP32 */}
          <div className="pipeline-stage">
            <div className="stage-head">
              <span className="mono-label">STAGE 02</span>
              <span className="stage-name">ESP32 EDGE</span>
            </div>
            <div className="stage-payload">
              <span className="detail-tag">ADC SAMPLING</span>
              <span className="payload-text">{current.esp32}</span>
            </div>
          </div>

          <div className="pipeline-connector" aria-hidden="true">
            <span className="signal-arrow">→</span>
          </div>

          {/* Stage 3: MQTT */}
          <div className="pipeline-stage">
            <div className="stage-head">
              <span className="mono-label">STAGE 03</span>
              <span className="stage-name">MQTT BROKER</span>
            </div>
            <div className="stage-payload">
              <span className="detail-tag">MOSQUITTO :1883</span>
              <span className="payload-text code-sub">{current.mqtt}</span>
            </div>
          </div>

          <div className="pipeline-connector" aria-hidden="true">
            <span className="signal-arrow">→</span>
          </div>

          {/* Stage 4: AI/ML Risk Engine */}
          <div className="pipeline-stage">
            <div className="stage-head">
              <span className="mono-label">STAGE 04</span>
              <span className="stage-name">RANDOM FOREST</span>
            </div>
            <div className="stage-payload">
              <span className="detail-tag">RISK PREDICTOR</span>
              <span className="payload-text">{current.modelInput}</span>
            </div>
          </div>

          <div className="pipeline-connector" aria-hidden="true">
            <span className="signal-arrow">→</span>
          </div>

          {/* Stage 5: Decision State */}
          <div className={`pipeline-stage stage-decision ${current.statusClass}`}>
            <div className="stage-head">
              <span className="mono-label">DECISION TIER</span>
              <span className="risk-score">INDEX: {current.riskScore}</span>
            </div>
            <div className="stage-payload">
              <div className="decision-banner">{current.status}</div>
              <p className="decision-summary">{current.summary}</p>
            </div>
          </div>
        </div>

        {/* Notice of Simulation */}
        <div className="pipeline-disclaimer">
          <span className="mono-label">
            NOTICE: Telemetry values and pipeline stages are simulated in-browser for architecture demonstration. The portfolio is not connected to live facility hardware.
          </span>
        </div>
      </div>
    </div>
  );
}
