import { useState } from 'react';
import { CalendarDays, Eye } from 'lucide-react';
import { achievements, certificates } from '../data/portfolio.js';
import { Icon, Reveal, SectionHeading } from './shared.jsx';
import Lightbox from './Lightbox.jsx';

const certById = Object.fromEntries(certificates.map((c) => [c.id, c]));

export default function Achievements() {
  const withCert = achievements.filter((a) => a.certificateId);
  const lbItems = withCert.map((a) => {
    const c = certById[a.certificateId];
    return { src: c.src, alt: `${c.title} certificate`, title: c.title, subtitle: `${c.issuer} · ${c.date}` };
  });
  const [lb, setLb] = useState(null);
  const open = (a) => setLb(withCert.indexOf(a));

  return (
    <section id="achievements" className="section achievements">
      <div className="container">
        <SectionHeading
          index="05"
          eyebrow="Achievements & Awards"
          title={<>Milestones worth <em>remembering</em>.</>}
          intro="Recognition from technical fests, seminars and national training programmes, each backed by its original certificate."
        />

        <div className="ach-grid">
          {achievements.map((a, i) => {
            const c = a.certificateId ? certById[a.certificateId] : null;
            return (
              <Reveal key={a.title} delay={(i % 3) * 0.08} className={`ach-card${a.featured ? ' is-featured' : ''}${c ? '' : ' no-cert'}`}>
                {c ? (
                  <button type="button" className="ach-preview" onClick={() => open(a)} aria-label={`View certificate: ${c.title}`}>
                    <img src={c.src} alt="" loading="lazy" />
                    <span className="ach-preview-hover" aria-hidden="true">
                      <Eye size={18} /> View certificate
                    </span>
                  </button>
                ) : (
                  <div className="ach-preview ach-preview-empty" aria-hidden="true">
                    <Icon name={a.icon} size={40} strokeWidth={1.3} />
                  </div>
                )}

                <div className="ach-body">
                  <div className="ach-top">
                    <span className="ach-icon">
                      <Icon name={a.icon} size={18} />
                    </span>
                    <span className="ach-kicker">{a.kicker}</span>
                  </div>
                  <h3>{a.title}</h3>
                  <p className="ach-org">{a.org}</p>
                  <p className="ach-desc">{a.description}</p>
                  <div className="ach-foot">
                    <span className="ach-date">
                      <CalendarDays size={15} aria-hidden="true" /> {a.date}
                    </span>
                    {c && (
                      <button type="button" className="link-btn" onClick={() => open(a)}>
                        View Certificate
                      </button>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <Lightbox items={lbItems} index={lb} onClose={() => setLb(null)} onIndexChange={setLb} />
    </section>
  );
}
