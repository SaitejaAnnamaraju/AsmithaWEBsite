import { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import { certificates } from '../data/portfolio.js';
import { SectionHeading } from './shared.jsx';
import Lightbox from './Lightbox.jsx';

export default function Certificates() {
  const [lb, setLb] = useState(null);
  const items = certificates.map((c) => ({ src: c.src, alt: `${c.title} certificate`, title: c.title, subtitle: `${c.issuer} · ${c.date}` }));

  return (
    <section id="certificates" className="section certificates section-ivory-deep">
      <div className="container">
        <SectionHeading
          index="06"
          eyebrow="Certificates"
          title={<>The <em>paper trail</em>.</>}
          intro="Select any certificate to view it full screen. Use the arrow keys or swipe to move between them."
        />

        <ul className="cert-grid">
          {certificates.map((c, i) => (
            <motion.li
              key={c.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <button type="button" className="cert-card" onClick={() => setLb(i)} aria-label={`Open certificate: ${c.title}`}>
                <span className="cert-thumb">
                  <img src={c.src} alt="" loading="lazy" />
                  <span className="cert-open" aria-hidden="true">
                    <Maximize2 size={16} />
                  </span>
                </span>
                <span className="cert-info">
                  <span className="cert-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="cert-title">{c.title}</span>
                  <span className="cert-issuer">{c.issuer}</span>
                  <span className="cert-date">{c.date}</span>
                </span>
              </button>
            </motion.li>
          ))}
        </ul>
      </div>

      <Lightbox items={items} index={lb} onClose={() => setLb(null)} onIndexChange={setLb} />
    </section>
  );
}
