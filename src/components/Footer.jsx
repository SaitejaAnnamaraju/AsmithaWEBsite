import { profile } from '../data/portfolio.js';
import { scrollToId, SocialLinks } from './shared.jsx';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export default function Footer() {
  const go = (id) => (e) => {
    e.preventDefault();
    scrollToId(id);
  };
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="logo-mark logo-mark-lg">{profile.initials}</span>
          <div>
            <p className="footer-name">Alleshetti Asmitha</p>
            <p className="footer-motto">Learning. Building. Leading. Growing.</p>
          </div>
        </div>
        <nav aria-label="Footer">
          <ul className="footer-links">
            {links.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} onClick={go(l.id)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <SocialLinks className="socials-light" />
      </div>
      <div className="container footer-bottom">
        <p>© 2026 Alleshetti Asmitha. All Rights Reserved.</p>
        <p>Hyderabad, Telangana, India</p>
      </div>
    </footer>
  );
}
