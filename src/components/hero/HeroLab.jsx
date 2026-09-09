import React, { useRef, useEffect, useState } from 'react';
import './HeroLab.css';

export default function HeroLab() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Lightweight dynamic canvas for ambient nodes & signal lines (No Three.js needed)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Initial calibrated engineering nodes
    const nodeCount = Math.min(22, Math.floor(width / 45));
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.8 + 1,
      type: Math.random() > 0.6 ? 'sensor' : 'compute',
    }));

    let currentMouse = { x: width / 2, y: height / 2 };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Interpolate towards target mouse position
      currentMouse.x += (mousePos.x - currentMouse.x) * 0.05;
      currentMouse.y += (mousePos.y - currentMouse.y) * 0.05;

      // Draw faint connections between proximate nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.12;
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes and update coordinates
      nodes.forEach((node) => {
        // Subtle mouse repulsion/attraction field
        const dx = currentMouse.x - node.x;
        const dy = currentMouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 160) {
          node.x -= (dx / dist) * 0.3;
          node.y -= (dy / dist) * 0.3;
        }

        node.x += node.vx;
        node.y += node.vy;

        // Bounce within boundaries
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        ctx.fillStyle = node.type === 'sensor' ? 'rgba(0, 240, 255, 0.6)' : 'rgba(255, 255, 255, 0.4)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="hero-lab-section"
      onMouseMove={handleMouseMove}
      aria-label="Identity and Hero Environment"
    >
      {/* Background Interactive Topology Canvas */}
      <canvas ref={canvasRef} className="hero-topology-canvas" aria-hidden="true" />

      {/* Subtle Hairline Frame Markers */}
      <div className="corner-mark top-left" aria-hidden="true">+</div>
      <div className="corner-mark top-right" aria-hidden="true">+</div>
      <div className="corner-mark bottom-left" aria-hidden="true">+</div>
      <div className="corner-mark bottom-right" aria-hidden="true">+</div>

      <div className="hero-lab-container">
        {/* Telemetry Tag */}
        <div className="hero-system-status">
          <span className="status-indicator"></span>
          <span className="mono-label">SUMANTRAJ // INTELLIGENCE LAB</span>
        </div>

        {/* Primary Identity Headline */}
        <h1 className="hero-lab-name">
          SUMANTRAJ B
        </h1>

        {/* Professional Role */}
        <p className="hero-lab-role">
          AI/ML Student <span className="role-divider">|</span> Aspiring AI Engineer
        </p>

        {/* Core Supporting Thesis */}
        <p className="hero-lab-statement">
          Building intelligent systems where machine learning, software, computer vision, and hardware meet.
        </p>

        {/* Signal Domain Tags */}
        <div className="hero-domains" aria-label="Core Engineering Domains">
          <span className="domain-pill">AI / Machine Learning</span>
          <span className="domain-pill">Computer Vision</span>
          <span className="domain-pill">Industrial IoT</span>
          <span className="domain-pill">Edge AI</span>
        </div>

        {/* Direct Action Triggers */}
        <div className="hero-cta-group">
          <a href="#projects" className="btn-lab-primary">
            <span>EXPLORE SYSTEM PIPELINES</span>
            <svg
              className="btn-arrow"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>

          <a
            href="https://github.com/SUMANTRAJ-B"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-lab-ghost"
            aria-label="GitHub Profile (external link)"
          >
            <svg className="ghost-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/sumantraj-b-452b82312/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-lab-ghost"
            aria-label="LinkedIn Profile (external link)"
          >
            <svg className="ghost-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.6a1.64 1.64 0 0 0-1.64 1.64c0 .9.74 1.64 1.64 1.64s1.64-.74 1.64-1.64c0-.9-.74-1.64-1.64-1.64Z" />
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
