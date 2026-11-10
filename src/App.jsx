import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Achievements from './components/Achievements.jsx';
import Certificates from './components/Certificates.jsx';
import Leadership from './components/Leadership.jsx';
import News from './components/News.jsx';
import Contact from './components/Contact.jsx';
import Feedback from './components/Feedback.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Certificates />
        <Leadership />
        <News />
        <Contact />
        <Feedback />
      </main>
      <Footer />
      <ScrollToTop />
    </MotionConfig>
  );
}
