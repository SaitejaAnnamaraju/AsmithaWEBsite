import { skills, skillLevels } from '../data/portfolio.js';
import { Icon, Reveal, SectionHeading } from './shared.jsx';

function LevelIndicator({ level }) {
  const n = skillLevels.indexOf(level) + 1;
  if (n < 1) return null;
  return (
    <span className="level" title={level}>
      <span className="level-dots" aria-hidden="true">
        {skillLevels.map((_, i) => (
          <i key={i} className={i < n ? 'on' : ''} />
        ))}
      </span>
      <span className="level-text">{level}</span>
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section skills section-navy">
      <div className="container">
        <SectionHeading
          light
          index="03"
          eyebrow="Technical Skills"
          title={<>Tools of the <em>trade</em>.</>}
          intro="Languages and technologies I work with, alongside the people skills that make teamwork click."
        />

        <div className="skill-grid">
          {skills.map((g, i) => (
            <Reveal key={g.group} delay={i * 0.1} className="skill-card">
              <div className="skill-head">
                <span className="skill-icon">
                  <Icon name={g.icon} size={22} />
                </span>
                <h3>{g.group}</h3>
                <span className="skill-count">{String(g.items.length).padStart(2, '0')}</span>
              </div>
              <ul className="skill-list">
                {g.items.map((s) => (
                  <li key={s.name}>
                    <span className="skill-name">{s.name}</span>
                    <LevelIndicator level={s.level} />
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
