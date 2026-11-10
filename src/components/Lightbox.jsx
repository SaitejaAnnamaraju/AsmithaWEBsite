import { useEffect, useRef, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, ExternalLink } from 'lucide-react';

/**
 * Full-screen image viewer.
 * items: [{ src, alt, title?, subtitle? }]
 * index: number | null (null = closed)
 */
export default function Lightbox({ items, index, onClose, onIndexChange }) {
  const open = index !== null && index !== undefined;
  const [zoomed, setZoomed] = useState(false);
  const [dir, setDir] = useState(0);
  const closeRef = useRef(null);
  const lastFocus = useRef(null);
  const many = items.length > 1;

  const go = useCallback(
    (step) => {
      if (!many) return;
      setDir(step);
      setZoomed(false);
      onIndexChange((index + step + items.length) % items.length);
    },
    [index, items.length, many, onIndexChange]
  );

  useEffect(() => {
    if (!open) return;
    lastFocus.current = document.activeElement;
    document.body.classList.add('no-scroll');
    const t = setTimeout(() => closeRef.current?.focus(), 50);
    return () => {
      clearTimeout(t);
      document.body.classList.remove('no-scroll');
      lastFocus.current?.focus?.();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
      else if (e.key === 'Tab') {
        const nodes = document.querySelectorAll('.lightbox button, .lightbox a');
        if (!nodes.length) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, go, onClose]);

  useEffect(() => setZoomed(false), [open]);

  // Basic swipe support on touch screens
  const touch = useRef(null);
  const onTouchStart = (e) => (touch.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touch.current === null || zoomed) return;
    const dx = e.changedTouches[0].clientX - touch.current;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    touch.current = null;
  };

  const item = open ? items[index] : null;

  return createPortal(
    <AnimatePresence>
      {open && item && (
        <motion.div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={item.title || item.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <div className="lightbox-bar">
            <div className="lightbox-meta">
              {item.title && <p className="lightbox-title">{item.title}</p>}
              {item.subtitle && <p className="lightbox-sub">{item.subtitle}</p>}
            </div>
            <div className="lightbox-actions">
              {many && (
                <span className="lightbox-count" aria-live="polite">
                  {index + 1} / {items.length}
                </span>
              )}
              <button type="button" className="lb-btn" onClick={() => setZoomed((z) => !z)} aria-label={zoomed ? 'Fit to screen' : 'View at full size'} title={zoomed ? 'Fit to screen' : 'View at full size'}>
                {zoomed ? <ZoomOut size={18} /> : <ZoomIn size={18} />}
              </button>
              <a className="lb-btn" href={item.src} target="_blank" rel="noopener noreferrer" aria-label="Open original image in a new tab" title="Open original">
                <ExternalLink size={18} />
              </a>
              <button type="button" className="lb-btn" ref={closeRef} onClick={onClose} aria-label="Close viewer" title="Close (Esc)">
                <X size={20} />
              </button>
            </div>
          </div>

          <div className={`lightbox-stage${zoomed ? ' is-zoomed' : ''}`} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} onClick={(e) => e.target === e.currentTarget && onClose()}>
            <AnimatePresence mode="wait" initial={false} custom={dir}>
              <motion.img
                key={item.src}
                src={item.src}
                alt={item.alt}
                custom={dir}
                initial={{ opacity: 0, x: dir * 40, scale: 0.97 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: dir * -40, scale: 0.97 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setZoomed((z) => !z)}
                draggable={false}
              />
            </AnimatePresence>
          </div>

          {many && (
            <>
              <button type="button" className="lb-nav lb-prev" onClick={() => go(-1)} aria-label="Previous image">
                <ChevronLeft size={26} />
              </button>
              <button type="button" className="lb-nav lb-next" onClick={() => go(1)} aria-label="Next image">
                <ChevronRight size={26} />
              </button>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
