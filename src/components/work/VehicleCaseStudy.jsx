import React, { useState } from 'react';
import './WorkSection.css';

export default function VehicleCaseStudy() {
  const [activeCategory, setActiveCategory] = useState('ambulance');

  const categories = {
    car: {
      name: 'CAR',
      frameSpec: '224×224 RGB Frame',
      opencvStep: 'Bilinear Rescaling & Normalization [-1.0, 1.0]',
      mobileNetStep: 'Depthwise Separable Feature Extractor (1280-D)',
      classification: 'Dense Softmax Classifier (5 Classes)',
      confidence: '95.8%',
      distribution: [
        { label: 'Car', pct: 95.8, isTop: true },
        { label: 'Truck', pct: 2.1, isTop: false },
        { label: 'Bus', pct: 1.1, isTop: false },
        { label: 'Ambulance', pct: 0.6, isTop: false },
        { label: 'Bike', pct: 0.4, isTop: false },
      ],
    },
    bike: {
      name: 'BIKE',
      frameSpec: '224×224 RGB Frame',
      opencvStep: 'Bilinear Rescaling & Normalization [-1.0, 1.0]',
      mobileNetStep: 'Depthwise Separable Feature Extractor (1280-D)',
      classification: 'Dense Softmax Classifier (5 Classes)',
      confidence: '98.2%',
      distribution: [
        { label: 'Bike', pct: 98.2, isTop: true },
        { label: 'Car', pct: 1.0, isTop: false },
        { label: 'Ambulance', pct: 0.4, isTop: false },
        { label: 'Truck', pct: 0.2, isTop: false },
        { label: 'Bus', pct: 0.2, isTop: false },
      ],
    },
    bus: {
      name: 'BUS',
      frameSpec: '224×224 RGB Frame',
      opencvStep: 'Bilinear Rescaling & Normalization [-1.0, 1.0]',
      mobileNetStep: 'Depthwise Separable Feature Extractor (1280-D)',
      classification: 'Dense Softmax Classifier (5 Classes)',
      confidence: '93.7%',
      distribution: [
        { label: 'Bus', pct: 93.7, isTop: true },
        { label: 'Truck', pct: 3.8, isTop: false },
        { label: 'Ambulance', pct: 1.4, isTop: false },
        { label: 'Car', pct: 0.8, isTop: false },
        { label: 'Bike', pct: 0.3, isTop: false },
      ],
    },
    truck: {
      name: 'TRUCK',
      frameSpec: '224×224 RGB Frame',
      opencvStep: 'Bilinear Rescaling & Normalization [-1.0, 1.0]',
      mobileNetStep: 'Depthwise Separable Feature Extractor (1280-D)',
      classification: 'Dense Softmax Classifier (5 Classes)',
      confidence: '94.1%',
      distribution: [
        { label: 'Truck', pct: 94.1, isTop: true },
        { label: 'Bus', pct: 3.5, isTop: false },
        { label: 'Car', pct: 1.2, isTop: false },
        { label: 'Ambulance', pct: 0.9, isTop: false },
        { label: 'Bike', pct: 0.3, isTop: false },
      ],
    },
    ambulance: {
      name: 'AMBULANCE',
      frameSpec: '224×224 RGB Frame',
      opencvStep: 'Bilinear Rescaling & Normalization [-1.0, 1.0]',
      mobileNetStep: 'Depthwise Separable Feature Extractor (1280-D)',
      classification: 'Dense Softmax Classifier (5 Classes)',
      confidence: '96.4%',
      distribution: [
        { label: 'Ambulance', pct: 96.4, isTop: true },
        { label: 'Truck', pct: 1.9, isTop: false },
        { label: 'Bus', pct: 1.1, isTop: false },
        { label: 'Car', pct: 0.4, isTop: false },
        { label: 'Bike', pct: 0.2, isTop: false },
      ],
    },
  };

  const current = categories[activeCategory];

  return (
    <article className="editorial-case-study" aria-label="Case Study 02: Vehicle Classification">
      {/* Topline Bar */}
      <div className="case-study-topline">
        <span className="case-study-number">02</span>
        <a
          href="https://github.com/SUMANTRAJ-B/Project-unknown"
          target="_blank"
          rel="noopener noreferrer"
          className="case-study-domain"
          aria-label="GitHub Repository (external link)"
        >
          <span>github.com/SUMANTRAJ-B/Project-unknown</span>
          <span className="link-arrow">↗</span>
        </a>
      </div>

      {/* Main Title & Editorial Description */}
      <div className="case-study-heading">
        <h3 className="case-study-title">
          Vehicle Type Classification (CNN + MobileNetV2)
        </h3>
        <p className="case-study-summary">
          Deep convolutional neural network architecture leveraging transfer learning with MobileNetV2 and OpenCV preprocessing for automated vehicle categorization.
        </p>
      </div>

      {/* Large Restrained Visual Area */}
      <div className="case-study-visual-area">
        <div className="visual-top-bar">
          <span className="tech-meta">[ SIMULATED DEMO ]</span>
          <div className="scenario-switcher">
            {['car', 'bike', 'bus', 'truck', 'ambulance'].map((cat) => (
              <button
                key={cat}
                type="button"
                className={`scenario-pill ${activeCategory === cat ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* 5-Stage Vision Flow */}
        <div className="editorial-pipeline-stages">
          <div className="stage-block">
            <div className="stage-tag tech-meta">STAGE 01</div>
            <div className="stage-name">SAMPLE IMAGE</div>
            <div className="stage-detail">{current.name} · {current.frameSpec}</div>
          </div>

          <div className="stage-arrow" aria-hidden="true">→</div>

          <div className="stage-block">
            <div className="stage-tag tech-meta">STAGE 02</div>
            <div className="stage-name">OPENCV</div>
            <div className="stage-detail">{current.opencvStep}</div>
          </div>

          <div className="stage-arrow" aria-hidden="true">→</div>

          <div className="stage-block">
            <div className="stage-tag tech-meta">STAGE 03</div>
            <div className="stage-name">MOBILENETV2</div>
            <div className="stage-detail">{current.mobileNetStep}</div>
          </div>

          <div className="stage-arrow" aria-hidden="true">→</div>

          <div className="stage-block">
            <div className="stage-tag tech-meta">STAGE 04</div>
            <div className="stage-name">CLASSIFICATION</div>
            <div className="stage-detail">{current.classification}</div>
          </div>

          <div className="stage-arrow" aria-hidden="true">→</div>

          <div className="stage-block stage-result tier-normal">
            <div className="stage-tag tech-meta">CONFIDENCE LAYER</div>
            <div className="stage-name decision-text">{current.name} ({current.confidence})</div>
            <div className="confidence-bars-mini">
              {current.distribution.map((d) => (
                <div key={d.label} className={`conf-mini-row ${d.isTop ? 'is-top' : ''}`}>
                  <span className="conf-label">{d.label}</span>
                  <div className="conf-track">
                    <div className="conf-bar" style={{ width: `${d.pct}%` }} />
                  </div>
                  <span className="conf-val">{d.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="visual-notice tech-meta">
          * DEMONSTRATION SIMULATION RUNNING LOCALLY. NO LIVE INFERENCE SERVICE IS RUNNING.
        </div>
      </div>

      {/* Editorial Footer (Technologies & Contribution) */}
      <footer className="case-study-footer">
        <div className="footer-meta-col">
          <span className="footer-meta-label tech-meta">TECHNOLOGY</span>
          <p className="footer-meta-text">
            Python · TensorFlow/Keras · MobileNetV2 · OpenCV · Streamlit
          </p>
        </div>

        <div className="footer-meta-col">
          <span className="footer-meta-label tech-meta">MY CONTRIBUTION</span>
          <p className="footer-meta-text">
            Dataset collection + model testing (4-person academic team project)
          </p>
        </div>

        <div className="footer-meta-col footer-action-col">
          <a
            href="https://github.com/SUMANTRAJ-B/Project-unknown"
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
