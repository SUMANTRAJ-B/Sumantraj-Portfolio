import React, { useState } from 'react';
import './VehicleClassificationPipeline.css';

export default function VehicleClassificationPipeline() {
  const [selectedVehicle, setSelectedVehicle] = useState('ambulance');

  const vehicleData = {
    car: {
      category: 'CAR',
      frameSpec: '224×224 RGB // SEDAN_TEST_01.JPG',
      preprocessing: 'Normalized [-1.0, 1.0], Bilinear Interpolation',
      featureExtractor: 'MobileNetV2 Bottleneck (1280-D)',
      scores: [
        { label: 'Car', score: 95.8, isTop: true },
        { label: 'Truck', score: 2.1, isTop: false },
        { label: 'Bus', score: 1.1, isTop: false },
        { label: 'Ambulance', score: 0.6, isTop: false },
        { label: 'Bike', score: 0.4, isTop: false },
      ],
      decision: 'CAR [CLASS_01]',
      confidence: '95.8%',
    },
    bike: {
      category: 'BIKE',
      frameSpec: '224×224 RGB // TWO_WHEELER_09.JPG',
      preprocessing: 'Normalized [-1.0, 1.0], Bilinear Interpolation',
      featureExtractor: 'MobileNetV2 Bottleneck (1280-D)',
      scores: [
        { label: 'Bike', score: 98.2, isTop: true },
        { label: 'Car', score: 1.0, isTop: false },
        { label: 'Ambulance', score: 0.4, isTop: false },
        { label: 'Truck', score: 0.2, isTop: false },
        { label: 'Bus', score: 0.2, isTop: false },
      ],
      decision: 'BIKE [CLASS_02]',
      confidence: '98.2%',
    },
    bus: {
      category: 'BUS',
      frameSpec: '224×224 RGB // COMMUTER_BUS_04.JPG',
      preprocessing: 'Normalized [-1.0, 1.0], Bilinear Interpolation',
      featureExtractor: 'MobileNetV2 Bottleneck (1280-D)',
      scores: [
        { label: 'Bus', score: 93.7, isTop: true },
        { label: 'Truck', score: 3.8, isTop: false },
        { label: 'Ambulance', score: 1.4, isTop: false },
        { label: 'Car', score: 0.8, isTop: false },
        { label: 'Bike', score: 0.3, isTop: false },
      ],
      decision: 'BUS [CLASS_03]',
      confidence: '93.7%',
    },
    truck: {
      category: 'TRUCK',
      frameSpec: '224×224 RGB // FREIGHT_TRUCK_12.JPG',
      preprocessing: 'Normalized [-1.0, 1.0], Bilinear Interpolation',
      featureExtractor: 'MobileNetV2 Bottleneck (1280-D)',
      scores: [
        { label: 'Truck', score: 94.1, isTop: true },
        { label: 'Bus', score: 3.5, isTop: false },
        { label: 'Car', score: 1.2, isTop: false },
        { label: 'Ambulance', score: 0.9, isTop: false },
        { label: 'Bike', score: 0.3, isTop: false },
      ],
      decision: 'TRUCK [CLASS_04]',
      confidence: '94.1%',
    },
    ambulance: {
      category: 'AMBULANCE',
      frameSpec: '224×224 RGB // EMERGENCY_AMB_07.JPG',
      preprocessing: 'Normalized [-1.0, 1.0], Bilinear Interpolation',
      featureExtractor: 'MobileNetV2 Bottleneck (1280-D)',
      scores: [
        { label: 'Ambulance', score: 96.4, isTop: true },
        { label: 'Truck', score: 1.9, isTop: false },
        { label: 'Bus', score: 1.1, isTop: false },
        { label: 'Car', score: 0.4, isTop: false },
        { label: 'Bike', score: 0.2, isTop: false },
      ],
      decision: 'AMBULANCE [CLASS_05]',
      confidence: '96.4%',
    },
  };

  const current = vehicleData[selectedVehicle];

  return (
    <div className="project-experience-block">
      {/* Project Overview Header */}
      <div className="project-header">
        <div className="project-meta-row">
          <span className="mono-label">PROJECT 02 // COMPUTER VISION</span>
          <span className="sim-badge mono-label">[DEMO MODEL PIPELINE]</span>
        </div>

        <h3 className="project-title">Vehicle Type Classification (CNN + MobileNetV2)</h3>

        <p className="project-description">
          Automated visual recognition system categorizing transport vehicles across 5 distinct classes via transfer learning and OpenCV image preprocessing.
        </p>

        {/* Authentic Project Context & Contribution */}
        <div className="project-provenance">
          <div className="provenance-item">
            <span className="mono-label">MY CONTRIBUTION:</span>
            <p className="provenance-text">
              Dataset collection and model testing, including evaluating the classification system across vehicle categories.
            </p>
          </div>
          <div className="provenance-item">
            <span className="mono-label">CONTEXT:</span>
            <p className="provenance-text">4-person academic team project.</p>
          </div>
        </div>

        {/* Technologies Chip Row */}
        <div className="project-tech-row">
          {['Python', 'TensorFlow/Keras', 'MobileNetV2', 'OpenCV', 'Streamlit'].map((tech) => (
            <span key={tech} className="mono-tag">{tech}</span>
          ))}
          <a
            href="https://github.com/SUMANTRAJ-B/Project-unknown"
            target="_blank"
            rel="noopener noreferrer"
            className="project-repo-link mono-label"
          >
            VIEW REPO ↗
          </a>
        </div>
      </div>

      {/* Interactive CV Pipeline Visualization */}
      <div className="pipeline-experience">
        <div className="pipeline-controls">
          <span className="mono-label">SELECT VEHICLE TEST CATEGORY:</span>
          <div className="scenario-btn-group">
            {Object.keys(vehicleData).map((cat) => (
              <button
                key={cat}
                type="button"
                className={`scenario-btn ${selectedVehicle === cat ? 'is-active' : ''}`}
                onClick={() => setSelectedVehicle(cat)}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* 5-Stage Vision Architecture */}
        <div className="cv-pipeline-grid">
          {/* Stage 1: Input Frame */}
          <div className="cv-stage-card">
            <div className="cv-stage-head">
              <span className="mono-label">STAGE 01</span>
              <span className="stage-name">SAMPLE IMAGE</span>
            </div>
            <div className="cv-stage-body">
              <div className="vehicle-visual-wireframe">
                <span className="wireframe-cat">{current.category}</span>
                <span className="wireframe-res">INPUT: 224×224</span>
              </div>
              <span className="cv-spec-text mono-label">{current.frameSpec}</span>
            </div>
          </div>

          <div className="pipeline-connector" aria-hidden="true">
            <span className="signal-arrow">→</span>
          </div>

          {/* Stage 2: OpenCV Preprocessing */}
          <div className="cv-stage-card">
            <div className="cv-stage-head">
              <span className="mono-label">STAGE 02</span>
              <span className="stage-name">OPENCV</span>
            </div>
            <div className="cv-stage-body">
              <span className="detail-tag">PREPROCESSING</span>
              <p className="cv-desc-text">RGB Channel Alignment, Resize &amp; Scale Normalization</p>
              <span className="code-sub">{current.preprocessing}</span>
            </div>
          </div>

          <div className="pipeline-connector" aria-hidden="true">
            <span className="signal-arrow">→</span>
          </div>

          {/* Stage 3: MobileNetV2 */}
          <div className="cv-stage-card">
            <div className="cv-stage-head">
              <span className="mono-label">STAGE 03</span>
              <span className="stage-name">MOBILENETV2</span>
            </div>
            <div className="cv-stage-body">
              <span className="detail-tag">FEATURE EXTRACTOR</span>
              <p className="cv-desc-text">Depthwise Separable Convolutions + Global Average Pooling</p>
              <span className="code-sub">{current.featureExtractor}</span>
            </div>
          </div>

          <div className="pipeline-connector" aria-hidden="true">
            <span className="signal-arrow">→</span>
          </div>

          {/* Stage 4: Confidence Layer & Decision */}
          <div className="cv-stage-card cv-stage-decision">
            <div className="cv-stage-head">
              <span className="mono-label">DECISION LAYER</span>
              <span className="mono-label top-conf">CONF: {current.confidence}</span>
            </div>

            <div className="confidence-distribution">
              {current.scores.map((item) => (
                <div key={item.label} className={`confidence-bar-row ${item.isTop ? 'is-winner' : ''}`}>
                  <span className="class-label">{item.label}</span>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: `${item.score}%` }}></div>
                  </div>
                  <span className="class-pct">{item.score}%</span>
                </div>
              ))}
            </div>

            <div className="cv-final-decision">
              <span className="decision-title mono-label">CLASSIFIED AS:</span>
              <span className="decision-value">{current.decision}</span>
            </div>
          </div>
        </div>

        {/* Notice of Simulation */}
        <div className="pipeline-disclaimer">
          <span className="mono-label">
            NOTICE: Feature representations and softmax probabilities are demonstrated for architectural illustration. The portfolio does not execute real-time model inference.
          </span>
        </div>
      </div>
    </div>
  );
}
