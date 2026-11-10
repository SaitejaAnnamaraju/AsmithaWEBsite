import { Mail, Linkedin, Github, MapPin, ArrowUpRight, Send } from 'lucide-react';
import { contact, profile } from '../data/portfolio.js';
import { Reveal, SectionHeading } from './shared.jsx';

const rows = [
  { key: 'email', label: 'Email', Icon: Mail, value: contact.email, href: contact.email ? `mailto:${contact.email}` : '' },
  { key: 'linkedin', label: 'LinkedIn', Icon: Linkedin, value: contact.linkedin.replace(/^https?:\/\/(www\.)?/, ''), href: contact.linkedin },
  { key: 'github', label: 'GitHub', Icon: Github, value: contact.github.replace(/^https?:\/\/(www\.)?/, ''), href: contact.github },
  { key: 'loc', label: 'Location', Icon: MapPin, value: profile.location, href: '' },
];

export default function Contact() {
  const mailto = contact.email
    ? `mailto:${contact.email}?subject=${encodeURIComponent('Hello Asmitha, from your portfolio')}`
    : '';

  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <div>
          <SectionHeading
            index="09"
            eyebrow="Contact"
            title={<>Let’s build something <em>meaningful</em>.</>}
            intro="Whether it’s an internship, a project collaboration, a technical event or just a conversation about technology, I’d love to hear from you."
          />
          <Reveal delay={0.1}>
            {mailto ? (
              <a className="btn btn-navy btn-lg" href={mailto}>
                <Send size={17} aria-hidden="true" /> Write to Me
              </a>
            ) : (
              <span className="btn btn-navy btn-lg is-disabled" aria-disabled="true" title="Email address coming soon">
                <Send size={17} aria-hidden="true" /> Email coming soon
              </span>
            )}
          </Reveal>
        </div>

        <Reveal delay={0.1} className="contact-card">
          <ul>
            {rows.map(({ key, label, Icon: I, value, href }) => (
              <li key={key}>
                <span className="cc-icon">
                  <I size={19} aria-hidden="true" />
                </span>
                <span className="cc-text">
                  <span className="cc-label">{label}</span>
                  {href ? (
                    <a href={href} target={key === 'email' ? undefined : '_blank'} rel="noopener noreferrer">
                      {value} <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  ) : value ? (
                    <span className="cc-value">{value}</span>
                  ) : (
                    <span className="pending">Coming soon</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
