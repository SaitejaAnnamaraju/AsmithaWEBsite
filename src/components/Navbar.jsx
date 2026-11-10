import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { navItems, profile } from '../data/portfolio.js';
import { scrollToId, SocialLinks } from './shared.jsx';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section highlighting
  useEffect(() => {
    const ids = navItems.map((n) => n.id);
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open);
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const go = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    // let the mobile panel close before scrolling
    setTimeout(() => scrollToId(id), open ? 220 : 0);
  };

  return (
    <header className={`nav${scrolled ? ' is-solid' : ''}${open ? ' is-open' : ''}`}>
      <div className="nav-inner container">
        <a href="#home" className="nav-logo" onClick={go('home')} aria-label="Alleshetti Asmitha, back to top">
          <span className="logo-mark">{profile.initials}</span>
          <span className="logo-name">Alleshetti Asmitha</span>
        </a>

        <nav aria-label="Primary" className="nav-links">
          <ul>
            {navItems.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} onClick={go(n.id)} className={active === n.id ? 'is-active' : ''} aria-current={active === n.id ? 'true' : undefined}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-cta">
          <a href={profile.resumeUrl} target="_blank" rel="noopener" className="btn btn-gold btn-sm">
            <Download size={15} aria-hidden="true" /> <span>Resume</span>
          </a>
          <button type="button" className="nav-toggle" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <nav aria-label="Mobile">
              <ol>
                {navItems.map((n, i) => (
                  <motion.li key={n.id} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.04 * i }}>
                    <a href={`#${n.id}`} onClick={go(n.id)} className={active === n.id ? 'is-active' : ''}>
                      <span className="mm-num">{String(i + 1).padStart(2, '0')}</span>
                      {n.label}
                    </a>
                  </motion.li>
                ))}
              </ol>
            </nav>
            <div className="mobile-menu-foot">
              <a href={profile.resumeUrl} target="_blank" rel="noopener" className="btn btn-gold">
                <Download size={16} aria-hidden="true" /> Download Resume
              </a>
              <SocialLinks className="socials-light" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
