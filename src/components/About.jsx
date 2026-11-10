import { GraduationCap, Building2, MapPin, ChevronDown } from 'lucide-react';
import { about, profile } from '../data/portfolio.js';
import { Reveal, SectionHeading } from './shared.jsx';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <SectionHeading index="01" eyebrow="About Me" title={<>Curious by nature, <em>builder</em> by choice.</>} />

        <div className="about-grid">
          <Reveal className="about-photo">
            <img src={profile.secondaryPortrait} alt="Asmitha at the Institution of Engineers (India), Telangana State Centre" loading="lazy" width="1500" height="2000" />
            <span className="about-photo-tag">At IEI Telangana State Centre, June 2026</span>
          </Reveal>

          <div className="about-body">
            <Reveal>
              <p className="lead">{about.bio}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <dl className="fact-list">
                <div>
                  <dt>
                    <GraduationCap size={18} aria-hidden="true" /> Name
                  </dt>
                  <dd>{profile.name}</dd>
                </div>
                <div>
                  <dt>
                    <Building2 size={18} aria-hidden="true" /> College
                  </dt>
                  <dd>{profile.college}</dd>
                </div>
                <div>
                  <dt>
                    <GraduationCap size={18} aria-hidden="true" /> Department
                  </dt>
                  <dd>{profile.department}</dd>
                </div>
                <div>
                  <dt>
                    <MapPin size={18} aria-hidden="true" /> Based in
                  </dt>
                  <dd>{profile.location}</dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mini-label">Interests</p>
              <ul className="chips">
                {about.interests.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <details className="personal-details">
                <summary>
                  Personal details <ChevronDown size={16} aria-hidden="true" />
                </summary>
                <dl>
                  {about.family.map((f) => (
                    <div key={f.relation}>
                      <dt>{f.relation}</dt>
                      <dd>{f.name}</dd>
                    </div>
                  ))}
                </dl>
              </details>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
