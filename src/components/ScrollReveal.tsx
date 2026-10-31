import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'fade-up' | 'zoom-in' | 'slide-left' | 'slide-right';
  delay?: number;
  delayMs?: number;
  once?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  variant = 'fade-up',
  delay,
  delayMs,
  once = false,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  const effectiveDelay = Math.min(delayMs ?? delay ?? 0, 120);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const checkPosition = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight || 800;

      // Trigger reveal slightly before the element enters the bottom of the screen
      if (rect.top <= vh + 60) {
        setIsVisible(true);
      } else if (!once && rect.top > vh + 120) {
        setIsVisible(false);
      }
    };

    checkPosition();
    const rafId = window.requestAnimationFrame(checkPosition);
    const t1 = window.setTimeout(checkPosition, 120);
    const t2 = window.setTimeout(checkPosition, 420);

    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once && el) observer?.unobserve(el);
          } else {
            checkPosition();
          }
        },
        {
          threshold: 0,
          rootMargin: '80px 0px 80px 0px',
        }
      );
      observer.observe(el);
    }

    window.addEventListener('scroll', checkPosition, { passive: true, capture: true });
    window.addEventListener('resize', checkPosition, { passive: true });

    return () => {
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      observer?.disconnect();
      window.removeEventListener('scroll', checkPosition, true);
      window.removeEventListener('resize', checkPosition);
    };
  }, [once]);

  const hiddenTransform = {
    'fade-up': 'translate3d(0, 22px, 0) scale(0.985)',
    'zoom-in': 'translate3d(0, 14px, 0) scale(0.95)',
    'slide-left': 'translate3d(-22px, 0, 0)',
    'slide-right': 'translate3d(22px, 0, 0)',
  }[variant];

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate3d(0, 0, 0) scale(1)' : hiddenTransform,
        transition: `opacity 380ms cubic-bezier(0.22, 1, 0.36, 1) ${effectiveDelay}ms, transform 420ms cubic-bezier(0.22, 1, 0.36, 1) ${effectiveDelay}ms`,
        willChange: 'opacity, transform',
      }}
      className={className}
    >
      {children}
    </div>
  );
};
