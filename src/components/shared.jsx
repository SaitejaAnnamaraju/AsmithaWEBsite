import { motion } from 'framer-motion';
import {
  Code2,
  LayoutTemplate,
  Users,
  Trophy,
  Presentation,
  LifeBuoy,
  Medal,
  Flag,
  Shield,
  HeartHandshake,
  Linkedin,
  Github,
  Mail,
} from 'lucide-react';
import { contact } from '../data/portfolio.js';

export const iconMap = { Code2, LayoutTemplate, Users, Trophy, Presentation, LifeBuoy, Medal, Flag, Shield, HeartHandshake };

export function Icon({ name, ...props }) {
  const Cmp = iconMap[name] || Code2;
  return <Cmp aria-hidden="true" {...props} />;
}

/** Fades + lifts its children into view once. */
export function Reveal({ children, delay = 0, y = 28, className, as = 'div' }) {
  const M = motion[as];
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </M>
  );
}

export function SectionHeading({ index, eyebrow, title, intro, light = false }) {
  return (
    <Reveal className={`section-heading${light ? ' is-light' : ''}`}>
      <p className="eyebrow">
        {index && <span className="eyebrow-index">{index}</span>}
        {eyebrow}
      </p>
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </Reveal>
  );
}

const socials = [
  { key: 'linkedin', label: 'LinkedIn', Icon: Linkedin, href: contact.linkedin },
  { key: 'github', label: 'GitHub', Icon: Github, href: contact.github },
  { key: 'email', label: 'Email', Icon: Mail, href: contact.email ? `mailto:${contact.email}` : '' },
];

/** Social icons. Links without a URL yet render as muted, non-clickable placeholders. */
export function SocialLinks({ className = '' }) {
  return (
    <ul className={`socials ${className}`}>
      {socials.map(({ key, label, Icon: I, href }) => (
        <li key={key}>
          {href ? (
            <a href={href} target={key === 'email' ? undefined : '_blank'} rel="noopener noreferrer" aria-label={label} title={label}>
              <I size={18} aria-hidden="true" />
            </a>
          ) : (
            <span className="is-pending" title={`${label}: coming soon`} aria-label={`${label} (coming soon)`} role="img">
              <I size={18} aria-hidden="true" />
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  history.replaceState(null, '', id === 'home' ? ' ' : `#${id}`);
}
