import { useState } from 'react';
import { leadership } from '../data/portfolio.js';
import { Icon, Reveal, SectionHeading } from './shared.jsx';
import Lightbox from './Lightbox.jsx';

export default function Leadership() {
  const withImg = leadership.filter((l) => l.image);
  const items = withImg.map((l) => ({ src: l.image.src, alt: l.image.alt, title: l.title, subtitle: l.org }));
  const [lb, setLb] = useState(null);

  return (
    <section id="leadership" className="section leadership section-navy">
      <div className="container">
        <SectionHeading
          light
          index="07"
          eyebrow="Leadership & Extracurriculars"
          title={<>Showing up, <em>beyond</em> the syllabus.</>}
          intro="Coordinating events, training as an NCC cadet and preparing to help communities in a crisis."
        />

        <div className="lead-grid">
          {leadership.map((l, i) => (
            <Reveal key={l.title} delay={i * 0.1} className="lead-card">
              <span className="lead-num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="lead-icon">
                <Icon name={l.icon} size={22} />
              </span>
              <h3>{l.title}</h3>
              <p className="lead-org">{l.org}</p>
              <ul className="lead-points">
                {l.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              {l.image && (
                <button type="button" className="lead-img" onClick={() => setLb(withImg.indexOf(l))} aria-label={`View ${l.image.alt}`}>
                  <img src={l.image.src} alt="" loading="lazy" />
                </button>
              )}
            </Reveal>
          ))}
        </div>
      </div>
      <Lightbox items={items} index={lb} onClose={() => setLb(null)} onIndexChange={setLb} />
    </section>
  );
}
