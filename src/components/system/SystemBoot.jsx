import React, { useState, useEffect } from 'react';
import './SystemBoot.css';

export default function SystemBoot({ onComplete }) {
  const [step, setStep] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Respect reduced motion preference by skipping immediately
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete?.();
      return;
    }

    const stepsTimeline = [
      setTimeout(() => setStep(1), 180),  // AI SYSTEMS ✓
      setTimeout(() => setStep(2), 380),  // COMPUTER VISION ✓
      setTimeout(() => setStep(3), 580),  // EDGE / IoT ✓
      setTimeout(() => setStep(4), 780),  // PROJECTS READY ✓
      setTimeout(() => setIsFading(true), 1050),
      setTimeout(() => onComplete?.(), 1300),
    ];

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        skipBoot();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      stepsTimeline.forEach(clearTimeout);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const skipBoot = () => {
    setIsFading(true);
    setTimeout(() => onComplete?.(), 200);
  };

  const bootLogs = [
    { label: 'AI SYSTEMS', activeStep: 1 },
    { label: 'COMPUTER VISION', activeStep: 2 },
    { label: 'EDGE / IoT', activeStep: 3 },
    { label: 'PROJECT PIPELINES', activeStep: 4 },
  ];

  return (
    <aside
      className={`boot-overlay ${isFading ? 'is-fading' : ''}`}
      aria-label="System diagnostic initialization"
      role="status"
      aria-live="polite"
    >
      <div className="boot-terminal">
        <div className="boot-header">
          <span className="boot-title">SUMANTRAJ // INTELLIGENCE LAB</span>
          <button type="button" className="boot-skip-btn" onClick={skipBoot} aria-label="Skip initialization sequence">
            SKIP [ESC]
          </button>
        </div>

        <div className="boot-body">
          <div className="boot-line prefix">SYS_INIT :: 2026.09 // INITIALIZING SUBSYSTEMS...</div>
          {bootLogs.map((log, index) => (
            <div
              key={log.label}
              className={`boot-line item ${step >= log.activeStep ? 'is-ready' : 'is-pending'}`}
            >
              <span className="item-label">{log.label}</span>
              <span className="item-status">
                {step >= log.activeStep ? 'READY ✓' : '...'}
              </span>
            </div>
          ))}
          {step >= 4 && (
            <div className="boot-line complete">
              &gt; ENVIRONMENT READY. ENTERING EXPERIENCE...
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
