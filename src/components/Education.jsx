import { education } from '../data/portfolio.js';
import { Reveal, SectionHeading } from './shared.jsx';

const Pending = ({ children = 'To be updated' }) => <span className="pending">{children}</span>;

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <SectionHeading index="02" eyebrow="Education" title={<>The <em>foundation</em>.</>} />

        <ol className="timeline">
          {education.map((e, i) => (
            <Reveal as="li" key={e.level} delay={i * 0.08} className={`tl-item${e.current ? ' is-current' : ''}`}>
              <span className="tl-dot" aria-hidden="true" />
              <div className="tl-card">
                <div className="tl-top">
                  <span className="tl-level">{e.level}</span>
                  {e.current && <span className="tl-badge">Currently pursuing</span>}
                </div>
                <h3>{e.title}</h3>
                <p className="tl-inst">{e.institution || <Pending>Institution to be updated</Pending>}</p>
                {e.note && <p className="tl-note">{e.note}</p>}
                <dl className="tl-meta">
                  <div>
                    <dt>Academic years</dt>
                    <dd>{e.period || <Pending />}</dd>
                  </div>
                  <div>
                    <dt>{e.scoreLabel}</dt>
                    <dd>{e.score || <Pending />}</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
