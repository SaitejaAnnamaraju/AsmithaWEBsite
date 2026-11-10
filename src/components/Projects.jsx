import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Github, ChevronDown, Expand, Sparkles, Award, Plus } from 'lucide-react';
import { featuredProject as p, moreProjects } from '../data/portfolio.js';
import { Reveal, SectionHeading } from './shared.jsx';
import Lightbox from './Lightbox.jsx';

export default function Projects() {
  const [more, setMore] = useState(false);
  const [photo, setPhoto] = useState(0);
  const [lb, setLb] = useState(null);
  const lbItems = p.photos.map((ph) => ({ src: ph.src, alt: ph.alt, title: ph.caption, subtitle: 'MediLink · IEI Telangana State Centre' }));

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionHeading
          index="04"
          eyebrow="Projects"
          title={<>Ideas, turned into <em>solutions</em>.</>}
          intro="A featured research project, with more builds on the way."
        />

        <Reveal className="feature-card">
          <div className="feature-media">
            <button type="button" className="feature-main" onClick={() => setLb(photo)} aria-label={`Enlarge photo: ${p.photos[photo].caption}`}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.img key={p.photos[photo].src} src={p.photos[photo].src} alt={p.photos[photo].alt} loading="lazy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }} />
              </AnimatePresence>
              <span className="media-zoom" aria-hidden="true">
                <Expand size={16} />
              </span>
              <span className="media-caption">{p.photos[photo].caption}</span>
            </button>
            <div className="feature-thumbs" role="group" aria-label="Project photos">
              {p.photos.map((ph, i) => (
                <button type="button" key={ph.src} className={i === photo ? 'is-active' : ''} onClick={() => setPhoto(i)} aria-label={`Show photo ${i + 1}: ${ph.caption}`} aria-pressed={i === photo}>
                  <img src={ph.src} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          </div>

          <div className="feature-body">
            <div className="feature-tags">
              <span className="tag tag-gold">
                <Sparkles size={13} aria-hidden="true" /> Featured
              </span>
              <span className="tag">{p.status}</span>
            </div>
            <h3 className="feature-title">
              {p.name}
              <span>{p.tagline}</span>
            </h3>
            <p className="feature-desc">{p.description}</p>

            <p className="mini-label">Technology stack</p>
            <ul className="chips chips-navy">
              {p.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>

            <div className="feature-actions">
              <button type="button" className="btn btn-navy" onClick={() => setMore((m) => !m)} aria-expanded={more} aria-controls="medilink-more">
                {more ? 'Show Less' : 'View More'} <ChevronDown size={17} className={more ? 'rot' : ''} aria-hidden="true" />
              </button>
              {p.repoUrl ? (
                <a className="btn btn-outline" href={p.repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github size={17} aria-hidden="true" /> GitHub Repository
                </a>
              ) : (
                <span className="btn btn-outline is-disabled" aria-disabled="true" title="Repository will be published soon">
                  <Github size={17} aria-hidden="true" /> Repository coming soon
                </span>
              )}
            </div>
          </div>

          <AnimatePresence initial={false}>
            {more && (
              <motion.div
                id="medilink-more"
                className="feature-more"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="feature-more-inner">
                  <p className="paper-title">
                    <span>Paper title</span>
                    {p.fullTitle}
                  </p>
                  <div className="ps-grid">
                    <div className="ps-block">
                      <span className="ps-num">01</span>
                      <h4>Problem statement</h4>
                      <p>{p.problem}</p>
                    </div>
                    <div className="ps-block">
                      <span className="ps-num">02</span>
                      <h4>Proposed solution</h4>
                      <p>{p.solution}</p>
                    </div>
                    <div className="ps-block">
                      <span className="ps-num">03</span>
                      <h4>Recognition</h4>
                      <p>{p.recognition}</p>
                    </div>
                  </div>
                  <p className="honest-note">
                    <Award size={15} aria-hidden="true" /> MediLink is a proposed system presented as a research paper. The features described reflect the proposed design.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Reveal>

        <div className="more-projects">
          {moreProjects.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.1} className={`project-ghost${m.placeholder ? '' : ' is-real'}`}>
              <span className="ghost-icon" aria-hidden="true">
                <Plus size={20} />
              </span>
              <h3>{m.title}</h3>
              <p>{m.note}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox items={lbItems} index={lb} onClose={() => setLb(null)} onIndexChange={setLb} />
    </section>
  );
}
