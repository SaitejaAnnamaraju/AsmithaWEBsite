import { useState } from 'react';
import { Newspaper, ZoomIn } from 'lucide-react';
import { news } from '../data/portfolio.js';
import { Reveal, SectionHeading } from './shared.jsx';
import Lightbox from './Lightbox.jsx';

export default function News() {
  const [lb, setLb] = useState(null);
  const items = [{ src: news.src, alt: news.alt, title: `${news.publication}: ${news.headline}`, subtitle: `${news.date} · ${news.edition}` }];

  return (
    <section id="news" className="section news" aria-labelledby="news-title">
      <div className="container">
        <div className="news-grid">
          <Reveal className="news-clip">
            <button type="button" onClick={() => setLb(0)} aria-label="Enlarge the Sakshi newspaper clipping">
              <img src={news.src} alt={news.alt} loading="lazy" width="768" height="905" />
              <span className="news-zoom" aria-hidden="true">
                <ZoomIn size={18} /> Enlarge
              </span>
            </button>
          </Reveal>

          <div className="news-copy">
            <Reveal>
              <p className="eyebrow">
                <span className="eyebrow-index">08</span>In the News
              </p>
              <h2 id="news-title">
                Recognised <em>beyond</em> the classroom.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="news-meta">
              <span className="news-pub">
                <Newspaper size={18} aria-hidden="true" /> {news.publication}
              </span>
              <span>{news.date}</span>
              <span>{news.edition}</span>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="news-headline">“{news.headline}”</p>
              <p className="news-caption">{news.caption}</p>
              <p className="news-source">
                Source:{' '}
                <a href={news.source} target="_blank" rel="noopener noreferrer">
                  epaper.sakshi.com
                </a>
              </p>
            </Reveal>
          </div>
        </div>
      </div>
      <Lightbox items={items} index={lb} onClose={() => setLb(null)} onIndexChange={setLb} />
    </section>
  );
}
