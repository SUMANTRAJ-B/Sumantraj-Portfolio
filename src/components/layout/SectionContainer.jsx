import React from 'react';
import './SectionContainer.css';

/**
 * Reusable container for portfolio sections.
 * Enforces unified spacing, maximum reading width, and technical headers.
 */
export default function SectionContainer({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = '',
  as: Component = 'section',
}) {
  return (
    <Component id={id} className={`section-container ${className}`.trim()}>
      <div className="section-inner">
        {(eyebrow || title || subtitle) && (
          <header className="section-header">
            {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </header>
        )}
        <div className="section-content">
          {children}
        </div>
      </div>
    </Component>
  );
}
