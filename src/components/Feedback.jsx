import { useEffect, useRef } from 'react';
import { MessageSquareHeart } from 'lucide-react';
import { mountFeedback } from '../angular/feedbackModule.js';
import { Reveal, SectionHeading } from './shared.jsx';

/**
 * React only renders the shell and an empty host <div>.
 * The form inside is owned entirely by the AngularJS module.
 */
export default function Feedback() {
  const host = useRef(null);

  useEffect(() => {
    if (!host.current) return;
    return mountFeedback(host.current);
  }, []);

  return (
    <section id="feedback" className="section feedback section-ivory-deep" aria-labelledby="feedback-heading">
      <div className="container feedback-grid">
        <div className="feedback-side">
          <SectionHeading index="10" eyebrow="Visitor Feedback" title={<span id="feedback-heading">Leave a <em>note</em>.</span>} />
          <Reveal delay={0.1}>
            <p className="section-intro">
              Visited the portfolio? A quick rating and a few words help me grow. No sign-up needed.
            </p>
            <span className="feedback-icon" aria-hidden="true">
              <MessageSquareHeart size={34} strokeWidth={1.4} />
            </span>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="feedback-card">
          <div ref={host} />
        </Reveal>
      </div>
    </section>
  );
}
