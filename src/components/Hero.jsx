import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Mail, Trophy, FileText, MapPin } from 'lucide-react';
import { profile } from '../data/portfolio.js';
import { scrollToId, SocialLinks } from './shared.jsx';

const ease = [0.22, 1, 0.36, 1];
const up = (delay) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
});

export default function Hero() {
  const click = (id) => (e) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="hero-bg" aria-hidden="true">
        <span className="hero-monogram">AA</span>
        <span className="hero-ring hero-ring-1" />
        <span className="hero-ring hero-ring-2" />
      </div>

      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.p className="eyebrow" {...up(0.1)}>
            <span className="eyebrow-line" aria-hidden="true" />
            Portfolio · Information Technology
          </motion.p>

          <motion.h1 className="hero-name" {...up(0.2)}>
            <span className="hero-name-first">Alleshetti</span>
            <span className="hero-name-last">Asmitha</span>
          </motion.h1>

          <motion.ul className="hero-roles" aria-label="Roles" {...up(0.32)}>
            {profile.headline.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </motion.ul>

          <motion.p className="hero-intro" {...up(0.42)}>
            {profile.intro}
          </motion.p>

          <motion.div className="hero-buttons" {...up(0.52)}>
            <a href="#about" onClick={click('about')} className="btn btn-navy">
              Explore My Journey <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a href="#projects" onClick={click('projects')} className="btn btn-outline">
              View My Projects
            </a>
            <a href="#contact" onClick={click('contact')} className="btn btn-ghost">
              <Mail size={16} aria-hidden="true" /> Contact Me
            </a>
          </motion.div>

          <motion.div className="hero-foot" {...up(0.62)}>
            <SocialLinks />
            <span className="hero-loc">
              <MapPin size={15} aria-hidden="true" /> {profile.location}
            </span>
          </motion.div>
        </div>

        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: 0.15, ease }}>
          <div className="portrait-frame">
            <span className="portrait-backdrop" aria-hidden="true" />
            <span className="portrait-outline" aria-hidden="true" />
            <div className="portrait-arch">
              <img src={profile.portrait} alt={profile.portraitAlt} width="900" height="1600" fetchpriority="high" />
            </div>

            <motion.div className="float-badge badge-top" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9, duration: 0.7, ease }}>
              <span className="fb-icon">
                <Trophy size={17} aria-hidden="true" />
              </span>
              <span>
                <strong>3rd Place</strong>
                <small>SAMAVARTHAN 2K26</small>
              </span>
            </motion.div>

            <motion.div className="float-badge badge-bottom" initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1, duration: 0.7, ease }}>
              <span className="fb-icon">
                <FileText size={17} aria-hidden="true" />
              </span>
              <span>
                <strong>Paper presented</strong>
                <small>IEI Telangana, 2026</small>
              </span>
            </motion.div>

            <span className="portrait-caption" aria-hidden="true">
              B.Tech IT · MVSR Engineering College
            </span>
          </div>
        </motion.div>
      </div>

      <a href="#about" onClick={click('about')} className="scroll-cue" aria-label="Scroll to About section">
        <span>Scroll</span>
        <ArrowDown size={16} aria-hidden="true" />
      </a>
    </section>
  );
}
